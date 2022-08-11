import React from "react";
import TodoListCard from "../elements/TodoListCard";
import GlobalLayout from "../global/GlobalLayout";

import { useDispatch, useSelector } from "react-redux";
import { __getTodoList } from "../redux/modules/todoListSlice";
import { useEffect } from "react";

const TodoListPage = () => {
  const todos = useSelector((state) => state.todoListSlice.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTodoList());
  }, []);

  return (
    <GlobalLayout>
      <h2>내 할 일</h2>
      {todos.length === 0 ? (
        <p>할 일이 없어요.</p>
      ) : (
        todos.map((todo) => {
          return <TodoListCard key={todo.id} todo={todo} />;
        })
      )}
    </GlobalLayout>
  );
};

export default TodoListPage;
