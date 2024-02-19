import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";
import {
  USER_LOCALSTORAGE_KEY,
  TOKEN_LOCALSTORAGE_KEY,
} from "shared/const/localstorage";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

interface LoginResponse {
  user: User;
  token: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string }
>("login/loginByUsername", async (authData, thunkAPI) => {
  try {
    const { data } = await axios.post<LoginResponse>(
      "http://localhost:4000/api/auth/login/username",
      authData
    );

    if (!data) {
      throw new Error();
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
    localStorage.setItem(TOKEN_LOCALSTORAGE_KEY, data.token);
    thunkAPI.dispatch(userActions.setAuthData(data.user));

    return data.user;
  } catch (e) {
    console.error(e.response);
    return thunkAPI.rejectWithValue(e.response.data.message || "Error");
  }
});
