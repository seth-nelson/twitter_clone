import React, { useEffect, useState } from "react";
import getUsers from "../api/local-data/getUsers";
import {
  MainContainer,
  Following,
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
  const [amountFollowing, setAmountFollowing] = useState(0);

  useEffect(() => {
    const users = getUsers();
    setUserSuggestions(users);
  }, []);

  const handleFollowerCount = (adjustCount) => {
    if (adjustCount) {
      setAmountFollowing(amountFollowing + 1);
      //   console.log("AMOUNT_FOLLOWING", amountFollowing);
    } else {
      setAmountFollowing(amountFollowing - 1);
      //   console.log("AMOUNT_FOLLOWING", amountFollowing);
    }
  };

  return (
    <>
      <Following>Following: {amountFollowing}</Following>
      {userSuggestions.map((user, key) => (
        <MainContainer key={key}>
          <UserContainer>
            <ProfilePicture src={user.image} alt="profile" />
            <ContentContainer>
              <NameContainer>
                <FirstName>{user.firstName}</FirstName>
                <AccountName>@{user.accountName}</AccountName>
              </NameContainer>
              <FollowButton handleFollowerCount={handleFollowerCount} />
            </ContentContainer>
          </UserContainer>
        </MainContainer>
      ))}
    </>
  );
}
