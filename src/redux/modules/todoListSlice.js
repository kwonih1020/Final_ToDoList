import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const todoServer = process.env.REACT_APP_TODOS;

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
  status: 0,
};

export const __getTodoList = createAsyncThunk(
  "__getTodoList",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(todoServer);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const __deleteTodo = createAsyncThunk(
  "__deleteTodo",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(todoServer + `/${payload}`);
      const deletedRes = await axios.get(todoServer);
      return thunkAPI.fulfillWithValue(deletedRes.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
      state.todos = action.payload;
    },
    [__deleteTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
  },
});

// export const {} = todoListSlice.actions;
export default todoListSlice.reducer;
