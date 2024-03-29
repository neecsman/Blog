import { loginByUsername } from "./loginByUsername";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

describe("loginByUsername.test", () => {
  test("should return user", async () => {
    const userValue = {
      id: 1,
      username: "username",
      email: "",
      firstname: "",
      lastname: "",
      avatar: "",
    };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(
      Promise.resolve({
        data: {
          user: userValue,
        },
      })
    );
    const result = await thunk.callThunk({
      username: "username",
      password: "123",
    });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue)
    );
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toBe(userValue);
  });

  test("should return 403 status", async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(
      Promise.resolve({
        status: 403,
      })
    );
    const result = await thunk.callThunk({
      username: "username",
      password: "123",
    });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("Error");
  });
});
