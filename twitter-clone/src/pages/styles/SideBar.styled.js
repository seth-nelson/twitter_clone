import styled from "styled-components";

export const SidebarContainer = styled.div``;

export const NavLink = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 5px 20px;
  font-size: 12px;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const TweetButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 600;
  background-color: skyblue;
  text-align: center;
  margin: 10px;
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
