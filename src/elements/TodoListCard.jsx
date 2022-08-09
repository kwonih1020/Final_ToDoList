import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { getName } from "../redux/modules/todoListSlice";

const TodoListCard = ({ todo }) => {
  // const todos = useSelector((state) => state.todoListSlice.todos);
  // const [todo, setTodo] = useState(null);

  // const fetchTodos = async () => {
  //   const { data } = await axios.get("http://localhost:3001/todos");
  //   setTodo(data);
  // };

  // useEffect(() => {
  //   fetchTodos();
  // }, []);

  const navigate = useNavigate();
  // console.log("Card todo :", todo);
  // console.log(todos);

  return (
    <StTodoListCard onClick={() => navigate("./:id")}>
      <div className="flexBox">
        <div className="info">
          <div className="title">{todo.title}</div>
          <div className="user">작성자 : {todo.user}</div>
        </div>
        <button>삭제</button>
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
    button {
      width: 80px;
      height: 30px;
    }
  }
`;
