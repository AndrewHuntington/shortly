import Button from "./Button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// TODO: Add more tests as button variations are added

describe("Button", () => {
  test("should render", () => {
    render(<Button text="Get Started" />);
    screen.getByText("Get Started");
  });

  test("should handle click", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(<Button text="Get Started" handleClick={handleClick} />);
    await user.click(screen.getByText("Get Started"));
    expect(handleClick).toHaveBeenCalled();
  });
});
