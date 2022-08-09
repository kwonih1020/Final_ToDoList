import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  __deleteComment,
  __getComment,
  __patchComment,
} from "../redux/modules/commentSlice";
import { __getComments } from "../redux/modules/commentListSlice";
const CommentBox = ({ id, user, desc }) => {
  const targetId = id;
  const [isEdit, setIsEdit] = useState(false);
  const [newDesc, setnewDesc] = useState("");
  const dispatch = useDispatch();

  const onChange = useCallback(
    (e) => {
      setnewDesc(e.target.value);
    },
    [newDesc]
  );
  const onDelete = useCallback(() => {
    if (!isEdit) {
      dispatch(__deleteComment(targetId));
      setIsEdit(false);
    } else if (isEdit) {
      setIsEdit(!isEdit);
    }
  }, [isEdit]);

  const onPatch = useCallback(() => {
    if (isEdit) {
      if (newDesc !== "") {
        dispatch(__patchComment({ targetId, newDesc }));
      }

      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
  }, [isEdit, newDesc]);

  return (
    <>
      <div>
        <h3>{user}</h3>
        {isEdit ? <input type="text" onChange={onChange} /> : <p>{desc}</p>}
      </div>
      <div>
        {/* Button Element 사용하기 */}
        <button onClick={onPatch}>수정</button>
        <button onClick={onDelete}>{isEdit ? "취소" : "삭제"}</button>
      </div>
    </>
  );
};

export default React.memo(CommentBox);
