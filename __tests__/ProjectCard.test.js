import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProjectCard from "@/components/sub/ProjectCard";
import React from "react";

describe("ProjectCard Component", () => {
  const defaultProps = {
    src: "/example-image.png",
    title: "Project Title",
    description: "This is a project description.",
    link: "https://example.com",
  };

  it("renders without crashing", () => {
    const { container } = render(<ProjectCard {...defaultProps} />);
    expect(container).toBeInTheDocument();
  });

  it("displays the project image with correct alt text", () => {
    render(<ProjectCard {...defaultProps} />);
    const image = screen.getByAltText(defaultProps.title);
    expect(image).toBeInTheDocument();
  });

  it("displays the project title as a link", () => {
    render(<ProjectCard {...defaultProps} />);
    const titleLink = screen.getByRole("link", { name: defaultProps.title });
    expect(titleLink).toBeInTheDocument();
    expect(titleLink).toHaveAttribute("href", defaultProps.link);
  });

  it("displays the project description", () => {
    render(<ProjectCard {...defaultProps} />);
    const description = screen.getByText(defaultProps.description);
    expect(description).toBeInTheDocument();
  });
});
