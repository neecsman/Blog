import { fireEvent, render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";
import { withTranslation } from "react-i18next";
import renderWithTranslation from "helpers/tests/renderWithTranslation/renderWithTranslation";
import componentRender from "helpers/tests/componentRender/componentRender";

describe("Sidebar", () => {
  test("Render sidebar", () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("Toggle sidebar", () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
