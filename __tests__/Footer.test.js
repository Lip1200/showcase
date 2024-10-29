import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "@/components/main/Footer";

describe("Footer Component", () => {
  it("renders the About section", () => {
    render(<Footer />);
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("renders social media links with icons and labels", () => {
    render(<Footer />);

    // Vérifie LinkedIn
    const linkedinLink = screen.getByText("LinkedIn").closest("a");
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/lip1200",
    );
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();

    // Vérifie GitHub
    const githubLink = screen.getByText("GitHub").closest("a");
    expect(githubLink).toHaveAttribute("href", "https://github.com/Lip1200");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(screen.getByText("GitHub")).toBeInTheDocument();

    // Vérifie GitLab
    const gitlabLink = screen.getByText("GitLab").closest("a");
    expect(gitlabLink).toHaveAttribute(
      "href",
      "https://gitlab.unige.ch/Filipe.Ramos",
    );
    expect(gitlabLink).toHaveAttribute("target", "_blank");
    expect(screen.getByText("GitLab")).toBeInTheDocument();
  });

  it("renders the contact link", () => {
    render(<Footer />);
    const contactLink = screen.getByText("Contact");
    expect(contactLink.closest("a")).toHaveAttribute(
      "href",
      "mailto:***REMOVED***",
    );
  });

  it("renders the footer text", () => {
    render(<Footer />);
    expect(screen.getByText("Filipe Ramos 2024 MIT")).toBeInTheDocument();
  });
});
