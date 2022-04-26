import React, { useEffect, useState } from "react";
import {
  PostCard,
  ProfilePicture,
  ContentSection,
  NameInfo,
  FirstName,
  AccountName,
  Tweet,
} from "./styles/Feed.styled";
import { CenterContainer } from "./styles/Container.styled";
import { BsDot } from "react-icons/bs";
import getPosts from "../api/local-data/getPosts";
import TweetActionBar from "./feed/TweetActionBar";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = getPosts();
    setPosts(posts);
  }, []);

  //   const calculateTime = (timePosted) => {
  //     const currentTime = Date.now();
  //     const timeDiff = currentTime - timePosted;
  //     if (timeDiff <= 3600) {
  //       return "m";
  //     } else if (timeDiff <= 7200) {
  //       return "h";
  //     } else return "d";
  //   };

  return (
    <CenterContainer>
      {posts.map((post, key) => {
        return (
          <PostCard data-testid="posts" key={key}>
            <div>
              <ProfilePicture src={post.image} alt="profile" />
            </div>
            <section>
              <ContentSection>
                <NameInfo>
                  <FirstName style={{ marginRight: "10px" }}>
                    {post.firstName}
                  </FirstName>
                  <AccountName>@{post.accountName}</AccountName>
                  <BsDot
                    style={{ margin: "8px 0px" }}
                    size="32px"
                    color="lightGray"
                  />
                  <AccountName>
                    16h
                    {/* {calculateTime(post.timestamp)} */}
                  </AccountName>
                </NameInfo>
                <div>
                  <Tweet>{post.message}</Tweet>
                </div>
              </ContentSection>
              <div>
                <TweetActionBar />
              </div>
            </section>
          </PostCard>
        );
      })}
    </CenterContainer>
  );
}
