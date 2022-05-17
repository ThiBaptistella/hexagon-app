import React from "react";
import { render, screen } from "@testing-library/react";
import { useApiCallHooks } from "./useHooks";
import Home from "../components/Home";

describe("hooks", () => {
  it("shows no files or folder", () => {
    render(<Home />);
    expect(screen.getAllByTitle("Home")).toHaveClass;
  });

  it("should return a arrayContaining", () => {
    const useApiCallHooks = [
      {
        directory: false,
        name: ".eslintrc.json",
        path: "/Users/thibaptistella/Documents/Projects/hexagon-app",
        size: "352 B",
      },
    ];
    render(<Home files={useApiCallHooks} />);
    const renderItems = screen.getAllByRole("table");
    expect(renderItems.length).toEqual(renderItems.length);
    expect(useApiCallHooks).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          directory: false,
          name: ".eslintrc.json",
          path: "/Users/thibaptistella/Documents/Projects/hexagon-app",
          size: "352 B",
        }),
      ])
    );
  });

  it("should return", () => {
    expect(useApiCallHooks).toBeDefined();
  });

  it("api function returns", () => {
    const useApiCallHooks = jest.fn(() => true);
    useApiCallHooks();
    expect(useApiCallHooks).toHaveReturned();
  });
});
