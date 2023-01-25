import { Accordion } from "./Accordion";
import { render, screen } from "@testing-library/react";

describe("Accordion.tsx", () => {
  test("should add two numbers", () => {
    render(
      <Accordion title="Hello">
        <h3>My content</h3>
        <p>some content</p>
      </Accordion>
    );

    expect(screen.getByText("Hello")).toBeDefined();
  });
});
