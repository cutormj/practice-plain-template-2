'use client'

import React from 'react';
import styled from 'styled-components';
import FacebookFeed from './feeds/FacebookFeed';
import ProductFeed from './feeds/ProductFeed';
import SocialMediaFeed from './feeds/SocialMediaFeed';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #fff;
  padding: 16px 0;

  @media (max-width: 320px) {
    width: 100%; /* Full width on smartwatches */
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile phones */
  }

  @media (min-width: 768px) {
    justify-content: center;
  }

  @media (min-width: 1024px) {
    justify-content: center; /* Center content on iPad Pro */
  }

  @media (min-width: 1224px) {
    justify-content: center;
  }

  @media (min-width: 1824px) {
    justify-content: center;
  }
`;

// Raw Data
const componentData = [
  {
    type: 'FacebookFeed',
    props: {
      username: 'John Doe',
      avatarUrl: 'https://via.placeholder.com/40',
      timestamp: '2 hours ago',
      content: 'This is an example of a Facebook-like post component. It includes user information, post content, and interaction buttons.',
      imageUrl: 'https://via.placeholder.com/600x400',
    }
  },
  {
    type: 'FacebookFeed',
    props: {
      username: 'Mark Joseph',
      avatarUrl: 'https://via.placeholder.com/40',
      timestamp: '2 hours ago',
      content: 'This is an example of a Facebook-like post component. It includes user information, post content, and interaction buttons.',
      imageUrl: 'https://via.placeholder.com/600x400',
    }
  },
  {
    type: 'ProductFeed',
    props: { 
      id: 1,
      name: 'Awesome Sneakers',
      price: 99.99,
      description: 'Comfortable sneakers for everyday wear.',
      imageUrl: 'https://via.placeholder.com/600x400', // Replace with the actual image URL
    }
  },
  {
    type: 'ProductFeed',
    props: { 
      id: 1,
      name: 'Awesome Sneakers',
      price: 99.99,
      description: 'Comfortable sneakers for everyday wear.',
      imageUrl: 'https://via.placeholder.com/600x400', // Replace with the actual image URL
    }
  }
];

// Map Component type to the actual component
const componentMap: { [key: string ]: React.FC<any>} = {
  FacebookFeed,
  ProductFeed,
  SocialMediaFeed
};




// Define products array
// const products: Product[] = [
//   {
//     id: 1,
//     name: 'Awesome Sneakers',
//     price: 99.99,
//     description: 'Comfortable sneakers for everyday wear.',
//     imageUrl: 'https://via.placeholder.com/600x400', // Replace with the actual image URL
//   },
//   {
//     id: 2,
//     name: 'Awesome Luh',
//     price: 99.99,
//     description: 'Comfortable sneakers for everyday wear.',
//     imageUrl: 'https://via.placeholder.com/600x400', // Replace with the actual image URL
//   },
//   {
//     id: 3,
//     name: 'Nhek Luh',
//     price: 99.99,
//     description: 'Comfortable sneakers for everyday wear.',
//     imageUrl: 'https://via.placeholder.com/600x400', // Replace with the actual image URL
//   },
// ];

const FeedStream: React.FC = () => {
  return (
    <div>
      {componentData.map((data, index) => {
        const Component = componentMap[data.type];
        return <Component key={index} {...data.props} />;
      })}
    </div>
  );
};

export default FeedStream;
