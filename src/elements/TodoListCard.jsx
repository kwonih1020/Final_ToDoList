import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { __deleteTodo, __getTodoList } from "../redux/modules/todoListSlice";
import { useDispatch } from "react-redux/es/exports";
import { __deleteCommentsById } from "../redux/modules/commentListSlice";
import Button from "./Button";

const TodoListCard = ({ todo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = (e) => {
    e.stopPropagation();
    const result = window.confirm("진짜 지울꺼임?");

    if (result === true) {
      dispatch(__deleteTodo(todo.id));
      dispatch(__getTodoList());
      dispatch(__deleteCommentsById(todo.id));
    }
  };

  return (
    <StTodoListCard onClick={() => navigate(`./${todo.id}`)}>
      <div className="flexBox">
        <div className="info">
          <div className="title">{todo.title}</div>
          <div className="user">작성자 : {todo.user}</div>
        </div>
        <Button onClick={onClick} size="medium">삭제</Button>
      </div>
    </StTodoListCard>
  );
};

export default TodoListCard;

const StTodoListCard = styled.div`
  width: 100%;
  height: 90px;
  border: 1px solid rgb(221, 221, 221);
  padding: 12px;
  box-sizing: border-box;
  margin-bottom: 10px;
  border-radius: 8px;
  cursor: pointer;
  .flexBox {
    /* background-color: royalblue; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    .info {
      /* background-color: pink; */
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .title {
        font-size: 20px;
        font-weight: bold;
      }
      .user {
        font-size: 12px;
        margin: 10px 0 0 0;
      }
    }
  }
`;
