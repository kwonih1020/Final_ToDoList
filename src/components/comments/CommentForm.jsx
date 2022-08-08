// eslint-disable-next-line

import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import { __postComments } from "../../redux/modules/commentListSlice";

const CommentForm = () => {
  const dispatch = useDispatch();
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
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="작성자"
          max="5"
          name="user"
          value={inputs.user}
          onChange={onChangeHandler}
        />
        <input
          type="text"
          placeholder="댓글"
          max="100"
          name="desc"
          value={inputs.desc}
          onChange={onChangeHandler}
        />
        <button>추가하기</button>
      </form>
    </>
  );
};

export default CommentForm;
