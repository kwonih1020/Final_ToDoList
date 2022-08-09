import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  __deleteComment,
  __getComment,
  __patchComment,
} from "../redux/modules/commentSlice";

const CommentBox = ({ id, user, desc }) => {
  const targetId = id;
  const [isEdit, setIsEdit] = useState(false);
  const [newDesc, setnewDesc] = useState("");
  const dispatch = useDispatch();
  const onChange = (e) => {
    setnewDesc(e.target.value);
  };
  const onDelete = useCallback(() => {
    if (isEdit) {
      setIsEdit(!isEdit);
    } else {
      dispatch(__deleteComment(targetId));
    }
  }, [dispatch]);

  const onPatch = useCallback(() => {
    if (isEdit) {
      dispatch(__patchComment({ targetId, newDesc }));
    }
    setIsEdit(!isEdit);
  }, [targetId]);

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
