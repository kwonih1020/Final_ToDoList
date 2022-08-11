// eslint-disable-next-line

import React from "react";
import styled from "styled-components";

const TodoList = () => {
  return (
    <List>
      <div className="text">Todo List</div>
      <div className="icon">-&gt;</div>
    </List>
  );
};

export default TodoList;

const List = styled.div`
  background-color: #fff;
  border: 1px solid rgb(238, 238, 238);
  width: 100%;
  height: 120px;
  border-radius: 6px;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  .text {
    font-size: 24px;
  }
  .icon {
    font-size: 24px;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 10%) 1px 1px 1px;
  }
`;
