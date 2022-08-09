import React from "react";
import styled from "styled-components";
// import { Outlet } from "react-router-dom";
// 심채운 Outlet으로 Header 공동컴포넌트 해볼게요
// import Header from "../components/Header";
// import HomeNavigator from "../components/home/HomeNavigator";

const GlobalLayout = ({ children }) => {
  return <StGlobalLayout>{children}</StGlobalLayout>;
};

export default GlobalLayout;

const StGlobalLayout = styled.div`
  width: 100%;
  height: calc(100vh - 45px);
  padding: 24px;
  box-sizing: border-box;
  font-family: "Noto Sans KR", sans-serif;
`;
