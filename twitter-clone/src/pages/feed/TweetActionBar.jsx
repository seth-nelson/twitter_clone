import React, { useState } from "react";
import { ActionBarContainer } from "./styles/TweetActionBar.styled";
import { BiComment, BiHeart } from "react-icons/bi";
import { FiShare } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

export default function TweetActionBar() {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    isLiked ? setIsLiked(false) : setIsLiked(true);
  };

  return (
    <ActionBarContainer>
      <BiComment size="16px" color="gray" />
      <FiShare size="16px" color="gray" />
      {isLiked ? (
        <FaHeart size="16px" color="red" onClick={() => toggleLike()} />
      ) : (
        <BiHeart size="16px" color="gray" onClick={() => toggleLike()} />
      )}
    </ActionBarContainer>
  );
}
