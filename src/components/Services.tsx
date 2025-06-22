
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Camera, MapPin } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Wedding Planning",
      description: "Create your perfect day with our comprehensive wedding planning services. From venue selection to catering coordination.",
      features: ["Venue Selection", "Catering Coordination", "Decoration & Design", "Photography Coordination"]
    },
    {
      icon: Users,
      title: "Corporate Events",
      description: "Professional event management for conferences, team building, and corporate celebrations.",
      features: ["Conference Management", "Team Building Activities", "Corporate Parties", "Product Launches"]
    },
    {
      icon: Camera,
      title: "Private Parties",
      description: "Celebrate life's special moments with expertly planned birthday parties, anniversaries, and gatherings.",
      features: ["Birthday Celebrations", "Anniversary Parties", "Family Gatherings", "Social Events"]
    },
    {
      icon: MapPin,
      title: "Rwanda Tours",
      description: "Discover the beauty of Rwanda with our guided tours to national parks, cultural sites, and scenic locations.",
      features: ["Gorilla Trekking", "Cultural Tours", "City Tours", "Adventure Packages"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we make every event extraordinary
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
