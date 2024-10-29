import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CV from "@/components/main/cv";

jest.mock("@/components/sub/CVContent", () => () => (
  <div data-testid="cv-content" />
));

describe("CV Component", () => {
  it("renders the CVContent component", () => {
    render(<CV />);

    // Vérifie que le contenu du CV est bien rendu
    expect(screen.getByTestId("cv-content")).toBeInTheDocument();
  });

  it("has the correct structure and classNames", () => {
    render(<CV />);
    const container = screen.getByTestId("cv-content").parentElement;

    expect(container).toHaveClass("relative");
    expect(container).toHaveClass("flex");
    expect(container).toHaveClass("flex-col");
    expect(container).toHaveClass("h-full");
    expect(container).toHaveClass("w-full");
    expect(container).toHaveAttribute("id", "cv");
  });
});
