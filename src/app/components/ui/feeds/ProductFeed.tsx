import React from 'react';
import styled from 'styled-components';

const PostContainer = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 100%;
  max-width: 600px;
  // margin: 16px auto; /* Center the product feed */
`;

const ProductImage = styled.img`
  width: 100%;
  margin-bottom: 16px;
  border-radius: 8px; /* Rounded corners for image */
`;

const ProductName = styled.h2`
  font-weight: bold;
  margin: 0;
`;

const ProductDescription = styled.p`
  margin: 16px 0;
  color: #666; /* Slightly lighter color for description */
`;

const ProductPrice = styled.p`
  font-size: 1.25em;
  font-weight: bold;
  color: #333; /* Darker color for price */
`;


interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

const ProductFeed: React.FC<Product> = ({ id, name, price, description, imageUrl }) => (
  <PostContainer>
    <ProductImage src={imageUrl} alt={name} />
    <ProductName>{name}</ProductName>
    <ProductDescription>{description}</ProductDescription>
    <ProductPrice>${price.toFixed(2)}</ProductPrice>
    {/* Add buttons for adding to cart, etc. */}
  </PostContainer>
);

export default ProductFeed;
