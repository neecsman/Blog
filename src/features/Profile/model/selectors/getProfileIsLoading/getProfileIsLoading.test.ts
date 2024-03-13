import { StateSchema } from "app/providers/StoreProvider";
import { getProfileIsLoadiong } from "./getProfileIsLoading";

describe("getProfileIsLoading.test", () => {
  test("should return true", () => {
    const state: Partial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };

    expect(getProfileIsLoadiong(state as StateSchema)).toEqual(true);
  });

  test("should work with empty state", () => {
    const state: Partial<StateSchema> = {};
    expect(getProfileIsLoadiong(state as StateSchema)).toEqual(undefined);
  });
});
