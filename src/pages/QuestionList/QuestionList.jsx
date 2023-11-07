import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import firebaseApp from "../../config/firebaseApp";
import "./css/index.css";
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default QuestionList;

const arr = ["문의 유형", "주거공간", "상업공간", "주택건축", "관공시설"];
const tags = [
  { title: "대표이미지", type: "image" },
  { title: "카테고리", type: "category" },
  { title: "프로젝트명", type: "name" },
  { title: "수정", type: "fix" },
  { title: "공개여부", type: "open" },
  { title: "고정", type: "lock" },
  { title: "삭제", type: "remove" },
];
