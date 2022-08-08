import React from "react";

const CommentBox = ({ id, user, desc }) => {
  return (
    <>
      <div>
        <h3>{user}</h3>
        <p>{desc}</p>
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
