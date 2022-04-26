import React, { useEffect, useState } from "react";
import { CenterContainer } from "./styles/Container.styled";
import { ImgCard, ProfileText } from "./styles/Profile.styled";
import getUsers from "../api/local-data/getUsers";

export default function Profile() {
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const profileData = getUsers();
    setUserProfile(profileData[0]);
  }, []);

  return (
    <CenterContainer>
      <h2>Your profile</h2>
      <ImgCard src={userProfile.image} alt="profile" />
      <section>
        <ProfileText>
          {userProfile.firstName} {userProfile.lastName}
        </ProfileText>
        <ProfileText>{userProfile.accountName}</ProfileText>
      </section>
    </CenterContainer>
  );
}
