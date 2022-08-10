// eslint-disable-next-line

import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../elements/Button";
import { AiFillHome } from "react-icons/ai";

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <Wrap>
      <Button size="small" onClick={() => navigate("/")}>
        <AiFillHome size="24" color="black" />
      </Button>
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
  p {
    font-size: 20px;
    font-weight: 600;
  }
`;
