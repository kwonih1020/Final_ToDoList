// eslint-disable-next-line

import React from "react";
import styled from "styled-components";

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
