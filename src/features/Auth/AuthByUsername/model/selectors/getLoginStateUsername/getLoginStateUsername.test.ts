import { StateSchema } from "app/providers/StoreProvider";
import { getLoginStateUsername } from "./getLoginStateUsername";

describe("getLoginStatePassword.test", () => {
  test("should return password", () => {
    const state: Partial<StateSchema> = {
      loginForm: {
        username: "asd",
        password: "",
        isLoading: false,
        error: "",
      },
    };

    expect(getLoginStateUsername(state as StateSchema)).toEqual("asd");
  });

  test("should work with empty state", () => {
    const state: Partial<StateSchema> = {};

    expect(getLoginStateUsername(state as StateSchema)).toEqual("");
  });
});
