import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SkillText from "@/components/sub/SkillText";

describe("SkillText Component", () => {
  it("renders the main skill text section", () => {
    const { container } = render(<SkillText />);
    expect(container).toBeInTheDocument();
  });

  it("displays the Skills heading", () => {
    render(<SkillText />);
    expect(
      screen.getByRole("heading", { name: /skills/i })
    ).toBeInTheDocument();
  });

  it("shows the descriptive paragraph", () => {
    render(<SkillText />);
    expect(
      screen.getByText(/snapshot of the technologies/i)
    ).toBeInTheDocument();
  });
});
