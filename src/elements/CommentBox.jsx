import React from "react";

const CommentBox = () => {
  return (
    <>
      <div>
        <h3>todos.user</h3>
        <p>todos.comment</p>
      </div>
      <div>
        {/* Button Element 사용하기 */}
        <button>수정</button>
        <button>삭제</button>
      </div>
    </>
  );
};

export default CommentBox;
