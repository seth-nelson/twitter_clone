import React, { useState } from "react";
import { Button } from "./styles/FollowButton.styled";

export default function FollowButton(props) {
  const [isFollowing, setIsFollowing] = useState(false);
  const { handleFollowerCount } = props;

  const toggleFollow = () => {
    if (isFollowing) {
      setIsFollowing(false);
      handleFollowerCount(false);
    } else {
      setIsFollowing(true);
      handleFollowerCount(true);
    }
  };

  return (
    <>
      <Button
        data-testid="follow-button"
        isFollowing={isFollowing}
        onClick={() => toggleFollow()}
      >
        {isFollowing ? "Following" : "Follow"}
      </Button>
    </>
  );
}
