import React, { useEffect, useState } from "react";
import getUsers from "../api/local-data/getUsers";
import {
  MainContainer,
  UserContainer,
  ProfilePicture,
  ContentContainer,
  NameContainer,
  FirstName,
  AccountName,
} from "./styles/Suggestions.styled";
import FollowButton from "../components/FollowButton";

export default function Suggestions() {
  const [userSuggestions, setUserSuggestions] = useState([]);

  useEffect(() => {
    const users = getUsers();
    setUserSuggestions(users);
  }, []);

  return userSuggestions.map((user, key) => (
    <MainContainer key={key}>
      <UserContainer>
        <ProfilePicture src={user.image} alt="profile" />
        <ContentContainer>
          <NameContainer>
            <FirstName>{user.firstName}</FirstName>
            <AccountName>@{user.accountName}</AccountName>
          </NameContainer>
          <FollowButton />
        </ContentContainer>
      </UserContainer>
    </MainContainer>
  ));
}
