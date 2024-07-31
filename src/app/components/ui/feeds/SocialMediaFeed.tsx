"use client";
import React from 'react';
import styled from 'styled-components';

interface Link {
  icon: string;
  title: string;
  url: string; // Add URL property
}

interface SocialMediaFeedProps {
  icons: string[]; // Array of icon URLs
  links: Link[];
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`;

const IconsHolder = styled.div`
  position: absolute;
  bottom: 16px; /* Adjust as needed */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 16px; /* Space between links */

  
    @media (max-width: 768px) {
        font-size: 0.6em;
      }
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;

    img {
      width: 32px; /* Adjust size as needed */
      height: 32px;

      @media (max-width: 768px) {
        width: 16px; /* Adjust size for mobile */
        height: 16px;
      }
    }

    code {
      margin-left: 8px; /* Space between icon and title */
    }
  }
`;

const SocialMediaFeed: React.FC<SocialMediaFeedProps> = ({ icons, links }) => {
  return (
    <Container>
      <IconsHolder>
        {links.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            <img src={link.icon} alt={`icon-${index}`} />
            <code>{link.title}</code>
          </a>
        ))}
      </IconsHolder>
    </Container>
  );
};

export default SocialMediaFeed;
