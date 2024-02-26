import { StateSchema } from "app/providers/StoreProvider";
import { getLoginStateError } from "./getLoginStateError";

describe("getLoginStateError.test", () => {
  test("should return error", () => {
    const state: Partial<StateSchema> = {
      loginForm: {
        username: "",
        password: "",
        isLoading: false,
        error: "error",
      },
    };

    expect(getLoginStateError(state as StateSchema)).toEqual("error");
  });

  test("should work with empty state", () => {
    const state: Partial<StateSchema> = {};

    expect(getLoginStateError(state as StateSchema)).toEqual(undefined);
  });
});
