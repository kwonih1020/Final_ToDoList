import React from "react";
import HomePage from "../pages/HomePage";
import TodoDetailPage from "../pages/TodoAddFormPage";
import TodoAddFormPage from "../pages/TodoDetailPage";
import { Routes, Route } from "react-router-dom";

function GlobalRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/add" element={<TodoAddFormPage />} />
        <Route path="/:id" element={<TodoDetailPage />} />
      </Routes>
    </>
  );
}

export default GlobalRouter;
