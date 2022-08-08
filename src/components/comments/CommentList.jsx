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

  // const { targetId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(__getComments(parseInt(targetId)));
    dispatch(__getComments(1));
  }, [dispatch]);

  return (
    <>
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
    </>
  );
};

export default CommentList;
