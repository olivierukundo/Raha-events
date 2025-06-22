
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-primary/10 via-white to-secondary/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Creating <span className="text-primary">Unforgettable</span> Moments in Rwanda
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From dream weddings to extraordinary tours across Rwanda's breathtaking landscapes. 
              Let Raha Events turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4" onClick={() => scrollToSection("contact")}>
                Plan Your Event
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4" onClick={() => scrollToSection("tours")}>
                Explore Tours
                <MapPin className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
              <div className="w-4/5 h-4/5 bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-600">Happy Events</div>
                  <div className="text-2xl font-bold text-secondary mt-4">100+</div>
                  <div className="text-gray-600">Tours Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
