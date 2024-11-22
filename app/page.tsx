import Image from "next/image";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header/>
    <Hero/>
    <About/>
    <Services/>
    <Skills/>
    <Contact/>
    <Footer/>
    </div>
  );
}
