import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import firebaseApp from "../../config/firebaseApp";
import "./css/index.css";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
const Fstore = firebaseApp.firestore();
const Fstorage = firebaseApp.storage();
const QuestionList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState(0);
  const [nowindex, setNowindex] = useState(1);
  const [isFilter, setIsFilter] = useState(false);
  const [index, setIndex] = useState([]);
  const [search, setSearch] = useState(undefined);
  const [List, setList] = useState([]);
  const [displayList, setdisplayList] = useState([]);
  const __delete = useCallback(
    (id) => {
      Fstore.collection("question")
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
    let arr = List.slice();
    if (category !== 0) {
      arr = arr.filter(({ data }) =>
        category === 1
          ? data.category === "space"
          : category === 2
          ? data.category === "store"
          : category === 3
          ? data.category === "home"
          : data.category === "public"
      );
    }
    if (search) {
      arr = arr.filter(({ name }) => name.includes(search));
    }
    if (isFilter) {
      arr = arr.filter(({ isAnswer }) => !isAnswer);
    }
    setdisplayList(arr);
    return () => {};
  }, [List, category, search, isFilter]);
  useEffect(() => {
    Fstore.collection("question")
      .orderBy("timestamp", "desc")
      .onSnapshot((res) => {
        let arr = [];
        if (res.empty) {
          setList([]);
        } else {
          res.forEach((item) => {
            arr.push(Object.assign(item.data(), { id: item.id }));
          });
          setList(arr);
        }
      });

    return () => {};
  }, []);
  return (
    <main className="question-list-page">
      <div className="wrapper">
        <div className="top">
          <div className="title">문의 관리</div>
          <div className="right">
            <button
              className="filter-btn"
              onClick={() => {
                setIsFilter((prev) => !prev);
              }}
            >
              <div className="circle">
                {isFilter && (
                  <img src="/assets/editor/black-check.svg" alt="check" />
                )}
              </div>
              <div className="btn-title">미상담 모아보기</div>
            </button>
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
                placeholder="고객명을 입력해주세요"
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
          </div>
        </div>
        <div className="bottom">
          {displayList.length > 0 ? (
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
                  .map((item, idx) => {
                    return (
                      <QuestionCard
                        key={idx}
                        data={item}
                        __delete={__delete}
                        navigate={navigate}
                      />
                    );
                  })}
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
};

export default QuestionList;

const arr = ["문의 유형", "주거공간", "상업공간", "주택건축", "관공시설"];
const tags = [
  { title: "고객명", type: "name" },
  { title: "연락처", type: "tel" },
  { title: "문의일자", type: "period" },
  { title: "상태", type: "state" },
  { title: "상담완료여부", type: "answer" },
  { title: "삭제", type: "remove" },
];
