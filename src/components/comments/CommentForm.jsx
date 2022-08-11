// eslint-disable-next-line

import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import { __postComments } from "../../redux/modules/commentListSlice";
import Button from "../../elements/Button";
import Input from "../../elements/Input";

const CommentForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [inputs, setInputs] = useState({
    user: "",
    desc: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      __postComments({
        targetId: parseInt(id),
        ...inputs,
      })
    );
    setInputs({ ...inputs, user: "", desc: "" });
  };

  return (
    <>
      <StForm onSubmit={onSubmitHandler}>
        <StNameInput>
          <Input
            type="text"
            placeholder="작성자 (5자 이내)"
            max="5"
            name="user"
            value={inputs.user}
            onChange={onChangeHandler}
            maxLength={5}
          />
        </StNameInput>
        <StCommentInput>
          <Input
            type="text"
            placeholder="댓글를 추가하세요 (100글자 이내)"
            max="100"
            name="desc"
            value={inputs.desc}
            onChange={onChangeHandler}
            maxLength={100}
          />
        </StCommentInput>
        <Button size="medium">추가하기</Button>
      </StForm>
    </>
  );
};

export default CommentForm;

const StForm = styled.form`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  width: 100%;
`;

const StNameInput = styled.div`
  width: 25%;
`;

const StCommentInput = styled.div`
  width: 67%;
`;
