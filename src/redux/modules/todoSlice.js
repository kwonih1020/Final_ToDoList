import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PORT = "3001";
const initialState = {
  todos: [],
  todo: {
    id: 0,
    user: "",
    title: "",
    body: "",
  },
  isLoading: false,
  err: null,
};

export const __getTodo = createAsyncThunk(
  "todos/__getTodo",
  async (args, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:${PORT}/todos/${args}`
      );

      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postTodo = createAsyncThunk(
  "todos/__postTodo",
  async (args, thunkAPI) => {
    try {
      const getList = await axios.get(`http://localhost:${PORT}/todos`);
      const { user, title, body } = { ...args };
      const response = await axios.post(`http://localhost:${PORT}/todos`, {
        id: getList.data?.at(-1)?.id + 1,
        user,
        title,
        body,
      });

      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodo.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todo = action.payload;
    },
    [__getTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },

    [__postTodo.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__postTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todo = action.payload;
    },
    [__postTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
  },
});

export default todoSlice.reducer;
