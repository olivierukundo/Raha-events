
import { Button } from "@/components/ui/button";
import { Calendar, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Calendar className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-gray-900">Raha Events</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</button>
          <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</button>
          <button onClick={() => scrollToSection("tours")} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Tours</button>
          <button onClick={() => scrollToSection("testimonials")} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Reviews</button>
          <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</button>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white" onClick={() => scrollToSection("contact")}>
            Book Now
          </Button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button onClick={() => scrollToSection("home")} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600">Home</button>
            <button onClick={() => scrollToSection("services")} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600">Services</button>
            <button onClick={() => scrollToSection("tours")} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600">Tours</button>
            <button onClick={() => scrollToSection("testimonials")} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600">Reviews</button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600">Contact</button>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4" onClick={() => scrollToSection("contact")}>
              Book Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
