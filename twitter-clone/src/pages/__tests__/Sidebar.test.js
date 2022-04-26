import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SideBar from "../Sidebar";

// can use it("") or test("")
describe("navigation items", () => {
  //   it("renders list of navigation links", () => {
  //     render(
  //       <MemoryRouter initialEntries={["/"]}>
  //         <SideBar />
  //       </MemoryRouter>
  //     );
  //     const sidebarLink = screen.getAllByText(/Home/i);
  //     expect(sidebarLink).toBeInTheDocument();
  //   });
  it("Opens the profile page when clicking the profile link", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <SideBar />
      </MemoryRouter>
    );
    const profileLink = screen.getByRole(/button/i);
    expect(profileLink).toBeInTheDocument();
  });
});
