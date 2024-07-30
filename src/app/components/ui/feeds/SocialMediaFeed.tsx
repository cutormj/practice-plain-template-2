"use client";

// SocialMediaFeed.tsx

import React from 'react';
import styled from 'styled-components';

interface SocialMediaLink {
  title: string;
  url: string;
  iconUrl: string; // New property for the icon image URL
}

interface SocialMediaFeedProps {
  links: SocialMediaLink[];
}

const FeedContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const LinkItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #333;
  transition: color 0.2s;

  &:hover {
    color: #0070f3;
  }

  img {
    margin-bottom: 8px;
    width: 24px; // Adjust the size as needed
    height: 24px;
  }
`;

const SocialMediaFeed: React.FC<SocialMediaFeedProps> = ({ links }) => (
  <FeedContainer>
    {links.map((link) => (
      <LinkItem key={link.title} href={link.url} target="_blank" rel="noopener noreferrer">
        <img src={link.iconUrl} alt={link.title} />
        {link.title}
      </LinkItem>
    ))}
  </FeedContainer>
);

export default SocialMediaFeed;
