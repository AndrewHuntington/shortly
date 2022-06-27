import Button from "./Button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  test("should render", () => {
    render(<Button text="Get Started" />);
    screen.getByText("Get Started");
  });
});
