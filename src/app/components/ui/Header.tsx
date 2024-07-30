"use client"

import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  background-color: #333;
  color: white;
  padding: 16px;
  position: relative; /* Relative positioning */
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 10px;
  }
    
  @media (max-width: 768px) {
    padding: 8px; /* Adjust padding for mobile devices */
  }
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 16px;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    margin-right: 8px; /* Adjust margin for mobile devices */
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Avatar src="profile.jpg" alt="Avatar" /> Joseph
    </HeaderContainer>
  );
};

export default Header;
