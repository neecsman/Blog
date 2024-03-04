import { StateSchema } from "app/providers/StoreProvider";
import { getLoginStatePassword } from "./getLoginStatePassword";

describe("getLoginStatePassword.test", () => {
  test("should return password", () => {
    const state: Partial<StateSchema> = {
      loginForm: {
        username: "",
        password: "123",
        isLoading: false,
        error: "",
      },
    };

    expect(getLoginStatePassword(state as StateSchema)).toEqual("123");
  });

  test("should work with empty state", () => {
    const state: Partial<StateSchema> = {};

    expect(getLoginStatePassword(state as StateSchema)).toEqual("");
  });
});
