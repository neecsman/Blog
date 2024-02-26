import axios from "axios";
import { loginByUsername } from "./loginByUsername";
import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import type { AppDispatch } from "app/providers/StoreProvider/config/store";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

jest.mock("axios");

const mockedAxios = jest.mocked(axios);

describe("loginByUsername.test", () => {
  let dispatch: AppDispatch;
  let getState: () => StateSchema;

  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });

  // test("should return user", async () => {
  //   const userValue = {
  //     id: 1,
  //     username: "username",
  //     email: "",
  //     firstname: "",
  //     lastname: "",
  //   };
  //   mockedAxios.post.mockReturnValue(
  //     Promise.resolve({
  //       data: {
  //         user: userValue,
  //       },
  //     })
  //   );

  //   const action = loginByUsername({ username: "username", password: "123" });

  //   const result = await action(dispatch, getState, undefined);

  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
  //   expect(dispatch).toHaveBeenCalledTimes(3);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe("fulfilled");
  //   expect(result.payload).toBe(userValue);
  // });

  // test("should return 403 status", async () => {
  //   mockedAxios.post.mockReturnValue(
  //     Promise.resolve({
  //       status: 403,
  //     })
  //   );

  //   const action = loginByUsername({ username: "username", password: "123" });

  //   const result = await action(dispatch, getState, undefined);

  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe("rejected");
  //   expect(result.payload).toBe("Error");
  // });

  test("should return user", async () => {
    const userValue = {
      id: 1,
      username: "username",
      email: "",
      firstname: "",
      lastname: "",
    };
    mockedAxios.post.mockReturnValue(
      Promise.resolve({
        data: {
          user: userValue,
        },
      })
    );

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({
      username: "username",
      password: "123",
    });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue)
    );
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toBe(userValue);
  });

  test("should return 403 status", async () => {
    mockedAxios.post.mockReturnValue(
      Promise.resolve({
        status: 403,
      })
    );

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({
      username: "username",
      password: "123",
    });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("Error");
  });
});
