import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-accent-gold/30 selection:text-white pb-0">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
}
