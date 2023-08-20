import { render, screen } from "@testing-library/react";
import SearchBox from "../SearchBox";

it("Should able to render the input element in searchBox component", () => {
  render(<SearchBox />);

  // Quering
  const inputElement = screen.getByRole("textbox");

  // Assertion
  expect(inputElement).toBeInTheDocument();
});

it("should starticon and endicon able to render in searchBox component", () => {
  render(
    <SearchBox
      defaultValue="test"
      starticon={<div data-testid="startIcon">Start icon</div>}
      endicon={<div data-testid="endIcon">End icon</div>}
    />
  );

  // Quering
  const startIcon = screen.getByTestId("startIcon");
  const endIcon = screen.getByTestId("endIcon");

  // Assertion
  expect(startIcon).toBeInTheDocument();
  expect(endIcon).toBeInTheDocument();
});
