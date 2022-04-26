import { render, screen } from "@testing-library/react";
import getPosts from "../../api/local-data/getPosts";
import Feed from "../Feed";

describe("Feed Page", () => {
  it("Should display users tweets", () => {
    render(<Feed />);
    // screen.debug();

    const suspectedPosts = getPosts().length;
    const renderedPosts = screen.getAllByTestId("posts").length;
    expect(suspectedPosts).toEqual(renderedPosts);
  });
});
