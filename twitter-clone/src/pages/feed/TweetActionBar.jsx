import React, { useEffect, useState } from "react";
import {
  MainContainer,
  ActionBarContainer,
  LikesNumber,
} from "./styles/TweetActionBar.styled";
import { BiComment, BiHeart } from "react-icons/bi";
import { FiShare } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

export default function TweetActionBar(props) {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    setLikes(props.likes);
  }, [props]);

  const toggleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikes(likes - 1);
    } else {
      setIsLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <MainContainer>
      <ActionBarContainer>
        <BiComment size="16px" color="gray" />
        <FiShare size="16px" color="gray" />
        {isLiked ? (
          <FaHeart
            data-testid="toggledLikeIcon"
            size="16px"
            color="red"
            onClick={() => toggleLike()}
          />
        ) : (
          <BiHeart
            data-testid="untoggledIcon"
            size="16px"
            color="gray"
            onClick={() => toggleLike()}
          />
        )}
      </ActionBarContainer>
      <LikesNumber data-testid="numLikes">{likes}</LikesNumber>
    </MainContainer>
  );
}
