import React from "react";
import HomePage from "../pages/HomePage";
import TodoAddFormPage from "../pages/TodoAddFormPage";
import TodoDetailPage from "../pages/TodoDetailPage";
import { Routes, Route } from "react-router-dom";
import TodoListPage from "../pages/TodoListPage";

function GlobalRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/add" element={<TodoAddFormPage />} />
        <Route path="/todos" element={<TodoListPage />} />
        <Route path="/todos/:id" element={<TodoDetailPage />} />
      </Routes>
    </>
  );
}

export default GlobalRouter;
