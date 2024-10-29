import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SkillText from "@/components/sub/SkillText";

describe("SkillText Component", () => {
  it("renders the main skill text section", () => {
    const { container } = render(<SkillText />);
    expect(container).toBeInTheDocument();
  });

  it("displays the quick learner message with SparklesIcon", () => {
    render(<SkillText />);

    expect(screen.getByTestId("sparkles-icon")).toBeInTheDocument();
  });
  it("displays the central motivational text", () => {
    render(<SkillText />);
    const motivationalText = screen.getByText(
      "Diving into the future, fueled by a love for exploring new tech.",
    );
    expect(motivationalText).toBeInTheDocument();
  });

  it('renders the "My go-to skills" section', () => {
    render(<SkillText />);
    expect(screen.getByText("My go-to skills")).toBeInTheDocument();
  });
});
