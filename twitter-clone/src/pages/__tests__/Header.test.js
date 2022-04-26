import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Rendering the Header content", () => {
  it("should display the app logo", () => {
    render(<Header />);
    // screen.debug();

    const appLogo = screen.getByTestId("chirp_logo");
    expect(appLogo).toBeVisible();
  });
  it("should display the post search box", () => {
    render(<Header />);

    const searchBox = screen.getByPlaceholderText("Search...");
    expect(searchBox).toBeVisible();
  });
  it("should display the app name", () => {
    render(<Header />);

    const appName = screen.getByText("Chirp");
    expect(appName).toBeVisible();
  });
});

describe("Header content interactions", () => {
  it("should display the text typed into the search box", () => {
    render(<Header />);

    const searchBox = screen.getByPlaceholderText("Search...");
    fireEvent.change(searchBox, { target: { value: "Local News" } });
    expect(searchBox.value).toBe("Local News");
  });
});
