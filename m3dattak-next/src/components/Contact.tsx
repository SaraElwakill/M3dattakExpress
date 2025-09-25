import React from 'react';
import Image from 'next/image';
import { FaEnvelope } from 'react-icons/fa';
const WHATSAPP_NUMBER = "201119201970"; 
const FACEBOOK_URL = "https://www.facebook.com/people/M3dattak-Express-%D9%85%D8%B9%D8%AF%D8%A7%D8%AA%D9%83-%D8%A5%D9%83%D8%B3%D8%A8%D8%B1%D8%B3/61569358596871/";
const EMAIL_ADDRESS = "ahmedzakikmal@gmail.com"; 
const Contact = () => (
  <section id="contact" className="contact bg-white py-10">
    
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-2">تواصل معنا</h2>
      <p>للاستفسارات أو الطلبات الخاصة، يرجى التواصل عبر : </p>

<div className="social-links-container">
    {/* أيقونة الواتساب */}
    <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-icon whatsapp-icon"
    >
        <Image 
            width={35} 
            height={35} 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            alt="WhatsApp" 
            className="w-8 h-8"
        />
    </a>

    {/* أيقونة الفيسبوك */}
    <a 
        href={FACEBOOK_URL} 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-icon facebook-icon"
    >
        <Image 
            width={35} 
            height={35} 
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" 
            alt="Facebook" 
            className="w-8 h-8"
        />
    </a>

    {/* أيقونة الإيميل (Mailto) */}
    <a 
        href={`mailto:${EMAIL_ADDRESS}?subject=استفسار%20من%20الموقع`} 
        className="social-icon email-icon"
    >
        {/* يمكنك استخدام أيقونة من react-icons هنا، أو صورة SVG */}
         <FaEnvelope className="email-logo" size={35} /> 
        
    </a>
</div>
   
    </div>
  </section>
);

export default Contact;
