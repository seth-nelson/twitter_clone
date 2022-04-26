import React from "react";
import {
  SidebarContainer,
  NavMenu,
  NavLink,
  Icon,
  TweetButton,
  ButtonContainer,
} from "./styles/SideBar.styled";
import { BiHome, BiHash, BiBell, BiEnvelope, BiTag } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";

export default function SideBar() {
  return (
    <SidebarContainer>
      <NavMenu>
        <Icon>
          <BiHome size="28px" color="skyBlue" />
        </Icon>
        <NavLink to="/">Home</NavLink>
      </NavMenu>
      <NavMenu>
        <Icon>
          <BiHash size="28px" color="skyBlue" />
        </Icon>
        <NavLink to="/explore">Explore</NavLink>
      </NavMenu>
      <NavMenu>
        <Icon>
          <BiBell size="28px" color="skyBlue" />
        </Icon>
        <NavLink to="/notifications">Notifications</NavLink>
      </NavMenu>
      <NavMenu>
        <Icon>
          <BiEnvelope size="28px" color="skyBlue" />
        </Icon>
        <NavLink to="/messages">Messages</NavLink>
      </NavMenu>
      <NavMenu>
        <Icon>
          <BiTag size="28px" color="skyBlue" />
        </Icon>
        <NavLink to="/bookmarks">Bookmarks</NavLink>
      </NavMenu>
      <NavMenu>
        <Icon>
          <BsPerson size="28px" color="skyBlue" />
        </Icon>
        <NavLink to="/profile">Profile</NavLink>
      </NavMenu>
      <NavMenu>
        <Icon>
          <CgMoreO size="28px" color="skyBlue" />
        </Icon>
        <NavLink to="/more">More</NavLink>
      </NavMenu>
      <ButtonContainer>
        <TweetButton>Tweet</TweetButton>
      </ButtonContainer>
    </SidebarContainer>
  );
}
