import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

// thunk 함수 안에서 해야할것 1. 중간작업 2. dispatch(원래하려고했던 dispatch)
export const __getTodoList = createAsyncThunk(
  "__getTodoList",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/todos");

      return thunkAPI.fulfillWithValue(data.data); // dispatch를 자동으로 해줌, 요청이 성공했을 때만
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }

    // console.log(data.data);
    // store에 넣기
    // console.log("thunkAPI", thunkAPI.getState());
  }
);

export const __deleteTodo = createAsyncThunk(
  "__deleteTodo",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.delete(`http://localhost:3001/todos/${payload}`);

      console.log("data", data.data);

      thunkAPI.fulfillWithValue(data.data);

      //1. 삭제하고 list를 한번 더 가져와서 삭제된 리스트를 한번 더 넣어준다.
      //2. useEffect에다 todos를 넣어준다.
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
