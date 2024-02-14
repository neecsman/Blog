import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { loginSchema } from "../types/loginSchema";

const initialState: loginSchema = {
  username: "",
  password: "",
};

export const counterSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { actions: loginActions } = counterSlice;
export const { reducer: loginReducer } = counterSlice;
