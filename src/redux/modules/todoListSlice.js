import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

export const __getTodoList = createAsyncThunk(
  "__getTodoList",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/todos");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const __deleteTodo = createAsyncThunk(
  "__deleteTodo",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.delete(`http://localhost:3001/todos/${payload}`);
      console.log("data", data.data);
      thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const todoListSlice = createSlice({
  name: "todoListSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodoList.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getTodoList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    [__getTodoList.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },

    // ---------------------------------------
    //deleteTodo
    [__deleteTodo.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__deleteTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__deleteTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
  },
});

// export const {} = todoListSlice.actions;
export default todoListSlice.reducer;
