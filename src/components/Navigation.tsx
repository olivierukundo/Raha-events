
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Calendar className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-primary">Raha Events</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-primary transition-colors">Home</button>
          <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-primary transition-colors">Services</button>
          <button onClick={() => scrollToSection("tours")} className="text-gray-700 hover:text-primary transition-colors">Tours</button>
          <button onClick={() => scrollToSection("testimonials")} className="text-gray-700 hover:text-primary transition-colors">Reviews</button>
          <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-primary transition-colors">Contact</button>
        </div>
        <Button className="bg-primary hover:bg-primary/90" onClick={() => scrollToSection("contact")}>
          Book Now
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
