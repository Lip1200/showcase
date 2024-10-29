import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "@/components/main/Navbar";

describe("Navbar Component", () => {
  it("renders without crashing", () => {
    render(<Navbar />);
    expect(screen.getByText("Filipe Ramos")).toBeInTheDocument();
  });

  it("contains About me, Skills, and Projects links", () => {
    render(<Navbar />);
    expect(screen.getByText("About me")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("renders social icons with correct links", () => {
    render(<Navbar />);

    const emailLink = screen.getByRole("link", { name: /email/i });
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    const githubLink = screen.getByRole("link", { name: /github/i });
    const gitlabLink = screen.getByRole("link", { name: /gitlab/i });

    expect(emailLink).toHaveAttribute("href", "mailto:***REMOVED***");
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/lip1200",
    );
    expect(githubLink).toHaveAttribute("href", "https://github.com/Lip1200");
    expect(gitlabLink).toHaveAttribute(
      "href",
      "https://gitlab.unige.ch/Filipe.Ramos",
    );
  });
});
