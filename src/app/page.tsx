// pages/index.js (or any other appropriate file)

"use client"
// pages/index.js (or any other appropriate file)
import styled from 'styled-components';
import Header from './components/ui/Header';
import FeedStream from './components/ui/FeedStream';
import SocialMedias from './components/SocialMedias'; // Adjust the path as necessary

const socialMediaData = [
  { title: 'Facebook', url: 'https://facebook.com', icon: '/path/to/facebook-icon.png' },
  { title: 'Twitter', url: 'https://twitter.com', icon: '/path/to/twitter-icon.png' },
  { title: 'Instagram', url: 'https://instagram.com', icon: '/path/to/instagram-icon.png' },
];

const MainWrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh; /* Set to at least the height of the viewport */
  background-color: #f9f9f9;

`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export default function Home() {
  return (
    <MainWrapper>
      <ContentWrapper>
        {/* Your content goes here */}
        <Header />
        {/* <FeedStream /> */}
        <FeedStream />
      </ContentWrapper>
    </MainWrapper>
  );
}
