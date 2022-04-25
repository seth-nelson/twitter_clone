import React from "react";
import { FiTwitter } from "react-icons/fi";
import { HeaderContainer } from "./styles/Header.styled";

export default function Header() {
  return (
    <HeaderContainer>
      <FiTwitter style={{ margin: "0px 30px" }} size="48px" color="skyBlue" />
      <h2 style={{ margin: "0px 30px" }}>Navbar</h2>
    </HeaderContainer>
  );
}
