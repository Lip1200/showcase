import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Projects from "@/components/main/Projects";

describe("Projects Component", () => {
  it("renders without crashing", () => {
    render(<Projects />);
    expect(screen.getByText("My Projects")).toBeInTheDocument();
  });

  it("displays all project cards with correct titles", () => {
    render(<Projects />);

    const projectTitles = [
      "AI-powered movie recommendation system with personalized lists.",
      "OS programing",
      "Unity Game",
      "Portfolio",
    ];

    projectTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it("contains correct links for each project", () => {
    render(<Projects />);

    const projectData = [
      {
        title:
          "AI-powered movie recommendation system with personalized lists.",
        link: "https://github.com/Lip1200/color_movie",
      },
      {
        title: "OS programing",
        link: "https://github.com/Lip1200/system-calls",
      },
      { title: "Unity Game", link: "https://gitlab.unige.ch/stm_game/game" },
      { title: "Portfolio", link: "https://github.com/Lip1200/showcase" },
    ];

    projectData.forEach(({ title, link }) => {
      const projectLink = screen.getByRole("link", { name: title });
      expect(projectLink).toBeInTheDocument();
      expect(projectLink).toHaveAttribute("href", link);
    });
  });
});
