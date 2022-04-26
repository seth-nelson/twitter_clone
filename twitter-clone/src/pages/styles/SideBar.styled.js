import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarContainer = styled.div`
  margin: 20px 0px;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 5px 20px;
  font-size: 12px;
`;

export const NavLink = styled(Link)`
  margin: 10px 0px;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  color: black;
  &:hover {
    color: lightgray;
    transition-duration: 250ms;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const TweetButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
  background-color: skyblue;
  margin: 10px;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 600;
  border: 2px solid lightgray;
  &:hover {
    cursor: pointer;
    opacity: 70%;
    transition-duration: 500ms;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
