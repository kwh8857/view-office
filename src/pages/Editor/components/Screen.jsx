import React, { useCallback, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Droppable,
  DragDropContext,
  Draggable,
  resetServerContext,
} from "react-beautiful-dnd";
import TemplateImage from "./Template/TemplateImage";
import TemplateEmty from "./Template/TemplateEmty";
import TemplateTitle from "./Template/TemplateTitle";
import Resizer from "react-image-file-resizer";
import TemplateDouble from "./Template/TemplateDouble";
import TemplateYoutube from "./Template/TemplateYoutube";
resetServerContext();

function Screen({ temKey, Fstore, Fstorage, __update }) {
  const dispatch = useDispatch();
  const template = useSelector((state) => state.database.editor);
  const [foucsIdx, setFoucsIdx] = useState(0);
  const handleOnDragEnd = useCallback(
    (result) => {
      setFoucsIdx(-1);
      if (!result.destination) return;
      const currentTags = [...template];
      const beforeDragItemIndex = result.source.index;
      const afterDragItemIndex = result.destination.index;
      const removeTag = currentTags.splice(beforeDragItemIndex, 1);

      currentTags.splice(afterDragItemIndex, 0, removeTag[0]);

      dispatch({
        type: "@layouts/CHANGE_EDITOR",
        payload: currentTags,
      });
    },
    [template, dispatch]
  );
  const __deleteTemplate = useCallback(
    (idx) => {
      if (template.length > 1) {
        setFoucsIdx(-1);
        const arr = template.slice();
        arr.splice(idx, 1);
        dispatch({
          type: "@layouts/CHANGE_EDITOR",
          payload: arr,
        });
      }
    },
    [template, dispatch]
  );
  const __imageUpload = useCallback(
    (data64, name, resize) => {
      return new Promise((resolve, reject) => {
        const data = data64.split(",")[1];
        const redata = resize.split(",")[1];
        Fstorage.ref(`editor/${temKey}/${name}`)
          .putString(data, "base64")
          .then((result) => {
            result.ref
              .getDownloadURL()
              .then((downloadUrl) => {
                Fstorage.ref(`editor/${temKey}/${name}-resize`)
                  .putString(redata, "base64")
                  .then((result) => {
                    result.ref.getDownloadURL().then((resizeUrl) => {
                      resolve({ url: downloadUrl, resize: resizeUrl });
                    });
                  });
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    },
    [temKey, Fstorage]
  );
  const __fileReader = useCallback((file) => {
    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.onload = function (e) {
        const imageUrl = e.target.result;
        var img = new Image();
        img.src = imageUrl;
        img.onload = function (e) {
          Resizer.imageFileResizer(
            file,
            375,
            285,
            "JPEG",
            100,
            0,
            (uri) => {
              resolve({
                url: imageUrl,
                resize: uri,
                name: file.name,
                width: this.width,
                height: this.height,
              });
            },
            "base64"
          );
        };
      };
      reader.readAsDataURL(file);
    });
  }, []);
  const __imageUpdate = useCallback(
    (e, type, index, sub) => {
      dispatch({
        type: "@config/isLoading",
        payload: true,
      });
      let fileList = Object.values(e.target.files);
      const base64 = Promise.all(
        fileList.map((item) => {
          const da = __fileReader(item).then((result) => {
            return result;
          });
          return da;
        })
      );
      base64.then((result) => {
        Promise.all(
          result.map(({ url, name, resize, width, height }) => {
            const po = __imageUpload(url, name, resize).then((result) => {
              return result;
            });
            return po;
          })
        ).then((result) => {
          if (type === "IMAGE" || type === "SMALL") {
            dispatch({
              type: "@layouts/CHANGE_TITLE",
              payload: result[0],
              idx: index,
            });
          } else {
            dispatch({
              type: "@layouts/CHANGE_IMAGE",
              payload: result[0],
              idx: index,
              index: sub,
            });
          }
          __update();
          dispatch({
            type: "@config/isLoading",
            payload: false,
          });
        });
      });
    },
    [__imageUpload, __fileReader, dispatch, __update]
  );
  useEffect(() => {
    function deleteTem(event) {
      if (event.key === "Backspace" && template.length > 1 && foucsIdx > -1) {
        const arr = template.slice();
        let nowTemplate = arr[foucsIdx];
        if (nowTemplate.type !== "TITLE") {
          setFoucsIdx(-1);

          if (nowTemplate.type === "IMAGE") {
            const { resize, url } = nowTemplate.content;
            Fstorage.refFromURL(resize).delete();
            Fstorage.refFromURL(url).delete();
          }
          arr.splice(foucsIdx, 1);
          Fstore.collection("editor").doc(temKey).update({ template: arr });
          dispatch({
            type: "@layouts/CHANGE_EDITOR",
            payload: arr,
          });
        } else {
          arr.splice(foucsIdx, 1);
          if (
            nowTemplate.type === "TITLE" &&
            foucsIdx !== 0 &&
            nowTemplate.content.length === 0
          ) {
            dispatch({
              type: "@layouts/CHANGE_EDITOR",
              payload: arr,
            });
          }
          setFoucsIdx(-1);
        }
      }
    }
    document.addEventListener("keydown", deleteTem);
    return () => {
      document.removeEventListener("keydown", deleteTem);
    };
  }, [foucsIdx, template, dispatch, temKey, Fstore, Fstorage]);
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="tags" direction="vertical">
        {(provided) => (
          <div
            className="editor-screen"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {template.length > 0 ? (
              template.map(({ type, content, id }, idx) => {
                return (
                  <Draggable key={id} draggableId={id} index={idx}>
                    {(provided) => {
                      if (type === "IMAGE" || type === "SMALL") {
                        return (
                          <TemplateImage
                            data={content}
                            key={idx}
                            idx={idx}
                            provided={provided}
                            setFocus={setFoucsIdx}
                            template={template}
                            __imageUpdate={__imageUpdate}
                            type={type}
                          />
                        );
                      } else if (type === "TITLE") {
                        return (
                          <TemplateTitle
                            key={idx}
                            data={content}
                            provided={provided}
                            idx={idx}
                            setFocus={setFoucsIdx}
                            focusIdx={foucsIdx}
                            __delete={__deleteTemplate}
                          />
                        );
                      } else if (type === "YOUTUBE") {
                        return (
                          <TemplateYoutube
                            key={idx}
                            data={content}
                            setFocus={setFoucsIdx}
                            provided={provided}
                            idx={idx}
                            template={template}
                          />
                        );
                      } else {
                        return (
                          <TemplateDouble
                            data={content}
                            key={idx}
                            idx={idx}
                            provided={provided}
                            setFocus={setFoucsIdx}
                            template={template}
                            __imageUpdate={__imageUpdate}
                            type={type}
                          />
                        );
                      }
                    }}
                  </Draggable>
                );
              })
            ) : (
              <TemplateEmty />
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default React.memo(Screen);
