import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Header = (props) => {
  const navigate = useNavigate();
  return (
    <Wrap>
      <button onClick={() => navigate("/")}>홈</button>
      <p>모두의 투두리스트</p>
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div`
  width: 100%;
  height: 45px;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  border-bottom: 1px solid #ddd;
  button {
    width: 40px;
    height: 40px;
  }
  p {
    font-size: 20px;
    font-weight: 600;
  }
`;
