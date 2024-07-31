"use client"

// HeaderFeed.tsx

import React from 'react';
import styled from 'styled-components';

interface HeaderFeedProps {
  profilePictureAvatar: string;
  displayName: string;
  bio: string;
}

const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 32px;
  margin: 0 auto;
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 16px;
`;

const DisplayName = styled.h2`
  font-weight: bold;
  margin: 0;
`;

const Bio = styled.p`
  color: #666;
  margin: 16px 0;
`;

const HeaderFeed: React.FC<HeaderFeedProps> = ({ profilePictureAvatar, displayName, bio }) => (
  <Container>
    <Avatar src={profilePictureAvatar} alt="Profile Avatar" />
    <DisplayName>{displayName}</DisplayName>
    <Bio>{bio}</Bio>
  </Container>
);

export default HeaderFeed;
