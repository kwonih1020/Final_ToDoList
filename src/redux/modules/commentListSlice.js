// eslint-disable-next-line

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// ---- 권익현 ----
const initialState = {
  comments: [],
  isLoading: false,
  err: null,
};

export const __getInitialComments = createAsyncThunk(
  "comments/__getInitialComments",
  async (payload, thunkAPI) => {
    try {
      const targetId = payload;
      const commentList = await axios.get(
        // 추후 env를 통해 json-server (heroku url) 가려줘야함
        `http://localhost:3001/comments?origin_id=${targetId}&_end=8`
      );
      return thunkAPI.fulfillWithValue(commentList.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const __getComments = createAsyncThunk(
  "comments/__getComments",
  async (payload, thunkAPI) => {
    try {
      const legacyComments = payload.legacyComments;
      const getStartIdx = payload.getStartIdx;
      const targetId = payload.targetId;
      const commentList = await axios.get(
        // 추후 env를 통해 json-server (heroku url) 가려줘야함
        `http://localhost:3001/comments?origin_id=${targetId}&_start=${getStartIdx}&_limit=6`
      );

      return thunkAPI.fulfillWithValue(legacyComments.concat(commentList.data));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const __postComments = createAsyncThunk(
  "comments/__postComments",
  async (payload, thunkAPI) => {
    try {
      const commentList = await axios.get("http://localhost:3001/comments");
      const { user, desc, targetId } = { ...payload };
      const commentPost = await axios.post("http://localhost:3001/comments", {
        origin_id: targetId,
        id: commentList.data.at(-1).id + 1,
        user,
        desc,
      });
      return thunkAPI.fulfillWithValue(commentPost.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteCommentsById = createAsyncThunk(
  "comments/__deleteCommentById",
  async (payload, thunkAPI) => {
    try {
      const getByIdRes = await axios.get(
        `http://localhost:3001/comments?origin_id=${payload}`
      );
      console.log(getByIdRes.data);
      for (let i = 0; i < getByIdRes.data.length; i++) {
        if (i === getByIdRes.data.length - 1) {
          const deleteAllCommentRes = await axios.delete(
            `http://localhost:3001/comments/${getByIdRes.data[i].id}`
          );
          return thunkAPI.fulfillWithValue(deleteAllCommentRes);
        } else {
          axios.delete(
            `http://localhost:3001/comments/${getByIdRes.data[i].id}`
          );
        }
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const commentListSlice = createSlice({
  name: "commentListSlice",
  initialState,
  reducers: {},
  extraReducers: {
    //초기 comment값 불러옵니다잇.
    [__getInitialComments.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getInitialComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
      console.log(state.comments);
    },
    [__getInitialComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.comments = [];
      state.err = action.payload;
    },
    // 무한스크롤링을 해줍니다잇. 스크롤할때마다 조금씩 불러옵니다잇.
    [__getComments.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.comments = [];
      state.err = action.payload;
    },
    // Comment List Reducer POST
    [__postComments.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__postComments.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comments.push(action.payload); // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__postComments.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__deleteCommentsById.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__deleteCommentsById.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__deleteCommentsById.rejected]: (state, action) => {
      state.isLoading = false;
      state.comments = [];
      state.err = action.payload;
    },
  },
});

export default commentListSlice.reducer;
// ---- 권익현 ----
