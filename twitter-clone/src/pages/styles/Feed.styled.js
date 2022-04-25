import styled from "styled-components";

export const PostContainer = styled.div`
  margin: 20px;
`;

export const PostCard = styled.div`
  display: flex;
  border-bottom: 2px solid lightgray;
`;

export const ProfilePicture = styled.img`
  height: 72px;
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
`;

export const NameInfo = styled.div`
  display: flex;
`;

export const FirstName = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: black;
`;

export const AccountName = styled.h2`
  font-size: 16px;
  color: gray;
  opacity: 50%;
`;

export const Tweet = styled.p`
  text-align: left;
  font-size: 16px;
  color: black;
`;
