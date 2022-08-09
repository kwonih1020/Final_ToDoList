import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import CommentSection from "../components/comments/CommentSection";
import { __deleteCommentsById } from "../redux/modules/commentListSlice";
import { __getComments } from "../redux/modules/commentListSlice";
const TodoDetailPage = (props) => {
  const dispatch = useDispatch();
  const deleteComments = useCallback(() => {
    dispatch(__deleteCommentsById(1));
  }, [dispatch]);
  return (
    <>
      <button onClick={deleteComments}>전체삭제 얍!</button>
      <CommentSection />;
    </>
  );
};

export default TodoDetailPage;
