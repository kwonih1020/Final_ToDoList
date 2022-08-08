import React from "react";
import CommentBox from "../../elements/CommentBox";

const CommentList = () => {
  return (
    <>
      {/* 밑에 map함수로 CommentBox Component 안에 있는 내용들 뿌려주기 */}
      <CommentBox />
    </>
  );
};

export default CommentList;
