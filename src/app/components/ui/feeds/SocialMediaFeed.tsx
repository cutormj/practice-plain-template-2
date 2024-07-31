// SimpleHeroFeed.tsx
"use client";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface SocialMediaFeedProps {
  profilePictureBackground: string;
  displayName: string;
  bio: string;
  icons: string[]; // Array of icon URLs
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
  gap: 8px; /* Space between icons */

  img {
    width: 24px; /* Adjust size as needed */
    height: 24px;
  }
`;

const SocialMediaFeed: React.FC<SocialMediaFeedProps> = ({ profilePictureBackground, displayName, bio, icons }) => {


  return (
      <Container>
        <IconsHolder>
          {icons.map((icon, index) => (
            <img key={index} src={icon} alt={`icon-${index}`} />
          ))}
        </IconsHolder>
      </Container>
  );
};

export default SocialMediaFeed;
