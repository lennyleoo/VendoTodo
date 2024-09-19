// ProductCard.tsx
import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  onAddToCart: () => void;
}



const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, price, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="product-card-footer">
        <span>${price}</span>
        <button onClick={onAddToCart}>Lo quiero!</button>
      </div>
    </div>
  );
};

export default ProductCard;
