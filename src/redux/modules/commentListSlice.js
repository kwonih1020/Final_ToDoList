// eslint-disable-next-line

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// ---- 권익현 ----
const initialState = {
  comments: [],
  isLoading: false,
  err: null,
};

export const __getComments = createAsyncThunk(
  "comments/__getComments",
  async (payload, thunkAPI) => {
    try {
      const targetId = payload;
      const commentList = await axios.get(
        // 추후 env를 통해 json-server (heroku url) 가려줘야함
        `http://localhost:4000/comments?origin_id=${targetId}`
      );
      // console.log(commentList);
      return thunkAPI.fulfillWithValue(commentList.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const __postComments = createAsyncThunk(
  "comments/__postComments",
  async (payload, thunkAPI) => {
    try {
      const commentList = await axios.get("http://localhost:4000/comments");
      const { user, desc, targetId } = { ...payload };
      const commentPost = await axios.post("http://localhost:4000/comments", {
        origin_id: targetId,
        id: commentList.data.at(-1).id + 1,
        user,
        desc,
      });
      console.log(commentPost);
      return thunkAPI.fulfillWithValue(commentPost.data);
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
    // Comment List Reducer GET
    [__getComments.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.err = null;
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
  },
});

export default commentListSlice.reducer;
// ---- 권익현 ----
