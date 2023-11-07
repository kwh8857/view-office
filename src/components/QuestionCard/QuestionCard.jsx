import React, { useState } from "react";
import { normalTime } from "../../lib/lib";
import { useCallback } from "react";
import firebaseApp from "../../config/firebaseApp";
const Fstore = firebaseApp.firestore();
const QuestionCard = ({ data, __delete, navigate }) => {
  const { name, tel, timestamp, isAnswer, id } = data;
  const [isDelete, setIsDelete] = useState(false);
  const ChangeAnswer = useCallback(() => {
    Fstore.collection("question").doc(id).update({ isAnswer: !isAnswer });
  }, [id, isAnswer]);

  return (
    <div className="question-card">
      <div
        className="touch-area"
        onClick={() => {
          navigate("/question/detail", {
            state: data,
          });
        }}
      />
      <div className="name">{name}</div>
      <div className="tel">{tel}</div>
      <div className="period">{normalTime(timestamp)}</div>
      <div
        className="state"
        style={!isAnswer ? { color: "#CD3325" } : undefined}
      >
        {isAnswer ? "상담완료" : "미상담"}
      </div>
      <button
        className="answer-btn"
        onClick={ChangeAnswer}
        style={
          isAnswer
            ? {
                borderColor: "black",
              }
            : undefined
        }
      >
        <div className="circle">
          {isAnswer && <img src="/assets/editor/black-check.svg" alt="check" />}
        </div>
        <div className="btn-title">상담완료</div>
      </button>
      <div
        className="remove"
        onClick={() => {
          setIsDelete(true);
        }}
      >
        <img src="/assets/cancel.svg" alt="" />
      </div>
      <div className={`delete-box ${isDelete ? "active" : ""}`}>
        <div className="title">삭제하시겠습니까?</div>
        <button
          onClick={() => {
            __delete(id);
            setIsDelete(false);
          }}
        >
          삭제하기
        </button>
        <svg
          onClick={() => {
            setIsDelete(false);
          }}
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L19.7136 19.7136"
            stroke="#C4C4C4"
            strokeWidth={2}
            strokeMiterlimit={10}
            strokeLinecap="round"
          />
          <path
            d="M19.7136 1L1 19.7136"
            stroke="#C4C4C4"
            strokeWidth={2}
            strokeMiterlimit={10}
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default QuestionCard;
