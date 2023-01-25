import { Accordion } from "./Accordion";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("Accordion.tsx", () => {
  beforeEach(() => {
    render(
      <Accordion title="Hello">
        <h3>My content</h3>
        <p>xyz</p>
      </Accordion>
    );
  });

  test("should show title all the time", () => {
    expect(screen.getByText("Hello")).toBeDefined();
  });

  test("should not show the content at the start", () => {
    expect(screen.queryByText(/content/i)).toBeNull();
  });

  test("should show the content when button is clicked", () => {
    const button = screen.getByText(/open/i);
    fireEvent.click(button);

    expect(screen.queryByText(/content/i)).toBeDefined();
  });

  test("should hide the content when button is clicked", () => {
    const button = screen.getByText(/open/i);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(screen.queryByText(/content/i)).toBeNull();
  });
});
