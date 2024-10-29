import React from "react"; // Ajoutez cet import
import { render, screen } from "@testing-library/react";
import SkillDataProvider from "@/components/sub/SkillDataProvider";
import "@testing-library/jest-dom";
import { useInView } from "react-intersection-observer";

jest.mock("react-intersection-observer", () => ({
  useInView: jest.fn(),
}));

describe("SkillDataProvider Component", () => {
  beforeEach(() => {
    useInView.mockReturnValue({
      ref: jest.fn(),
      inView: true,
    });
  });

  it("renders SkillDataProvider component with image", () => {
    render(
      <SkillDataProvider
        src="/test-image.png"
        width={50}
        height={50}
        alt="Test image"
        index={0}
      />,
    );
    const skillImage = screen.getByAltText("Test image");
    expect(skillImage).toBeInTheDocument();
  });
});
