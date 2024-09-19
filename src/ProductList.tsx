// ProductList.tsx
import React from 'react';

interface Product {
  id: number;
  images: string[];
  title: string;
  description: string;
  price: string;
  category: string; 
}


interface ProductListProps {
  products: Product[];
  onAddToCart: (productId: number) => void;
  onImageClick: (images: string[]) => void;
  selectedCategory: string;  
}


const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart, onImageClick, selectedCategory }) => {
  const filteredProducts = selectedCategory === 'all' ? products : products.filter(product => product.category === selectedCategory);

  return (
    <div className="product-list">
      {filteredProducts.map(product => (
        <div className="product-card" key={product.id}>
          <img
            src={product.images[0]}
            alt={product.title}
            onClick={() => onImageClick(product.images)}
          />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <div className="product-card-footer">
          <span>${product.price}</span>
            <button onClick={() => onAddToCart(product.id)}>Lo quiero</button>
          </div>
        </div>
      ))}
    </div>
  );
};



export default ProductList;
