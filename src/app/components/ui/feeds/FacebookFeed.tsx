import React from 'react';
import styled from 'styled-components';

interface Post {
  username: string;
  avatarUrl: string;
  timestamp: string;
  content: string;
  imageUrl: string;
}

interface FacebookFeedProps {
  post: Post;
}

const PostContainer = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 100%;
  max-width: 600px;
  // margin: 16px auto; // To center the post on the page
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const AvatarWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 16px;
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-weight: bold;
`;

const PostTime = styled.span`
  color: #888;
  font-size: 0.875em;
`;

const PostContent = styled.div`
  margin-bottom: 16px;
`;

const PostImageWrapper = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
`;

const PostImage = styled.img`
  width: 100%;

  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile phones */
  }

  @media (max-width: 320px) {
    width: 100%; /* Full width on smartwatches */
  }
`;

const PostActions = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #ddd;
  padding-top: 8px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: #888;
  cursor: pointer;
  font-size: 1em;
  padding: 8px;
  display: flex;
  align-items: center;

  &:hover {
    color: #000;
  }
`;

const Icon = styled.span`
  margin-right: 8px;
`;

const FacebookFeed: React.FC<FacebookFeedProps> = ({ post }) => (
  <PostContainer>
    <PostHeader>
      <AvatarWrapper>
        <Avatar src={post.avatarUrl} alt={`${post.username}'s avatar`} />
      </AvatarWrapper>
      <UserInfo>
        <UserName>{post.username}</UserName>
        <PostTime>{post.timestamp}</PostTime>
      </UserInfo>
    </PostHeader>
    <PostContent>{post.content}</PostContent>
    {post.imageUrl && (
      <PostImageWrapper>
        <PostImage src={post.imageUrl} alt="Post" />
      </PostImageWrapper>
    )}
    <PostActions>
      <ActionButton>
        <Icon>👍</Icon> Like
      </ActionButton>
      <ActionButton>
        <Icon>💬</Icon> Comment
      </ActionButton>
      <ActionButton>
        <Icon>🔗</Icon> Share
      </ActionButton>
    </PostActions>
  </PostContainer>
);

export default FacebookFeed;
export type { FacebookFeedProps, Post };
