import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

// thunk 함수 안에서 해야할것 1. 중간작업 2. dispatch(원래하려고했던 dispatch)
export const __getTodo = createAsyncThunk(
  "__getTodo",
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

const todoListSlice = createSlice({
  name: "todoListSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodo.fulfilled]: (state, action) => {
      // console.log("state:", state.todos);
      console.log(action.payload);
      state.todos = action.payload;
      console.log(state.todos);
    },
    [__getTodo.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

// export const {} = todoListSlice.actions;
export default todoListSlice.reducer;
