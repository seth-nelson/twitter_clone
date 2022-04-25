import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 30px;
  width: 120px;
  border: 2px solid skyblue;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 600;
  background-color: ${(props) => (props.isFollowing ? "skyBlue" : "white")};
  color: ${(props) => (props.isFollowing ? "white" : "skyBlue")};
  &:hover {
    cursor: pointer;
    opacity: 70%;
    background-color: skyBlue;
    color: white;
    transition-duration: 250ms;
  }
`;
