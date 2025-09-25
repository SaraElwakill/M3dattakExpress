import React from 'react';
import Image from 'next/image';
import Badge from './Badge';
import { Product } from '../app/page';
interface ProductCardProps {
  imageUrl: string;
  Name: string;
  Description: string;
  badge: string; // خاصية الشارة الجديدة
}

const WHATSAPP_NUMBER = "201119201970"; 

function ProductCard ({ imageUrl, Name,  Description,badge }: ProductCardProps) {


   const getWhatsappLink = (): string => {
        // 1. بناء الرسالة بالعربية
        const message = `
أهلاً، أود الاستفسار عن المنتج التالي:
--------------------------------
الاسم: ${Name}
الكود: ${ID}
التصنيف: ${Categories}
الوصف: ${Description} 
--------------------------------
شكراً جزيلاً.
        `.trim(); // استخدام trim() لإزالة الفراغات الزائدة

        // 2. استخدام encodeURIComponent لضمان صلاحية الرسالة في الروابط
        const encodedMessage = encodeURIComponent(message);

        // 3. بناء الرابط النهائي
        return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    };
return (

  <div
    className="product-card bg-white shadow-md rounded-lg overflow-hidden flex flex-col mb-6"
    style={{ width: '340px', minHeight: '440px', maxWidth: '100%' }}
  >
   {badge==="TRUE"&& <Badge color="new" iconName="star">NEW ARRIVAL!</Badge>}
      
    <div className="product-image-wrapper flex justify-center items-center p-0" style={{ height: '210px', background: '#f7fafc' }}>
      <Image
        src={imageUrl}
        alt={Name}
        width={320}
        height={210}
        className="product-image"
        style={{ objectFit: 'contain', width: '100%', height: '210px', display: 'block', background: '#f7fafc' }}
        unoptimized
      />
    </div>
    <div className="product-info p-5 flex flex-col justify-between" style={{ flex: 1 }}>
      <h2 className="product-name text-xl font-bold mb-2">{Name}</h2>
      {/* <div className="product-rating text-yellow-500 mb-2">
        <span>{rating}</span>
      </div> */}
      <p className="product-description mb-4">{Description}</p>
      <a className="whatsapp-btn flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded" href="getWhatsappLink()" target="_blank" rel="noopener">
        <Image width={50} height={50} src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="whatsapp-logo w-5 h-5" />
        تواصل واتساب
      </a>
    </div>
  </div>)
}

export default ProductCard;
