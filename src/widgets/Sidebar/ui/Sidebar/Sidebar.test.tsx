import { fireEvent, render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";
import { withTranslation } from "react-i18next";
import renderWithTranslation from "helpers/tests/renderWithTranslation/renderWithTranslation";

describe("Sidebar", () => {
  test("Render sidebar", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("Toggle sidebar", () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
