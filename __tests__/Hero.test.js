import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "@/components/main/Hero";
import HeroContent from "@/components/sub/HeroContent";

jest.mock("@/components/sub/HeroContent", () => () => (
  <div data-testid="hero-content">Hero Content</div>
));

describe("Hero Component", () => {
  it("renders without crashing", () => {
    render(<Hero />);
    expect(screen.getByTestId("hero-content")).toBeInTheDocument();
  });

  it("has the correct id attribute", () => {
    render(<Hero />);
    const heroDiv = screen.getByTestId("hero-content").parentElement;
    expect(heroDiv).toHaveAttribute("id", "about-me");
  });
});
