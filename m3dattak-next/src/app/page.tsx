"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Catalog from "../components/Catalog";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

import Papa from 'papaparse';
import { GetStaticProps } from 'next';
// type FormattedProduct = {
//   id: string | number;
//   name: string;
//   image: string;
//   description: string;
// };
// type Product = {
//   ID: string | number;
//   Image?: string; // Optional field
//   Name: string;
//   Description: string;
//   imageUrl: string;
//   Categories: string[];
// };
// export default function Home() {
//   const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 // استدعاء API Route لـ Next.js
//                 const response = await fetch('/api/products');
//                 if (!response.ok) {
//                     throw new Error('فشل في جلب المنتجات');
//                 }
//                 const data = await response.json();
//                 // التأكد من أن حقول البيانات مطابقة للأسماء في Google Sheet
//         const formattedProducts = data.map((item:Product) => ({
//                     id: item.ID,
//                     name: item.Name,
//                     image: item.imageUrl,
//                     description: item.Description,
//                 }));
//                 setProducts(formattedProducts);
//             } catch (error) {
//                 console.error('حدث خطأ في جلب البيانات:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, []);

//     if (loading) {
//         return <div className="loading">جاري تحميل المنتجات...</div>;
//     }

export interface Product {
  ID: string;
  Image: string; // قد تكون مجرد رابط أو نص
  Name: string;
  Description: string;
  imageUrl: string; // الرابط الفعلي للصورة
  Categories: string;
  // ملاحظة: PapaParse دائماً يعيد القيم كنصوص (strings)
}

// 2. تعريف نوع (Interface) للـ Props التي يستقبلها المكون (Component)
interface HomeProps {
  sheetData: Product[];
}

// الرابط العام لملف CSV الخاص بك
const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTNgaG4CLuepBIX0L5w8uaIY32xFQCjumb8Vno6eUR9Bwr6UAjkT3RwKkwnSFI2ijzDJc0eNQF1eSY5/pub?output=csv';
async function fetchSheetData(): Promise<Product[]> {
  try {
    const response = await fetch(SHEET_CSV_URL);
    if (!response.ok) {
      console.error(`Fetch failed with status: ${response.status}`);
      return [];
    }

    const csvText = await response.text();
    const { data } = Papa.parse<Product>(csvText, {
      header: true,
      skipEmptyLines: true,
    });
    
    return data as Product[];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default function Home() {
 
  
   const [sheetData, setSheetData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // استخدام useEffect لجلب البيانات عند تحميل المكون لأول مرة
  useEffect(() => {
    fetchSheetData().then(data => {
      setSheetData(data);
      setIsLoading(false);
    });
  }, []); // [] لضمان التنفيذ مرة واحدة فقط

  if (isLoading) {
    return <div className="container">جاري تحميل البيانات...</div>;
  }
  
  if (sheetData.length === 0) {
    return <div className="container">لا توجد بيانات متاحة أو حدث خطأ.</div>;
  }

console.log(sheetData);

  return (
    <div lang="ar" dir="rtl" className="font-[Cairo] bg-gray-50">
      <Navbar />
      <Hero />
      <Catalog products={sheetData}/>
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
