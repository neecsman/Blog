import { StateSchema } from "app/providers/StoreProvider";
import { LoginSchema } from "../types/loginSchema";
import { loginActions, loginReducer } from "./loginSlice";
import { loginByUsername } from "../services/loginByUsername/loginByUsername";

describe("loginSlice.test", () => {
  test("should set username", () => {
    const state: Partial<LoginSchema> = { username: "" };
    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername("123123"))
    ).toEqual({ username: "123123" });
  });
  test("should set password", () => {
    const state: Partial<LoginSchema> = { password: "" };
    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword("123123"))
    ).toEqual({ password: "123123" });
  });
});
