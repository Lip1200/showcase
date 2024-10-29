import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CVContent from "@/components/sub/CVContent";
import { motion } from "framer-motion";

jest.mock("framer-motion", () => ({
  motion: {
    div: jest.fn(({ children }) => <div>{children}</div>),
    p: jest.fn(({ children }) => <p>{children}</p>),
  },
}));

describe("CVContent Component", () => {
  it("renders without crashing", () => {
    const { container } = render(<CVContent />);
    expect(container).toBeInTheDocument();
  });

  it('displays the title "Curriculum Vitae"', () => {
    render(<CVContent />);
    const title = screen.getByText(/Curriculum Vitae/i);
    expect(title).toBeInTheDocument();
  });

  it("renders a download button for the CV", () => {
    render(<CVContent />);
    const downloadButton = screen.getByRole("link", { name: /my cv/i });
    expect(downloadButton).toBeInTheDocument();
    expect(downloadButton).toHaveAttribute("href", "/cv.pdf");
  });
});
