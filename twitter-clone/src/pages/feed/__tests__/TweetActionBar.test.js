import { fireEvent, render, screen } from "@testing-library/react";
import TweetActionBar from "../TweetActionBar";

describe("verifies the functinality of the likes button increasing the amount of likes", () => {
  it("updates the number of likes displayed on the page", () => {
    render(<TweetActionBar likes={100} />);
    // screen.debug();

    const likeIcon = screen.getByTestId("untoggledIcon");
    const numberOflikes = screen.getByTestId("numLikes");
    fireEvent.click(likeIcon);
    const toggledLikeIcon = screen.getByTestId("toggledLikeIcon");
    fireEvent.click(toggledLikeIcon);
    // expect(toggledLikeIcon).toBeVisible();
    expect(numberOflikes.innerHTML).toBe("100");
  });
});
