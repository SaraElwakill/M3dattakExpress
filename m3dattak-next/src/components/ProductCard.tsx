import React from 'react';

interface ProductCardProps {
  image: string;
  name: string;
  rating: string;
  description: string;
}

const ProductCard = ({ image, name, rating, description }: ProductCardProps) => (
  <div className="product-card bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row mb-6">
    <div className="product-image-wrapper md:w-1/3 flex justify-center items-center p-4">
      <img src={image} alt={name} className="product-image w-32 h-32 object-contain" />
    </div>
    <div className="product-info md:w-2/3 p-4 flex flex-col justify-between">
      <h2 className="product-name text-xl font-bold mb-2">{name}</h2>
      <div className="product-rating text-yellow-500 mb-2">
        <span>{rating}</span>
      </div>
      <p className="product-description mb-4">{description}</p>
      <a className="whatsapp-btn flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded" href="https://wa.me/201119201970" target="_blank" rel="noopener">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="whatsapp-logo w-5 h-5" />
        تواصل واتساب
      </a>
    </div>
  </div>
);

export default ProductCard;
