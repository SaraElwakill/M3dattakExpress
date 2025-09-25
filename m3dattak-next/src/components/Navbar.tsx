import React from 'react';
import Image from 'next/image';
const Navbar = () => (
  <nav className="navbar bg-white shadow-md py-4">
    <div className="container mx-auto flex justify-between items-center">
      <span className="logo flex items-center gap-2 text-xl font-bold">
        <Image width={50} height={50} src="https://res.cloudinary.com/durcrs1wn/image/upload/v1758127249/M3dattak_Express_-%D9%85%D8%B9%D8%AF%D8%A7%D8%AA%D9%83_%D8%A5%D9%83%D8%B3%D8%A8%D8%B1%D8%B3_trocnc.jpg" alt="M3dattak Logo" className="brand-logo w-10 h-10 rounded-full" />
       <span className="highlight text-blue-600">Express</span> M3dattak 
      </span>
      <ul className="nav-links flex gap-6 text-lg">
        <li><a href="#catalog">المنتجات</a></li>
        <li><a href="#about">عن المتجر</a></li>
        <li><a href="#contact">تواصل معنا</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
