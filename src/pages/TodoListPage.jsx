import React from "react";
import TodoListCard from "../elements/TodoListCard";
import GlobalLayout from "../global/GlobalLayout";

import { useDispatch, useSelector } from "react-redux";
import { __getTodo } from "../redux/modules/todoListSlice";
import { useEffect } from "react";
// import axios from "axios";

const TodoListPage = () => {
  const todos = useSelector((state) => state.todoListSlice.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTodo());
  }, [dispatch]);

  // console.log("todo :", todo);
  console.log("todos :", todos);
  return (
    <GlobalLayout>
      <h2>내 할 일</h2>
      {todos.map((todo) => {
        return <TodoListCard key={todo.id} todo={todo} />;
      })}
    </GlobalLayout>
  );
};

export default TodoListPage;
