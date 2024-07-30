"use client";

// SocialMediaFeed.tsx

import React from 'react';
import styled from 'styled-components';

interface SocialMediaLink {
  title: string;
  url: string;
  icon: string;
}

interface SocialMediaFeedProps {
  links: SocialMediaLink[];
}

const FeedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const LinkItem = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  transition: color 0.2s;

  &:hover {
    color: #0070f3;
  }

  svg {
    margin-right: 8px;
  }
`;

const SocialMediaFeed: React.FC<SocialMediaFeedProps> = ({ links }) => (
  <FeedContainer>
    {links.map((link) => (
      <LinkItem key={link.title} href={link.url} target="_blank" rel="noopener noreferrer">
        {/* Replace with your actual icons */}
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d={link.icon} />
        </svg>{link.title}
      </LinkItem>
    ))}
  </FeedContainer>
);

export default SocialMediaFeed;

