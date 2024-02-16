import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import componentRender from "helpers/tests/componentRender/componentRender";
import Counter from "./Counter";

const initialState = { initialState: { counter: { value: 10 } } };

describe("Counter", () => {
  test("Render counter", () => {
    componentRender(<Counter />, initialState);
    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  });

  test("increment", async () => {
    componentRender(<Counter />, initialState);

    await userEvent.click(screen.getByTestId("increment"));
    expect(screen.getByTestId("value-title")).toHaveTextContent("11");
  });

  test("decrement", async () => {
    componentRender(<Counter />, initialState);

    await userEvent.click(screen.getByTestId("decrement"));
    expect(screen.getByTestId("value-title")).toHaveTextContent("9");
  });
});
