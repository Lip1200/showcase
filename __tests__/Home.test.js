import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";
import React from "react";

jest.mock("@/components/main/Hero", () => () => (
  <div data-testid="hero-component" />
));
jest.mock("@/components/main/Projects", () => () => (
  <div data-testid="projects-component" />
));
jest.mock("@/components/main/Skills", () => () => (
  <div data-testid="skills-component" />
));
jest.mock("@/components/main/cv", () => () => (
  <div data-testid="cv-component" />
));

describe("Home", () => {
  it("renders the Hero, Skills, Projects, and CV components", () => {
    render(<Home />);

    expect(screen.getByTestId("hero-component")).toBeInTheDocument();
    expect(screen.getByTestId("skills-component")).toBeInTheDocument();
    expect(screen.getByTestId("projects-component")).toBeInTheDocument();
    expect(screen.getByTestId("cv-component")).toBeInTheDocument();
  });
});
