import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const todoServer = process.env.REACT_APP_TODOS;

const initialState = {
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
      // console.log("args:", args);
      const response = await axios.get(todoServer + `/${args}`);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const __postTodo = createAsyncThunk(
  "todos/__postTodo",
  async (args, thunkAPI) => {
    try {
      const getList = await axios.get(todoServer);
      const { user, title, body } = { ...args };
      const response = await axios.post(todoServer, {
        id: getList.data?.at(-1)?.id + 1,
        user,
        title,
        body,
      });

      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const __patchTodo = createAsyncThunk(
  "Detail/__patchTodo",
  async (payload, thunkApi) => {
    try {
      const targetId = payload.id;
      // console.log("targetId:", targetId);
      // console.log("payload:", payload);
      const newBody = { body: payload.newBody };
      const data = await axios.patch(todoServer + `/${targetId}`, newBody);
      // console.log(newBody);
      return thunkApi.fulfillWithValue(data.data);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {},
  extraReducers: {
    //--------------------------------------------------getTodo
    [__getTodo.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todo = action.payload;
      // console.log("11");
    },
    [__getTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
    //----------------------------------------------------------postTodo
    [__postTodo.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__postTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    },
    [__postTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },

    //-----------------------------------------------------patchTodo
    [__patchTodo.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__patchTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todo = action.payload;
      // console.log(action.payload);
    },
    [__patchTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
  },
});

export default todoSlice.reducer;
