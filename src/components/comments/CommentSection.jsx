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
      <div onClick={onToggle}>{commentUp === true ? "닫기" : "댓글 보기"}</div>

      <CommentUpDetail>
        <CommentForm />
        <CommentList />
      </CommentUpDetail>
    </CommentUpContainer>
  );
};

export default CommentSection;

const CommentUpContainer = styled.div`
  border: 1px solid red;
  width: 100%;
  /* min-height: 65%; */
  background-color: #eee;
  position: absolute;
  padding: 15px;
  bottom: 0;
  overflow-y: hidden;
  border-radius: 24px 24px 0 0;
  ${({ commentUp }) => {
    switch (commentUp) {
      case true: {
        return css`
          height: 400px;
        `;
      }
      case false: {
        return css`
          height: 25px;
        `;
      }
    }
  }}
  transition: height 0.6s ease-in-out;
  div:nth-of-type(1) {
    padding: 10px 0 15px 0;
  }
`;

const CommentUpDetail = styled.div`
  height: 100%;
`;
