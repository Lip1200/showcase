import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeroContent from "@/components/sub/HeroContent";

jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children }) => <div>{children}</div>,
    p: ({ children }) => <p>{children}</p>,
    span: ({ children }) => <span>{children}</span>,
  },
}));

describe("HeroContent Component", () => {
  it("renders without crashing", () => {
    const { container } = render(<HeroContent />);
    expect(container).toBeInTheDocument();
  });

  it('displays the title text "Shaping tomorrow\'s tech today"', () => {
    render(<HeroContent />);

    // Rechercher chaque segment de texte individuellement
    expect(screen.getByText(/Shaping tomorrow's/i)).toBeInTheDocument();
    expect(screen.getByText(/tech/i)).toBeInTheDocument();
    expect(screen.getByText(/today/i)).toBeInTheDocument();
  });

  it('contains a "Learn More" button with the correct link', () => {
    render(<HeroContent />);
    const learnMoreButton = screen.getByRole("link", { name: /learn more/i });
    expect(learnMoreButton).toBeInTheDocument();
    expect(learnMoreButton).toHaveAttribute("href", "#cv");
  });

  it('contains a "My CV" download button', () => {
    render(<HeroContent />);
    const downloadButton = screen.getByRole("link", { name: /my cv/i });
    expect(downloadButton).toBeInTheDocument();
    expect(downloadButton).toHaveAttribute("href", "/cv.pdf");
  });

  it("displays the QR code image", () => {
    render(<HeroContent />);
    const qrImage = screen.getByAltText(/work icons/i);
    expect(qrImage).toBeInTheDocument();
    expect(qrImage).toHaveAttribute("src", "/QrCode.svg");
  });
});
