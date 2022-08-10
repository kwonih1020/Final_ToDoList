import React from "react";
import TodoAddForm from "../components/todos/TodoAddForm";
import GlobalLayout from "../global/GlobalLayout";

function TodoAddFormPage () {
  return (
    <GlobalLayout>
      <h1>TodoAddFormPage입니다.</h1>
      <TodoAddForm/>
    </GlobalLayout>
    
  );
};

export default TodoAddFormPage;