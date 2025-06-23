
import { Calendar, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Raha Events</span>
            </div>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Creating unforgettable experiences across Rwanda. From dream weddings to exceptional tours, 
              we make your special moments extraordinary.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li className="hover:text-white cursor-pointer transition-colors">Wedding Planning</li>
              <li className="hover:text-white cursor-pointer transition-colors">Corporate Events</li>
              <li className="hover:text-white cursor-pointer transition-colors">Private Parties</li>
              <li className="hover:text-white cursor-pointer transition-colors">Rwanda Tours</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm sm:text-base">+250 788 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm sm:text-base">info@rahaevents.rw</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm sm:text-base">Kigali, Rwanda</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="text-sm sm:text-base">&copy; 2024 Raha Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
