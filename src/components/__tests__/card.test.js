import { render, screen } from "@testing-library/react";
import Card from "../Card";

it("Should able to render image element in card component", () => {
  render(
    <Card imageUrl="https://avatars.githubusercontent.com/u/1406546?v=4" />
  );

  // Quering
  const image = screen.getByRole("img");

  // Assertion
  expect(image).toBeInTheDocument();
});

it("Should able to render both the paragraphs element in card component", () => {
  const title = "project";
  const description = "Javascript Project";
  render(<Card title={title} description={description} />);

  // Quering
  const titleElement = screen.getByText(title);
  const descriptionElement = screen.getByText(description);

  // Assertion
  expect(titleElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
});
