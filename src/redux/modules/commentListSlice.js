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
        `http://localhost:3001/comments?origin_id=${targetId}`
      );
      console.log(commentList);
      return thunkAPI.fulfillWithValue(commentList.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

const commentListSlice = createSlice({
  name: "commentListSlice",
  initialState,
  reducers: {},
  extraReducers: {
    // Comment List Reducer
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
  },
});

export default commentListSlice.reducer;
// ---- 권익현 ----
