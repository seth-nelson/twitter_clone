import { fireEvent, render, screen } from "@testing-library/react";
import Suggestions from "../Suggestions";

describe("Rendering the suggestions sidebar", () => {
  it("should display optional users for the current user to follow", () => {
    render(<Suggestions />);
    // screen.debug();
    const getSuggestions = screen.getAllByRole(/img/i);
    expect(getSuggestions.length).toBe(5);
  });

  it("should display 1 follower after clicking a follow button", () => {
    render(<Suggestions />);
    // screen.debug();
    const followButton = screen.getAllByRole(/button/i);
    const followerNumber = screen.getByText(/Following/i);
    fireEvent.click(followButton[0]);
    expect(followButton.length).toBe(5);
    expect(followerNumber).toBeInTheDocument();
    expect(followerNumber.innerHTML).toBe("Following: 1");
  });

  it("should display 0 follower after clicking the same follow button twice", () => {
    render(<Suggestions />);
    // screen.debug();

    // Use a testId
    // const followButton = screen.getAllByTestId("follow-button");
    const followButton = screen.getAllByRole(/button/i);
    const followerNumber = screen.getByText(/Following/i);
    fireEvent.click(followButton[0]);
    fireEvent.click(followButton[0]);
    expect(followButton.length).toBe(5);
    expect(followerNumber).toBeVisible();
    expect(followerNumber.innerHTML).toBe("Following: 0");
    // expect(followerNumber).toContainHTML("p");
  });

  // Does color and text change when button is clicked
});
