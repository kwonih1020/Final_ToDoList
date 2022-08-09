// eslint-disable-next-line

import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux/es/exports";
// import { useParams } from "react-router-dom";
import { __postComments } from "../../redux/modules/commentListSlice";

const CommentForm = () => {
  const dispatch = useDispatch();
  // **마찬가지로 추후 본문쪽에서 targetId 파라미터 가져와서 재연결 필요** = 권익현
  // const { targetId } = useParams();

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

    if (inputs.user === "" || inputs.desc === "")
      return alert("정보를 입력하시오");

    dispatch(
      __postComments({
        targetId: parseInt(1),
        ...inputs,
      })
    );
    setInputs({
      user: "",
      desc: "",
    });
  };

  return (
    <>
      <StForm onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="작성자 (5자 이내)"
          max="5"
          name="user"
          value={inputs.user}
          onChange={onChangeHandler}
          maxLength={5}
        />
        <input
          type="text"
          placeholder="댓글를 추가하세요 (100글자 이내)"
          max="100"
          name="desc"
          value={inputs.desc}
          onChange={onChangeHandler}
          maxLength={100}
        />
        <button>추가하기</button>
      </StForm>
    </>
  );
};

export default CommentForm;

const StForm = styled.form`
  gap: 12px;
  padding: 0 10px 0 10px;
`;
