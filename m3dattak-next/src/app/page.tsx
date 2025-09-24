"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Catalog from "../components/Catalog";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
type FormattedProduct = {
  id: string | number;
  name: string;
  image: string;
  description: string;
};
type Product = {
  ID: string | number;
  Image?: string; // Optional field
  Name: string;
  Description: string;
  ImageUrl: string;
  Categories: string[];
};
export default function Home() {
  const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // استدعاء API Route لـ Next.js
                const response = await fetch('/api/products');
                if (!response.ok) {
                    throw new Error('فشل في جلب المنتجات');
                }
                const data = await response.json();
                // التأكد من أن حقول البيانات مطابقة للأسماء في Google Sheet
        const formattedProducts = data.map((item:Product) => ({
                    id: item.ID,
                    name: item.Name,
                    image: item.imageUrl,
                    description: item.Description,
                }));
                setProducts(formattedProducts);
            } catch (error) {
                console.error('حدث خطأ في جلب البيانات:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div className="loading">جاري تحميل المنتجات...</div>;
    }
console.log(products);

  return (
    <div lang="ar" dir="rtl" className="font-[Cairo] bg-gray-50">
      <Navbar />
      <Hero />
      <Catalog products={products}/>
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
