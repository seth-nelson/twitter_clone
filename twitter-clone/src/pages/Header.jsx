import React from "react";
import { FiTwitter } from "react-icons/fi";
import { HeaderContainer, SearchBar } from "./styles/Header.styled";

export default function Header(props) {
  return (
    <HeaderContainer>
      <FiTwitter
        data-testid="chirp_logo"
        style={{ margin: "0px 30px" }}
        size="48px"
        color="skyBlue"
      />
      <SearchBar
        type="text"
        placeholder="Search..."
        onChange={props.handleChange}
        value={props.searchQuery}
      ></SearchBar>
      <h2 style={{ margin: "0px 30px" }}>Chirp</h2>
    </HeaderContainer>
  );
}
