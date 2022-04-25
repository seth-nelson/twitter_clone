import React, { useState } from "react";
import { Button } from "./styles/FollowButton.styled";

export default function FollowButton() {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    isFollowing ? setIsFollowing(false) : setIsFollowing(true);
  };

  return (
    <>
      <Button isFollowing={isFollowing} onClick={() => toggleFollow()}>
        {isFollowing ? "Following" : "Follow"}
      </Button>
    </>
  );
}
