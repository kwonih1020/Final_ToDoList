// eslint-disable-next-line

import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import styled from "styled-components";
import { __deleteComment, __patchComment } from "../redux/modules/commentSlice";
import Button from "./Button";
import styled from "styled-components";
import Input from "./Input";

const CommentBox = ({ id, user, desc, toggleActive, activation }) => {
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
      toggleActive(targetId);
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
    toggleActive(targetId);
  }, [isEdit, newDesc]);

  return (
    <StComment>
      <StInputWrapper>
        <div className="inputContainer">
          {user}
          {isEdit ? (
            <Input className="isEditInput" type="text" onChange={onChange} />
          ) : (
            <p>{desc}</p>
          )}
        </div>
      </StInputWrapper>
      <StControlGroup>
        {/* Button Element 사용하기 */}
        {activation ? (
          <>
            <Button size="medium" onClick={onPatch}>
              수정
            </Button>
            <Button size="medium" onClick={onDelete}>
              {isEdit ? "취소" : "삭제"}
            </Button>
          </>
        ) : (
          <>
            <StTestBtn>수정</StTestBtn>
            <StTestBtn>{isEdit ? "취소" : "삭제"}</StTestBtn>
          </>
        )}
      </StControlGroup>
    </StComment>
  );
};

const StTestBtn = styled.button`
  background-color: red;
`;

export default React.memo(CommentBox);

const StComment = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: row;
  border-bottom: 1px solid rgb(238, 238, 238);
  height: 75px;
  padding: 0px 29px;
`;

const StControlGroup = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: row;
  flex-shrink: 0;
  gap: 3px;
`;

const StInputWrapper = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  .inputContainer {
    display: block;
    width: 100%;
    margin-top: 2px;
  }
  .isEditInput {
    margin-top: 5px;
  }
`;
