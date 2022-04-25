import styled from "styled-components";

export const SidebarContainer = styled.div`
  border-right: 3px solid lightgray;
`;

export const NavLink = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 5px 20px;
  font-size: 16px;
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
  width: 150px;
  border-radius: 12px;
  font-size: 20px;
  font-weight: 600;
  background-color: skyblue;
  text-align: center;
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
