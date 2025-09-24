/* eslint-disable */
import React from 'react';
import ProductCard from './ProductCard';
type Product = {
  id: string | number;
  name: string;
  image: string;
  description: string;
  rating?: string;
};
// const products = [
//   {
//     image: 'https://res.cloudinary.com/durcrs1wn/image/upload/v1758122702/solder_msfuf4.jpg',
//     name: '926 micro motors',
//     rating: '★ ★ ★ ★ ☆',
//     description: 'هنا يتم وضع وصف قصير ومميز للمنتج. يمكن أن يحتوي على الخامات أو المزايا الرئيسية.',
//   },
//   {
//     image: 'https://res.cloudinary.com/durcrs1wn/image/upload/v1758133162/image_jhs0f8.png',
//     name: 'SR fordom (Original)',
//     rating: '★ ★ ★ ★ ★',
//     description: 'موتور فوردم اس ار اتجاهين 26k',
//   },
// ];


const Catalog = ({ products }:  { products: Product[] }) => (
  <main id="catalog" className="catalog container mx-auto py-10">
    {Array.isArray(products) && products.map((product: Product, idx: number) => (
      <ProductCard key={idx} {...product} />
    ))}
  </main>
);

export default Catalog;
