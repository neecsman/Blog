import { render, screen } from "@testing-library/react";
import Button, { ButtonVariant } from "./Button";

describe("Button", () => {
  test("Test render", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });

  test("Test clear theme", () => {
    render(<Button variant={ButtonVariant.SOLID}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("solid");
  });
});
