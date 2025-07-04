
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Tours from "@/components/Tours";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <Tours />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
