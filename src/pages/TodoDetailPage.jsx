// eslint-disable-next-line

import React, { useEffect, useState } from "react";
import GlobalLayout from "../global/GlobalLayout";
import styled from "styled-components";
import CommentSection from "../components/comments/CommentSection";
import { __patchTodo, __getTodo } from "../redux/modules/todoSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";

const TodoDetailPage = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todoSlice.todo);
  const { id } = useParams();

  const [isEdit, setIsEdit] = useState(false);
  const [newBody, setNewBody] = useState("");

  const onChange = (e) => {
    setNewBody(e.target.value);
    // console.log(newbody);
  };

  useEffect(() => {
    dispatch(__getTodo(parseInt(id)));
  }, [id, dispatch]);

  const goBack = () => {
    navigate(-1);
  };

  const modify = () => {
    if (isEdit) {
      dispatch(__patchTodo({ id: parseInt(id), newBody }));
    }
    setIsEdit(!isEdit);
    // console.log("isEdit 변경완료!:", isEdit);
  };
  // console.log("data:", data);
  return (
    <>
      <GlobalLayout>
        <StDtailHeader>
          <div className="id">Id : {data.id}</div>
          <div className="goBack" onClick={goBack}>
            이전으로
          </div>
        </StDtailHeader>
        <StTitle>{data.title}</StTitle>
        <StBodyBox className="bodybox">
          {isEdit === false ? (
            <div className="body">{data.body}</div>
          ) : (
            <TextArea
              placeholder="수정할 내용을 입력하세요."
              onChange={onChange}
              defaultvalue={newBody}
            />
          )}
          <button onClick={modify}>
            {isEdit === false ? "수정하기" : " 저장하기"}
          </button>
        </StBodyBox>
      </GlobalLayout>
      <CommentSection />
    </>
  );
};

export default TodoDetailPage;

const StDtailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  margin-bottom: 35px;
  .goBack {
    cursor: pointer;
    text-decoration: teal wavy underline;
  }
`;

const StTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  border: 2px solid rgb(238, 238, 238);
  padding: 12px;
  font-size: 18px;
  font-weight: 700;
  outline: none;
  border-radius: 9px;
`;

const StBodyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 550px;
  margin-top: 50px;
  .body {
    font-size: 18px;
    font-weight: 600;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border: 1px solid rgb(238, 238, 238);
    background-color: rgb(255, 255, 255);
    height: 46px;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    font-size: 20px;
    font-weight: 700;
    transition: all 0.5s;
    outline: none;
    &:hover {
      background-color: rgb(178, 176, 176);
      border: 2px solid #2f2f2f;
      color: #fff;
    }
  }
`;
