import React from "react";
import { ActionBarContainer } from "./styles/TweetActionBar.styled";
import { BiComment, BiHeart } from "react-icons/bi";
import { FiShare } from "react-icons/fi";

export default function TweetActionBar() {
  return (
    <ActionBarContainer>
      <BiComment size="16px" color="gray" />
      <FiShare size="16px" color="gray" />
      <BiHeart size="16px" color="gray" />
    </ActionBarContainer>
  );
}
