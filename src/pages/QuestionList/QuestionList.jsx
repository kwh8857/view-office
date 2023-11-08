import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import firebaseApp from "../../config/firebaseApp";
import "./css/index.css";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
const Fstore = firebaseApp.firestore();
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
  console.log(List);
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
              msg: "문의가 삭제되었습니다",
            },
          });
        });
    },
    [dispatch]
  );
  const __addIndex = useCallback(() => {
    let arr = displayList.slice();
    let length = Math.ceil(arr.length / 10);
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
      arr = arr.filter(({ type }) => type === filter_list[category]);
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
                {filter_list[category]}
                <img src="/assets/category.svg" alt="" />
              </div>
              {filter_list.map((item, idx) => {
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

const filter_list = [
  "전체",
  "아파트",
  "주택 별장",
  "상가",
  "공장",
  "사무실",
  "카페",
  "기타",
  "전체 리모델링",
  "부분리모델링",
];
const tags = [
  { title: "고객명", type: "name" },
  { title: "연락처", type: "tel" },
  { title: "문의일자", type: "period" },
  { title: "상태", type: "state" },
  { title: "상담완료여부", type: "answer" },
  { title: "삭제", type: "remove" },
];
