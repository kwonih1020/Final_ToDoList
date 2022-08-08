// eslint-disable-next-line

import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import CommentBox from "../../elements/CommentBox";
import { __getComments } from "../../redux/modules/commentListSlice";

const CommentList = () => {
  const comments = useSelector((state) => state.commentListSlice.comments);
  const isDone = useSelector((state) => state.commentSlice.status);
  // const { targetId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(__getComments(parseInt(targetId)));
    dispatch(__getComments(1));
  }, [isDone]);

  return (
    <StWrap>
      {/* 밑에 map함수로 CommentBox Component 안에 있는 내용들 뿌려주기 */}
      {comments.map((comment) => {
        return (
          <CommentBox
            key={comment.id}
            id={comment.id}
            user={comment.user}
            desc={comment.desc}
          />
        );
      })}
    </StWrap>
  );
};
const StWrap = styled.div`
  height: 100%;
  overflow-y: scroll;
`;
export default React.memo(CommentList);
