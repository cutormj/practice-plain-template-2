// pages/index.js (or any other appropriate file)

"use client"
// pages/index.js (or any other appropriate file)
import styled from 'styled-components';
import Header from './components/ui/Header';
import FeedStream from './components/ui/FeedStream';

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
        <FeedStream />
      </ContentWrapper>
    </MainWrapper>
  );
}
