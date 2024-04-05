import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExtraArg } from "app/providers/StoreProvider/config/StateSchema";
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
  {
    rejectValue: string;
    extra: ThunkExtraArg;
  }
>("login/loginByUsername", async (authData, thunkAPI) => {
  const { dispatch, rejectWithValue, extra } = thunkAPI;

  try {
    const { data } = await extra.api.post<LoginResponse>(
      "auth/login/username",
      authData
    );

    if (!data) {
      throw new Error();
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data.user));
    localStorage.setItem(TOKEN_LOCALSTORAGE_KEY, data.token);
    dispatch(userActions.setAuthData(data.user));

    return data.user;
  } catch (e) {
    return rejectWithValue("Error");
  }
});
