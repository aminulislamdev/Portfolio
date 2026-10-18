import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Certificates from "@/components/sections/Certificates";
import Timeline from "@/components/sections/Timeline";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-16"> 
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Certificates />
        <Timeline />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}