import { StateSchema } from "app/providers/StoreProvider";
import { getLoginStateIsLoading } from "./getLoginStateIsLoading";

describe("getLoginStateIsLoading.test", () => {
  test("should return error", () => {
    const state: Partial<StateSchema> = {
      loginForm: {
        username: "",
        password: "",
        isLoading: true,
        error: "error",
      },
    };

    expect(getLoginStateIsLoading(state as StateSchema)).toEqual(true);
  });

  test("should work with empty state", () => {
    const state: Partial<StateSchema> = {};

    expect(getLoginStateIsLoading(state as StateSchema)).toEqual(false);
  });
});
