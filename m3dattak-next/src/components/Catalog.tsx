/* eslint-disable */
import React from 'react';
import ProductCard from './ProductCard';

import { Product as SheetProduct } from '../app/page';

const Catalog = ({ products }:  { products: SheetProduct[] }) => (
  <main id="catalog" className="catalog container mx-auto py-10">
    {Array.isArray(products) && products.map((product: SheetProduct, idx: number) => (
      <ProductCard key={idx} {...product} />
    ))}
  </main>
);

export default Catalog;
