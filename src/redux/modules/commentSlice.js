import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comment: {
    origin_id: 0,
    id: 0,
    user: "",
    desc: "",
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
      const patchCommentRes = await axios.patch(
        `http://localhost:3001/comments/${targetId}`,
        { desc: newDesc }
      );

      return thunkAPI.fulfillWithValue(patchCommentRes.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __getComment = createAsyncThunk(
  "comment/__getComment",
  async (args, thunkAPI) => {
    try {
      const getCommentRes = await axios.get(
        `http://localhost:3001/comments/${args}`
      );
      return thunkAPI.fulfillWithValue(getCommentRes.data);
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
      return thunkAPI.fulfillWithValue(delCommentRes.status);
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
      state.comment = action.payload;
    },
    [__patchComment.rejected]: (state = initialState, action) => {
      state.isLoading = false;
      state.err = action.payload.comments;
    },
    [__deleteComment.pending]: (state = initialState, action) => {
      state.isLoading = true;
      state.status = 0;
    },
    [__deleteComment.fulfilled]: (state = initialState, action) => {
      state.isLoading = false;
      state.status = action.payload;
    },
    [__deleteComment.rejected]: (state = initialState, action) => {
      state.isLoading = false;
      state.err = action.payload.comments;
    },
    [__getComment.pending]: (state = initialState, action) => {
      state.isLoading = true;
    },
    [__getComment.fulfilled]: (state = initialState, action) => {
      state.isLoading = false;
      state.comment = action.payload;
    },
    [__getComment.rejected]: (state = initialState, action) => {
      state.isLoading = false;
      state.err = action.payload.comments;
    },
  },
});

export default commentSlice.reducer;
