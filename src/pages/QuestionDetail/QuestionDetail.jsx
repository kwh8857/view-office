import React, { useCallback } from "react";
import "./css/index.css";
import { useLocation, useNavigate } from "react-router-dom";
import firebaseApp from "../../config/firebaseApp";
import { useState } from "react";
import { useDispatch } from "react-redux";
const Fstore = firebaseApp.firestore();
const QuestionDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const location = useLocation();

  const [isAnswer, setisAnswer] = useState(location.state.isAnswer);
  const [value, setValue] = useState(
    location.state.memo ? location.state.memo : ""
  );
  const ChangeAnswer = useCallback(
    (id) => {
      Fstore.collection("question").doc(id).update({ isAnswer: !isAnswer });
      setisAnswer((prev) => !prev);
    },
    [isAnswer]
  );
  const UpdateMemo = useCallback(
    (id) => {
      Fstore.collection("question").doc(id).update({ memo: value });
      dispatch({
        type: "@config/toast",
        payload: {
          isactive: true,
          msg: "메모를 저장하였습니다",
        },
      });
    },
    [value]
  );

  if (location.state) {
    const { etc, feat, id, name, price, tel, memo, type } = location.state;

    const list_arr = [
      {
        title: "고객명",
        content: name,
      },
      {
        title: "연락처",
        content: tel,
      },
      {
        title: "예산",
        content: `${price}원`,
      },
      {
        title: "공간유형",
        content: type,
      },
      {
        title: "평형",
        content: `${feat}평`,
      },
      {
        title: "기타 문의 사항",
        content: etc,
      },
    ];
    return (
      <div className="question-detail-page">
        <div className="title-section">
          <div className="title">
            <img src="/assets/back.svg" alt="뒤로가기"  onClick={()=>{
              navigate(-1)
            }}/>
            문의상세
          </div>
          <button
            className="answer-btn"
            onClick={() => {
              ChangeAnswer(id);
            }}
            style={
              isAnswer
                ? {
                    borderColor: "black",
                  }
                : undefined
            }
          >
            <div className="circle">
              {isAnswer && (
                <img src="/assets/editor/black-check.svg" alt="check" />
              )}
            </div>
            <div className="btn-title">상담완료</div>
          </button>
        </div>
        <div className="content-box">
          <div className="content-box-title">문의 내용</div>
          <div className="content-list">
            {list_arr.map(({ title, content }, idx) => {
              return (
                <div className="content-line" key={idx}>
                  <div className="content-tag">{title}</div>
                  <div className="content">{content}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="memo-section">
          <div className="title">상담 메모</div>
          <textarea
            value={value}
            placeholder="내용 입력"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          ></textarea>
          <button onClick={()=>{
            UpdateMemo(id)
          }}>메모 저장하기</button>
        </div>
      </div>
    );
  }
  return <div>잘못된 페이지입니다</div>;
};

export default QuestionDetail;
