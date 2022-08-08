import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { __deleteComment } from "../redux/modules/commentSlice";

const CommentBox = ({ id, user, desc }) => {
  const targetId = id;
  const dispatch = useDispatch();
  const onDelete = useCallback(() => {
    dispatch(__deleteComment(targetId));
  }, [dispatch]);
  return (
    <>
      <div>
        <h3>{user}</h3>
        <p>{desc}</p>
      </div>
      <div>
        {/* Button Element 사용하기 */}
        <button>수정</button>
        <button onClick={onDelete}>삭제</button>
      </div>
    </>
  );
};

export default CommentBox;
