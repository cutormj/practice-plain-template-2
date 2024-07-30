import React from 'react';
import styled from 'styled-components';

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 16px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SocialMediaItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
  padding: 8px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 8px;
`;

const Title = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

interface SocialMedia {
  title: string;
  url: string;
  icon: string;
}

interface SocialMediasProps {
  socialMedias: SocialMedia[];
}

const SocialMedias: React.FC<SocialMediasProps> = ({ socialMedias }) => (
  <SocialMediaContainer>
    {socialMedias.map((socialMedia, index) => (
      <SocialMediaItem key={index} href={socialMedia.url} target="_blank" rel="noopener noreferrer">
        <Icon src={socialMedia.icon} alt={socialMedia.title} />
        <Title>{socialMedia.title}</Title>
      </SocialMediaItem>
    ))}
  </SocialMediaContainer>
);

export default SocialMedias;