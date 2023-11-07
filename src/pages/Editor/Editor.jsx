import React, { useState, useEffect, useCallback, useReducer } from "react";
import "./css/index.css";
import EdiHeader from "./components/EdiHeader";
import Screen from "./components/Screen";
import Popup from "./components/Popup";
import { useDispatch, useSelector } from "react-redux";
import { Beforeunload } from "react-beforeunload";
import { useLocation, useNavigate } from "react-router-dom";
import TitleSection from "./components/TitleSection";
import Loading from "./components/Loading";
import Header from "../../components/Header/Header";
import firebaseApp from "../../config/firebaseApp";
import { Animation } from "../../css/Animation";
import Look from "../../components/Look/Look";
const Fstore = firebaseApp.firestore();
const Fstorage = firebaseApp.storage();
function Editor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    state: { type, timestamp, category, id },
  } = useLocation();
  const temKey = useSelector((state) => state.database.key);
  const template = useSelector((state) => state.database.editor);

  function reducer(state, action) {
    switch (action.type) {
      case "RESET":
        return {
          title: undefined,
          sub: undefined,
          category: "space",
        };
      case "INIT":
        return action.info;
      case "TITLE":
        return { ...state, title: action.title };
            case "PRICE":
        return { ...state, price: action.price };
      case "SUB":
        return { ...state, sub: action.sub };
      case "CATEGORY":
        return { ...state, category: action.category };

      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  }

  const [info, patch] = useReducer(reducer, {
    title: undefined,
    sub: undefined,
    category: "space",
    price:undefined
  });

  const [isUp, setIsUp] = useState({
    status: false,
    type: "",
  });
  const [isLook, setIsLook] = useState(false);
  const __updateData = useCallback(
    (type) => {
      const { title, sub, category } = info;
      const mainfilt = template.filter(
        ({ type }) => type === "IMAGE" || type === "SMALL"
      );
      Fstore.collection("editor")
        .doc(temKey)
        .update({
          template: template,
          title: title ? title : "임시저장",
          sub: sub ? sub : "",
          category,
          mainimg:
            mainfilt.length > 0
              ? mainfilt[0].content
              : {
                  resize: "",
                  url: "",
                },
        })
        .then(() => {
          if (type) {
            navigate("/");
          }
        });
    },
    [temKey, template, info, navigate]
  );
  const __insertData = useCallback(() => {
    const { title, sub } = info;
    if (title) {
      if (sub) {
        __updateData("insert");
      } else {
        dispatch({
          type: "@config/toast",
          payload: {
            isactive: true,
            msg: "프로젝트 개요를 입력해주세요",
          },
        });
      }
    } else {
      dispatch({
        type: "@config/toast",
        payload: {
          isactive: true,
          msg: "프로젝트명을 입력해주세요",
        },
      });
    }
  }, [__updateData, dispatch, info]);

  useEffect(() => {
    if (type === "new") {
      Fstore.collection("editor")
        .add({
          timestamp: timestamp,
          category: category,
          isopen: false,
          title: "임시저장",
          mainimg: {
            url: "",
            resize: "",
          },
        })
        .then((res) => {
          patch({
            type: "RESET",
          });
          dispatch({
            type: "@layouts/INIT_KEY",
            payload: res.id,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Fstore.collection("editor")
        .doc(id)
        .get()
        .then((result) => {
          const value = result.data();
          patch({
            type: "INIT",
            info: {
              title: value.title,
              sub: value.sub,
              category: value.category,
            },
          });
          dispatch({
            type: "@layouts/CHANGE_EDITOR",
            payload: value.template,
          });
        });
      dispatch({
        type: "@layouts/INIT_KEY",
        payload: id,
      });
    }
    return () => {};
  }, [dispatch, category, id, type, timestamp]);
  useEffect(() => {
    return () => {
      dispatch({
        type: "@layouts/RESET",
      });
    };
  }, [dispatch]);
  return (
    <Beforeunload
      onBeforeunload={(e) => {
        __updateData();
        e.preventDefault();
      }}
    >
      <Header type="editor" __insert={__insertData} setIsLook={setIsLook} />
      <Animation>
        <div className="editor">
          <TitleSection category={info.category} dispatch={patch} info={info} />
          <div className="editor-wrapper">
            <EdiHeader setIsUp={setIsUp} temKey={temKey} category={category} />
            <Screen
              temKey={temKey}
              Fstore={Fstore}
              Fstorage={Fstorage}
              __update={__updateData}
            />
          </div>
          <Popup isUp={isUp} setIsUp={setIsUp} temKey={temKey} />
        </div>
      </Animation>
      <Look
        isLook={isLook}
        setIsLook={setIsLook}
        title={info.title}
        sub={info.sub}
        category={info.category}
        template={template}
      />
      <Loading />
    </Beforeunload>
  );
}

export default Editor;
