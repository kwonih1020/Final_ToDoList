// eslint-disable-next-line

import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import CommentBox from "../../elements/CommentBox";
import {
  __getComments,
  __getInitialComments,
} from "../../redux/modules/commentListSlice";

const CommentList = () => {
  const comments = useSelector((state) => state.commentListSlice.comments);
  const isDone = useSelector((state) => state.commentSlice.isLoading);
  const [flag, setFlag] = useState(false);
  const [isActive, setIsActive] = useState({
    id: 0,
    status: false,
  });
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getInitialComments(parseInt(id)));
  }, [isDone]);

  const infiniteListener = async (e) => {
    let currScroll = e.target.scrollTop;
    let maxScroll = e.target.scrollHeight - 340;
    const targetHeight = Math.floor(maxScroll * 0.87);
    //깃발을 세워봐요잇.
    if (currScroll > targetHeight) {
      setFlag(true);
      if (flag) {
        dispatch(
          __getComments({
            targetId: 1,
            getStartIdx: comments.length,
            legacyComments: comments,
          })
        );
        setFlag(false);
      }
    }
  };

  const toggleActive = (id) => {
    if (!isActive.status) {
      setIsActive({ ...isActive, id, status: true });
    } else {
      setIsActive({ ...isActive, id: 0, status: false });
    }
  };

  return (
    <StWrap onScroll={infiniteListener}>
      {/* 밑에 map함수로 CommentBox Component 안에 있는 내용들 뿌려주기 */}
      {comments.map((comment) => {
        return (
          <CommentBox
            key={comment.id}
            id={comment.id}
            user={comment.user}
            desc={comment.desc}
            toggleActive={toggleActive}
            activation={
              isActive.status
                ? isActive.id === comment.id
                  ? true
                  : false
                : true
            }
          />
        );
      })}
    </StWrap>
  );
};

export default React.memo(CommentList);

const StWrap = styled.div`
  height: calc(100% - 60px);
  overflow-y: scroll;
`;
