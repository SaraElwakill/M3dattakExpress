import React from 'react';
import Image from 'next/image';
const Hero = () => (
  <section className="hero bg-gray-50 py-10">
    <div className="hero-content simple-hero flex flex-col items-center">
      <Image width={50} height={50} src="https://res.cloudinary.com/durcrs1wn/image/upload/v1758127249/M3dattak_Express_-%D9%85%D8%B9%D8%AF%D8%A7%D8%AA%D9%83_%D8%A5%D9%83%D8%B3%D8%A8%D8%B1%D8%B3_trocnc.jpg" alt="M3dattak Logo" className="hero-logo w-24 h-24 rounded-full mb-4" />
      <h1 className="text-3xl font-bold mb-2">
        <span className="highlight text-blue-600">معداتك إكسبرس</span>
      </h1>
      <p className="hero-desc text-lg mb-4 text-center">
        متجر إلكتروني للمعدات التقنية والهندسية<br />
        جودة عالية وخدمة عملاء مميزة
      </p>
      <a href="#catalog" className="hero-btn bg-blue-600 text-white px-6 py-2 rounded shadow">ابدأ التسوق</a>
    </div>
  </section>
);

export default Hero;
