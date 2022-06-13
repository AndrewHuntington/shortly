import { render, screen } from "@testing-library/react";
import Hero from ".";

// TODO: Write tests in Cypress.
// Note: Can't test at different viewport sizes with Testing Library.

describe("Hero", () => {
  test("Should render", async () => {
    const title = /More than just shorter links/;
    const subtitle =
      /Build your brand’s recognition and get detailed insights on how your links are performing./;

    render(<Hero />);
    screen.getByText(title);
    screen.getByText(subtitle);
  });

  test("Should have image", async () => {
    render(<Hero />);
    screen.getByAltText("person sitting at desktop typing on a computer");
  });

  test("Should display get started button", () => {
    render(<Hero />);
    screen.getByText("Get Started");
  });
});
