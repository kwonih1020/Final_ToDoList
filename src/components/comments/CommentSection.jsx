// eslint-disable-next-line

import React, { useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import styled, { css } from "styled-components";

const CommentSection = () => {
  const [commentUp, setCommentUp] = useState(false);
  const onToggle = () => {
    setCommentUp(!commentUp);
  };

  return (
    <CommentUpContainer commentUp={commentUp}>
      {/* 댓글 올리고 내리는 기능 */}
      <CommentToggle onClick={onToggle}>
        {commentUp === true ? "닫기" : "댓글 보기"}
      </CommentToggle>
      <CommentUpDetail>
        <CommentForm />
        <CommentList />
      </CommentUpDetail>
    </CommentUpContainer>
  );
};

export default CommentSection;

const CommentUpContainer = styled.div`
  border: 1px solid #f9baba;
  width: 100%;
  background-color: #fff1f1;
  position: absolute;
  padding: 10px 0px 15px 0px;
  bottom: 0;
  overflow-y: hidden;
  border-radius: 24px 24px 0 0;
  ${({ commentUp }) => {
    // eslint-disable-next-line default-case
    switch (commentUp) {
      case true: {
        return css`
          height: 400px;
        `;
      }
      case false: {
        return css`
          height: 56px;
        `;
      }
    }
  }}
  transition: height 0.6s ease-in-out;
  box-sizing: border-box;
`;

const CommentUpDetail = styled.div`
  height: 100%;
`;

const CommentToggle = styled.div`
  cursor: pointer;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px 0px 15px 12px;
`;
