import { screen, render } from "@testing-library/react";
import Navbar from ".";

describe("Navbar", () => {
  test("Should render", async () => {
    render(<Navbar />);
    screen.getByTestId("logo");
  });
});
