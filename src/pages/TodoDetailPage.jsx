// eslint-disable-next-line

import React from "react";
import GlobalLayout from "../global/GlobalLayout";
import styled from "styled-components";
import CommentSection from "../components/comments/CommentSection";

const TodoDetailPage = (props) => {
  return (
    <>
      <GlobalLayout>
        <StDtailHeader>
          <div className="id">id : (1)</div>
          <div className="goBack">이전으로</div>
        </StDtailHeader>
        <StTitle>title 입니당</StTitle>
        <StBodyBox>
          <div className="body">body 입니당</div>
          <button>수정</button>
        </StBodyBox>
      </GlobalLayout>
      <CommentSection />
    </>
  );
};

export default TodoDetailPage;

const StDtailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  margin-bottom: 35px;
  .goBack {
    cursor: pointer;
    text-decoration: teal wavy underline;
  }
`;

const StTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
`;

const StBodyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 550px;
  margin-top: 50px;
  .body {
    font-size: 18px;
    font-weight: 600;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border: 1px solid rgb(238, 238, 238);
    background-color: rgb(255, 255, 255);
    height: 46px;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    font-size: 20px;
    font-weight: 700;
    transition: all 0.5s;
    outline: none;
    &:hover {
      background-color: rgb(178, 176, 176);
      border: 2px solid #2f2f2f;
      color: #fff;
    }
  }
`;
