// eslint-disable-next-line

import React, { useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import styled from "styled-components";

const CommentSection = () => {
  const [commentUp, setCommentUp] = useState(false);
  const onToggle = () => {
    setCommentUp(!commentUp);
  };

  return (
    <CommentUpContainer commentUp={commentUp}>
      {/* 댓글 올리고 내리는 기능 */}
      <div onClick={onToggle}>{commentUp === true ? "닫기" : "댓글 보기"}</div>
      {commentUp === true ? (
        <CommentUpDetail>
          <CommentForm />
          <CommentList />
        </CommentUpDetail>
      ) : null}
    </CommentUpContainer>
  );
};

export default CommentSection;

const CommentUpContainer = styled.div`
  border: 1px solid red;
  width: 100%;
  min-height: 65%;
  height: 65%;
  background-color: #eee;
  position: absolute;
  padding: 15px 0;
  bottom: 0;
  border-radius: 24px 24px 0 0;
  transform: ${({ commentUp }) => `translateY(${commentUp ? 0 : 600}px)`};
  transition: transform 600ms ease-in-out;
`;

const CommentUpDetail = styled.div`
  /* display: flex;
  justify-content: center;
  padding: 17px; */
`;
