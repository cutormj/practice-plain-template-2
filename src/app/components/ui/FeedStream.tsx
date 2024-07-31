'use client'

import React from 'react';
import styled from 'styled-components';
import FacebookFeed from './feeds/FacebookFeed';
import ProductFeed from './feeds/ProductFeed';
import SocialMediaFeed from './feeds/SocialMediaFeed';
import HeaderFeed from './feeds/HeaderFeed';
import SimpleHeroFeed from './feeds/SimpleHeroFeed';

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
    type: 'SimpleHeroFeed',
    props: {
      profilePictureBackground: 'profile2.jpg',
      displayName: '-Joseph',
      bio: '"I possess keys that unlock nothing, and a space that holds no room. You can enter, but you can never leave."',
    }
  },

  // {
  //   type: 'HeaderFeed',
  //   props: {
  //     profilePictureAvatar: 'profile.jpg',
  //     displayName: 'Mark Joseph',
  //     bio: 'This is my Bio',
  //   }
  // },

  // {
  //   type: 'SocialMediaFeed',
  //   props: {
  //     links: [
  //       { 
  //         title: 'Twitter', 
  //         url: 'https://twitter.com', 
  //         icon: 'your-twitter-icon'
  //       },
  //       { 
  //         title: 'LinkedIn', 
  //         url: 'https://linkedin.com', 
  //         icon: 'your-linkedin-icon'
  //       },
  //       {
  //         title: 'Facebook',
  //         url: 'https://www.facebook.com',
  //         icon: 'https://img.icons8.com/?size=100&id=118497&format=png&color=000000'
  //       },
  //       // Add more social media links as needed
  //     ],
  //   },
  // },
  
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
      imageUrl: 'https://via.placeholder.com/600x400',
    }
  }
];

// Map Component type to the actual component
const componentMap: { [key: string ]: React.FC<any>} = {
  FacebookFeed,
  ProductFeed,
  SocialMediaFeed,
  HeaderFeed,
  SimpleHeroFeed,
};

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
