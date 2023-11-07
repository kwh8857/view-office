import React, { useCallback } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 989px;
  margin-bottom: 27.5px;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      font-size: 30px;
      font-weight: bold;
    }
  }
  .ti {
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .grid-wrapper {
    margin-top: 30px;
    display: grid;
    width: 582px;
    row-gap: 34px;
    & > .category-wrapper {
      & > .btn-wrapper {
        display: flex;
        column-gap: 14px;

        & > button {
          cursor: pointer;
          display: flex;
          width: 135px;
          height: 50px;
          background: #ffffff;
          border: solid 1px #dbdbdb !important;
          border-radius: 5px;
          align-items: center;
          box-sizing: border-box;
          padding-left: 11px;
          column-gap: 8px;
          & > .circle {
            width: 21px;
            height: 21px;
            border: 1px solid #dbdbdb;
            border-radius: 21px;
          }
          & > .text {
            font-weight: 500;
            font-size: 14px;
          }
        }
        & > .active {
          border: solid 1px #000000 !important;
          & > .circle {
            border-color: unset;
          }
        }
      }
    }
    .title-wrapper {
      display: flex;
      column-gap: 24px;
      & > div:nth-child(1) {
        width: 582px;
      }
      & > div:nth-child(2) {
        width: 388px;
      }
    }
  }
  input {
    width: 100%;
    height: 50px;
    border: solid 1px #dbdbdb;
    border-radius: 5px;
    font-size: 17px;
    box-sizing: border-box;
    padding: 12px 17px;
    background-color: #ffffff;
  }
  textarea {
    width: 582px;
    height: 94px;
    border: solid 1px #dbdbdb;
    background-color: #ffffff;
    border-radius: 5px;
    font-size: 17px;
    box-sizing: border-box;
    padding: 12px 17px;
  }
`;

function TitleSection({ category, dispatch, info: { title, sub, price } }) {
  const __changeCategory = useCallback(
    (type) => {
      dispatch({
        type: "CATEGORY",
        category: type,
      });
    },
    [dispatch]
  );

  return (
    <Wrapper>
      <div className="top">
        <div className="title">포트폴리오 추가</div>
      </div>

      <div className="grid-wrapper">
        <div className="title-wrapper">
          <div className="title-st">
            <div className="ti">게시글 제목</div>
            <input
              value={title ? title : ""}
              type="text"
              maxLength={60}
              placeholder="게시글 제목을 입력해주세요"
              onChange={(e) => {
                if (e.target.value) {
                  dispatch({
                    type: "TITLE",
                    title: e.target.value,
                  });
                } else {
                  dispatch({
                    type: "TITLE",
                    title: undefined,
                  });
                }
              }}
            />
          </div>
          <div className="title-st">
            <div className="ti">견적 (선택)</div>
            <input
              value={price ? price : ""}
              type="text"
              maxLength={60}
              placeholder="견적을 입력해주세요"
              onChange={(e) => {
                if (e.target.value) {
                  dispatch({
                    type: "PRICE",
                    price: e.target.value,
                  });
                } else {
                  dispatch({
                    type: "PRICE",
                    price: undefined,
                  });
                }
              }}
            />
          </div>
        </div>
        <div className="category-wrapper">
          <div className="ti">카테고리 선택</div>
          <div className="btn-wrapper">
            {categoryArr.map(({ title, type }, idx) => {
              return (
                <button
                  key={idx}
                  className={type === category ? "active" : ""}
                  onClick={() => {
                    __changeCategory(type);
                  }}
                >
                  <div className="circle">
                    {category === type ? (
                      <img src="/assets/editor/black-check.svg" alt="" />
                    ) : undefined}
                  </div>
                  <div className="text">{title} </div>
                </button>
              );
            })}
          </div>
        </div>
        <div className="sub-wrapper">
          <div className="ti">프로젝트 개요</div>
          <textarea
            type="text"
            maxLength={180}
            value={sub ? sub : ""}
            placeholder="개요는 최대 3줄까지 입력해주세요"
            onChange={(e) => {
              const line = e.target.value.split(/\n/g);
              line.splice(3);
              let test = line.join();
              let result = test.replace(/,/g, "\n");
              if (result) {
                dispatch({
                  type: "SUB",
                  sub: result,
                });
              } else {
                dispatch({
                  type: "SUB",
                  sub: undefined,
                });
              }
            }}
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default TitleSection;

const categoryArr = [
  { title: "주거공간", type: "space" },
  { title: "상업공간", type: "store" },
  { title: "주택건축", type: "home" },
  { title: "관공시설", type: "public" },
];
