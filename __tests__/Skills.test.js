import React from "react";
import { render, screen } from "@testing-library/react";
import Skills from "@/components/main/Skills";
import "@testing-library/jest-dom";

jest.mock("@/constants", () => ({
  Skill_data: [
    { Image: "/image1.png", width: 50, height: 50, alt: "Skill 1" },
    { Image: "/image2.png", width: 60, height: 60, alt: "Skill 2" },
  ],
  Frontend_skill: [
    {
      Image: "/frontend-image.png",
      width: 50,
      height: 50,
      alt: "Frontend Skill",
    },
  ],
  Backend_skill: [
    {
      Image: "/backend-image.png",
      width: 70,
      height: 70,
      alt: "Backend Skill",
    },
  ],
  Full_stack: [
    {
      Image: "/fullstack-image.png",
      width: 80,
      height: 80,
      alt: "Fullstack Skill",
    },
  ],
  Other_skill: [
    {
      Image: "/other-skill-image.png",
      width: 90,
      height: 90,
      alt: "Other Skill",
    },
  ],
}));

describe("Skills Component", () => {
  it("renders without crashing", () => {
    render(<Skills />);
    expect(screen.getByText(/My go-to skills/i)).toBeInTheDocument();
  });

  it("renders Skill_data images", () => {
    render(<Skills />);
    const skillImage1 = screen.getByAltText("Skill 1");
    const skillImage2 = screen.getByAltText("Skill 2");
    expect(skillImage1).toBeInTheDocument();
    expect(skillImage2).toBeInTheDocument();
  });

  it("renders Frontend_skill images", () => {
    render(<Skills />);
    const frontendImage = screen.getByAltText("Frontend Skill");
    expect(frontendImage).toBeInTheDocument();
  });

  it("renders Backend_skill images", () => {
    render(<Skills />);
    const backendImage = screen.getByAltText("Backend Skill");
    expect(backendImage).toBeInTheDocument();
  });

  it("renders Full_stack images", () => {
    render(<Skills />);
    const fullStackImage = screen.getByAltText("Fullstack Skill");
    expect(fullStackImage).toBeInTheDocument();
  });

  it("renders Other_skill images", () => {
    render(<Skills />);
    const otherSkillImage = screen.getByAltText("Other Skill");
    expect(otherSkillImage).toBeInTheDocument();
  });
});
