import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  image: string;
  name: string;
  rating: string;
  description: string;
}


const ProductCard = ({ image, name, rating, description }: ProductCardProps) => (
  <div
    className="product-card bg-white shadow-md rounded-lg overflow-hidden flex flex-col mb-6"
    style={{ width: '340px', minHeight: '440px', maxWidth: '100%' }}
  >
    <div className="product-image-wrapper flex justify-center items-center p-0" style={{ height: '210px', background: '#f7fafc' }}>
      <Image
        src={image}
        alt={name}
        width={320}
        height={210}
        className="product-image"
        style={{ objectFit: 'contain', width: '100%', height: '210px', display: 'block', background: '#f7fafc' }}
        unoptimized
      />
    </div>
    <div className="product-info p-5 flex flex-col justify-between" style={{ flex: 1 }}>
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
