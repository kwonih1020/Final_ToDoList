// eslint-disable-next-line

import React, { useEffect } from "react";
import GlobalLayout from "../global/GlobalLayout";
import styled from "styled-components";
import CommentSection from "../components/comments/CommentSection";
import { __getTodoList } from "../redux/modules/todoListSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";

const TodoDetailPage = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todoListSlice.todos);
  const { id } = useParams;

  // console.log("Detail-todo:", todo);

  useEffect(() => {
    dispatch(__getTodoList());
  }, [id, dispatch]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <GlobalLayout>
        <StDtailHeader>
          <div className="id">Id : {todo.id}</div>
          <div className="goBack" onClick={goBack}>
            이전으로
          </div>
        </StDtailHeader>
        <StTitle>{todo.title}</StTitle>
        <StBodyBox>
          <div className="body">{todo.body}</div>
          <button>수정</button>
        </StBodyBox>
      </GlobalLayout>
      <CommentSection />
    </>
  );
};

export default TodoDetailPage;

const StDtailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  margin-bottom: 35px;
  .goBack {
    cursor: pointer;
    text-decoration: teal wavy underline;
  }
`;

const StTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
`;

const StBodyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 550px;
  margin-top: 50px;
  .body {
    font-size: 18px;
    font-weight: 600;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border: 1px solid rgb(238, 238, 238);
    background-color: rgb(255, 255, 255);
    height: 46px;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    font-size: 20px;
    font-weight: 700;
    transition: all 0.5s;
    outline: none;
    &:hover {
      background-color: rgb(178, 176, 176);
      border: 2px solid #2f2f2f;
      color: #fff;
    }
  }
`;
