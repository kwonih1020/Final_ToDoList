// eslint-disable-next-line

import React from "react";

const CommentForm = () => {
  return (
    <>
      <form>
        <input type="text" placeholder="작성자" />
        <input type="text" placeholder="댓글" />
        <button>추가하기</button>
      </form>
    </>
  );
};

export default CommentForm;
