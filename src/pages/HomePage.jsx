import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import HomeNavigator from "../components/home/HomeNavigator";
import GlobalLayout from "../global/GlobalLayout";

const HomePage = (props) => {
  const navigate = useNavigate();
  return (
    <GlobalLayout>
      <Wrap>
        <div className="title">무엇을 할까요?</div>
        <HomeNavigator onClick={() => navigate("/add")}>
          <h3>할 일 기록하기</h3>
          <div>-&gt;</div>
        </HomeNavigator>
        <HomeNavigator onClick={() => navigate("/:id")}>
          <h3>Todo List</h3>
          <div>-&gt;</div>
        </HomeNavigator>
      </Wrap>
    </GlobalLayout>
  );
};

export default HomePage;

const Wrap = styled.div`
  width: 100%;
  height: 400px;
  .title {
    margin-top: 24px;
    font-size: 32px;
  }
`;
