// eslint-disable-next-line

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: [],
  isLoading: false,
  err: null,
};

const commentListSlice = createSlice({
  name: "commentListSlice",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default commentListSlice.reducer;
