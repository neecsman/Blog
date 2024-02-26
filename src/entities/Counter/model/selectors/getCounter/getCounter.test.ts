import { StateSchema } from "app/providers/StoreProvider";
import { getCounter } from "./getCounter";

describe("getCounter", () => {
  test("shoult return counter value", () => {
    const state: Partial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounter(state)).toEqual({ value: 10 });
  });
});
