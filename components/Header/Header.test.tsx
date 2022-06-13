import { screen, render } from "@testing-library/react";
import Header from ".";

// TODO: Write tests in Cypress.
// Note: Can't test at different viewport sizes with Testing Library.

describe("Header", () => {
  test("Should always display logo", async () => {
    render(<Header />);
    screen.getByAltText("company-logo");
  });

  test("Should show hamburger", () => {
    render(<Header />);
    screen.getByAltText("dropdown menu icon");
  });

  test("Should show dropdown menu", () => {
    render(<Header />);
    screen.getByTestId("dropdown-menu");
  });
});
