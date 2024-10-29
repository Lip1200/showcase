import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StarsCanvas from "@/components/main/StarBackground";

// Mocking @react-three/fiber pour Canvas
jest.mock("@react-three/fiber", () => ({
  Canvas: ({ children }) => <div>{children}</div>,
  useFrame: jest.fn(),
}));

// Mocking @react-three/drei pour Points, PointMaterial et Group
jest.mock("@react-three/drei", () => {
  const React = require("react");

  return {
    Points: React.forwardRef(({ children, ...props }, ref) => (
      <div ref={ref} data-testid="points">
        {children}
      </div>
    )),
    PointMaterial: React.forwardRef(({ ...props }, ref) => (
      <div ref={ref} data-testid="point-material" />
    )),
    Preload: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
    Group: ({ children }) => <div>{children}</div>, // Replacing <group> with <div>
  };
});

describe("StarsCanvas Component", () => {
  it("renders without crashing", () => {
    const { container } = render(<StarsCanvas />);
    expect(container).toBeInTheDocument();
  });

  it("renders Points and PointMaterial correctly", () => {
    render(<StarsCanvas />);

    // Verification des test IDs
    expect(screen.getByTestId("points")).toBeInTheDocument();
    expect(screen.getByTestId("point-material")).toBeInTheDocument();
  });
});
