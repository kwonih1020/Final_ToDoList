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
        <Route path="/works" element={<TodoListPage />} />
        <Route path="/works/:id" element={<TodoDetailPage />} />
      </Routes>
    </>
  );
}

export default GlobalRouter;
