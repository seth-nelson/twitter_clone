import React from "react";
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

export default function SideBar() {
  return (
    <SidebarContainer>
      <NavLink>
        <Icon>
          <BiHome size="32px" color="skyBlue" />
        </Icon>
        <h2>Home</h2>
      </NavLink>
      <NavLink>
        <Icon>
          <BiHash size="32px" color="skyBlue" />
        </Icon>
        <h2>Explore</h2>
      </NavLink>
      <NavLink>
        <Icon>
          <BiBell size="32px" color="skyBlue" />
        </Icon>
        <h2>Notifications</h2>
      </NavLink>
      <NavLink>
        <Icon>
          <BiEnvelope size="32px" color="skyBlue" />
        </Icon>
        <h2>Messages</h2>
      </NavLink>
      <NavLink>
        <Icon>
          <BiTag size="32px" color="skyBlue" />
        </Icon>
        <h2>Bookmarks</h2>
      </NavLink>
      <NavLink>
        <Icon>
          <BsPerson size="32px" color="skyBlue" />
        </Icon>
        <h2>Profile</h2>
      </NavLink>
      <NavLink>
        <Icon>
          <CgMoreO size="32px" color="skyBlue" />
        </Icon>
        <h2>More</h2>
      </NavLink>
      <ButtonContainer>
        <TweetButton>Tweet</TweetButton>
      </ButtonContainer>
    </SidebarContainer>
  );
}
