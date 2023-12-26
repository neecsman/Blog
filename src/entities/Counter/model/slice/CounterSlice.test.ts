import { conuterReducer, counterActions } from "./CounterSlice";
import CounterSchema from "../types/counterSchema";

describe("CounterSlice", () => {
  test("decrement", () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(conuterReducer(state, counterActions.decrement())).toEqual({
      value: 9,
    });
  });
});

describe("CounterSlice", () => {
  test("increment", () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(conuterReducer(state, counterActions.increment())).toEqual({
      value: 11,
    });
  });
});

describe("CounterSlice", () => {
  test("should work with empty state", () => {
    expect(conuterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});
