import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  SidebarContainer,
  NavLink,
  Icon,
  TweetButton,
  ButtonContainer,
} from "./styles/SideBar.styled";
import { BiHome, BiHash, BiBell, BiEnvelope, BiTag } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import Feed from "./Feed";

export default function SideBar() {
  return (
    <Router>
      <SidebarContainer>
        <NavLink>
          <Icon>
            <BiHome size="28px" color="skyBlue" />
          </Icon>
          <Link to="/">Home</Link>
        </NavLink>
        <NavLink>
          <Icon>
            <BiHash size="28px" color="skyBlue" />
          </Icon>
          <h2>Explore</h2>
        </NavLink>
        <NavLink>
          <Icon>
            <BiBell size="28px" color="skyBlue" />
          </Icon>
          <h2>Notifications</h2>
        </NavLink>
        <NavLink>
          <Icon>
            <BiEnvelope size="28px" color="skyBlue" />
          </Icon>
          <h2>Messages</h2>
        </NavLink>
        <NavLink>
          <Icon>
            <BiTag size="28px" color="skyBlue" />
          </Icon>
          <h2>Bookmarks</h2>
        </NavLink>
        <NavLink>
          <Icon>
            <BsPerson size="28px" color="skyBlue" />
          </Icon>
          <h2>Profile</h2>
        </NavLink>
        <NavLink>
          <Icon>
            <CgMoreO size="28px" color="skyBlue" />
          </Icon>
          <h2>More</h2>
        </NavLink>
        <ButtonContainer>
          <TweetButton>Tweet</TweetButton>
        </ButtonContainer>
      </SidebarContainer>

      {/* <Switch>
        <Route path="/">
          <Feed />
        </Route>
      </Switch> */}
    </Router>
  );
}
