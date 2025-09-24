
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Catalog from "../components/Catalog";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div lang="ar" dir="rtl" className="font-[Cairo] bg-gray-50">
      <Navbar />
      <Hero />
      <Catalog />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
