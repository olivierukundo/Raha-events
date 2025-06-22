
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, Star, Phone, Mail, Instagram, Facebook } from "lucide-react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Tours from "@/components/Tours";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Calendar className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">Raha Events</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
            <a href="#tours" className="text-gray-700 hover:text-primary transition-colors">Tours</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Book Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <Services />
      
      {/* Tours Section */}
      <Tours />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Calendar className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">Raha Events</span>
              </div>
              <p className="text-gray-300 mb-4">
                Creating unforgettable experiences across Rwanda. From dream weddings to exceptional tours, 
                we make your special moments extraordinary.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Wedding Planning</li>
                <li>Corporate Events</li>
                <li>Private Parties</li>
                <li>Rwanda Tours</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+250 XXX XXX XXX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@rahaevents.rw</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Kigali, Rwanda</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Raha Events. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
