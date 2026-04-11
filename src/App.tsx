import GrainOverlay from "./components/GrainOverlay";
import DynamicBackground from "./components/DynamicBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LiquidGlassRibbon from "./components/LiquidGlassRibbon";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <div className="bg-surface selection:bg-primary selection:text-on-primary min-h-screen relative">
      <DynamicBackground />
      <GrainOverlay />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <LiquidGlassRibbon />
        <About />
        <Services />
        <Portfolio />
        <TechStack />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
