/* eslint-disable */
import React from 'react';
import ProductCard from './ProductCard';
type Product = {
  id: string | number;
  name: string;
  image: string;
  description: string;

};



const Catalog = ({ products }:  { products: Product[] }) => (
  <main id="catalog" className="catalog container mx-auto py-10">
    {Array.isArray(products) && products.map((product: Product, idx: number) => (
      <ProductCard key={idx} {...product} />
    ))}
  </main>
);

export default Catalog;
