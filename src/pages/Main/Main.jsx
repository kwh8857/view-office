import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import firebaseApp from "../../config/firebaseApp";
import "./css/index.css";
const Fstore = firebaseApp.firestore();
const Fstorage = firebaseApp.storage();
function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState(0);
  const [nowindex, setNowindex] = useState(1);
  const [index, setIndex] = useState([]);
  const [search, setSearch] = useState(undefined);
  const [List, setList] = useState([]);
  const [displayList, setdisplayList] = useState([]);
  const __fixnav = useCallback(
    (id, cat, timestamp) => {
      navigate("/editor", {
        state: {
          type: "fix",
          category: cat,
          timestamp,
          id,
        },
      });
    },
    [navigate]
  );

  const __changOpen = useCallback((id, open) => {
    Fstore.collection("editor").doc(id).update({
      isopen: open,
    });
  }, []);
  const __addIndex = useCallback(() => {
    let arr = displayList.slice();
    let length = Math.ceil(arr.length / 10);
    console.log(length);
    if (nowindex + 1 <= length) {
      setNowindex(nowindex + 1);
    }
  }, [nowindex, displayList]);
  const __minusIndex = useCallback(() => {
    if (nowindex - 1 >= 1) {
      setNowindex(nowindex - 1);
    }
  }, [nowindex]);

  const __delete = useCallback(
    (id) => {
      Fstorage.ref(`editor/${id}`)
        .listAll()
        .then((res) => {
          res.items.forEach((file) => {
            Fstorage.ref(`editor/${id}/${file.name}`).delete();
          });
        });
      Fstore.collection("editor")
        .doc(id)
        .delete()
        .then(() => {
          dispatch({
            type: "@config/toast",
            payload: {
              isactive: true,
              msg: "프로젝트가 삭제되었습니다",
            },
          });
        });
    },
    [dispatch]
  );
  useEffect(() => {
    let arr = displayList.slice();
    let length = Math.ceil(arr.length / 10);
    let indexarr = [];
    if (length < 5) {
      for (let index = 0; index < Math.ceil(arr.length / 10); index++) {
        indexarr.push(index + 1);
      }
    } else {
      if (nowindex <= 3) {
        for (let index = 1; index < 6; index++) {
          indexarr.push(index);
        }
      } else {
        for (
          let index = length - nowindex > 1 ? -2 : -4 + (length - nowindex);
          index < (length - nowindex > 1 ? 3 : length - nowindex + 1);
          index++
        ) {
          indexarr.push(nowindex + index);
        }
      }
    }

    setIndex(indexarr);

    return () => {};
  }, [displayList, nowindex]);

  useEffect(() => {
    const arr = List.slice();
    if (category !== 0) {
      const cat = arr.filter(({ data }) =>
        category === 1
          ? data.category === "space"
          : category === 2
          ? data.category === "store"
          : category === 3
          ? data.category === "home"
          : data.category === "public"
      );
      if (search) {
        setdisplayList(
          cat.filter(({ data: { title } }) => title.includes(search))
        );
      } else {
        setdisplayList(cat);
      }
    } else {
      if (search) {
        setdisplayList(
          arr.filter(({ data: { title } }) => title.includes(search))
        );
      } else {
        setdisplayList(arr);
      }
    }
    return () => {};
  }, [List, category, search, nowindex]);

  useEffect(() => {
    Fstore.collection("editor")
      .orderBy("timestamp", "desc")
      .onSnapshot((res) => {
        let arr = [];
        if (res.empty) {
          setList([]);
        } else {
          res.forEach((item) => {
            arr.push({ key: item.id, data: item.data() });
          });
          setList(arr);
        }
      });

    return () => {};
  }, []);

  return (
    <main className="main">
      <div className="wrapper">
        <div className="top">
          <div className="title">포트폴리오 관리</div>
          <div className="right">
            <div
              className={`category ${isOpen ? "open" : ""}`}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <div className="now">
                {arr[category]}
                <img src="/assets/category.svg" alt="" />
              </div>
              {arr.map((item, idx) => {
                return (
                  <div
                    className="select"
                    key={idx}
                    onClick={() => {
                      setCategory(idx);
                    }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="search">
              <input
                type="text"
                placeholder="검색어를 입력해주세요"
                onChange={(e) => {
                  if (e.target.value) {
                    setSearch(e.target.value);
                  } else {
                    setSearch(undefined);
                  }
                }}
              />
              <img src="/assets/search.svg" alt="" />
            </div>
            <button
              className="insert"
              onClick={() => {
                navigate("/editor", {
                  state: {
                    type: "new",
                    timestamp: Date.now(),
                    category: "space",
                  },
                });
              }}
            >
              <img src="/assets/plus.svg" alt="" />
              <div>포트폴리오관리</div>
            </button>
          </div>
        </div>
        <div className="bottom">
          {List.length > 0 ? (
            <>
              <div className="tag-wrapper">
                {tags.map(({ title, type }, idx) => {
                  return (
                    <div key={idx} className={type}>
                      {title}
                    </div>
                  );
                })}
              </div>
              <div className="list">
                {displayList
                  .slice()
                  .splice((nowindex - 1) * 10, 10)
                  .map(
                    (
                      {
                        data: {
                          title,
                          category,
                          mainimg: { url },
                          isopen,
                          timestamp,
                        },
                        key,
                      },
                      idx
                    ) => {
                      return (
                        <Card
                          key={idx}
                          title={title}
                          category={category}
                          isopen={isopen}
                          img={url}
                          id={key}
                          timestamp={timestamp}
                          __delete={__delete}
                          __changOpen={__changOpen}
                          __fixnav={__fixnav}
                        />
                      );
                    }
                  )}
              </div>
              <div className="index-wrapper">
                <img src="/assets/arrow.svg" alt="" onClick={__minusIndex} />
                <div className="index-wrapper">
                  {index.map((item, idx) => {
                    return (
                      <button
                        key={idx}
                        className={nowindex === item ? "active" : undefined}
                        onClick={() => {
                          if (nowindex !== item) {
                            setNowindex(item);
                          }
                        }}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
                <img
                  src="/assets/arrow.svg"
                  alt=""
                  className="right-arrow"
                  onClick={__addIndex}
                />
              </div>
            </>
          ) : (
            <div className="disabled">
              <img src="/assets/disable.svg" alt="" />
              <div className="title">등록된 포트폴리오가 없습니다</div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Main;

const arr = ["전체보기", "주거공간", "상업공간", "주택건축", "관공시설"];
const tags = [
  { title: "대표이미지", type: "image" },
  { title: "카테고리", type: "category" },
  { title: "프로젝트명", type: "name" },
  { title: "수정", type: "fix" },
  { title: "공개여부", type: "open" },
  { title: "삭제", type: "remove" },
];
