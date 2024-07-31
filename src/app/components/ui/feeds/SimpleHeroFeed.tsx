// SimpleHeroFeed.tsx
"use client";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface SimpleHeroFeedProps {
  profilePictureBackground: string;
  displayName: string;
  bio: string;
}

const Container = styled.div<{ background: string }>`
  background-image: url(${props => props.background});
  background-size: cover;
  background-position: center;  
  height: 50vh;
  width: 100vw; /* Set width to 100% of the viewport width */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 40%; /* Adjust the height as needed */
      background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
    }
  }

`;


const TextContainer = styled.div`
  position: absolute;
  top: 72px; /* Adjust as needed */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  
    font-size: 0.9em;

    @media (max-width: 768px) {
    top: 32px;
    font-size: 0.5em
  }
    
`;

    const DisplayName = styled.h2`
    font-weight: bold;
    margin: 0;
    `;

    const Bio = styled.p`
    color: #333; /* Darker color for bio */
    //   margin: 32px 0 0 0; /* Adjust margin as needed */
    font-weight: normal; /* Bold font for bio */
    `;

const SimpleHeroFeed: React.FC<SimpleHeroFeedProps> = ({ profilePictureBackground, displayName, bio }) => {
  const [background, setBackground] = useState<string>('');

  useEffect(() => {
    const loadImage = async () => {
      const response = await fetch(profilePictureBackground);
      if (response.ok) {
        setBackground(profilePictureBackground);
      }
    };

    loadImage();
  }, [profilePictureBackground]);

  return (
    <Container background={background}>
      <TextContainer>
        <Bio>{bio}</Bio>
        <DisplayName>{displayName}</DisplayName>
      </TextContainer>
    </Container>
  );
};

export default SimpleHeroFeed;
