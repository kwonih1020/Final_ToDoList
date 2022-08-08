import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comment: {
    origin_id: 0,
    id: 0,
    user: "username",
    desc: "description",
  },
  isLoading: false,
  err: null,
  status: 0,
};

export const __patchComment = createAsyncThunk(
  "comment/__patchComment",
  async (args, thunkAPI) => {
    try {
      const targetId = args.targetId;
      const newDesc = args.newDesc;
      const getCommentRes = await axios.patch(
        `http://localhost:3001/comments/${targetId}`,
        { desc: newDesc }
      );
      return thunkAPI.fulfillWithValue(getCommentRes);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "comment/__deleteComment",
  async (args, thunkAPI) => {
    try {
      const delCommentRes = await axios.delete(
        `http://localhost:3001/comments/${args}`
      );
      return thunkAPI.fulfillWithValue(delCommentRes);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const commentSlice = createSlice({
  name: "commentSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [__patchComment.pending]: (state = initialState, action) => {
      state.isLoading = true;
    },
    [__patchComment.fulfilled]: (state = initialState, action) => {
      state.isLoading = false;
      state.comment = { ...action.payload.data };
    },
    [__patchComment.rejected]: (state = initialState, action) => {
      state.isLoading = false;
      state.err = action.payload.comments;
    },
    [__deleteComment.pending]: (state = initialState, action) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state = initialState, action) => {
      state.isLoading = false;
      state.status = action.payload.status;
    },
    [__deleteComment.rejected]: (state = initialState, action) => {
      state.isLoading = false;
      state.err = action.payload.comments;
    },
  },
});

export default commentSlice.reducer;
