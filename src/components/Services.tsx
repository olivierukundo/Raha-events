
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Building2, Camera } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Wedding Planning",
      description: "Complete wedding planning from intimate ceremonies to grand celebrations",
      features: ["Venue Selection", "Decoration", "Catering", "Photography"],
      color: "bg-pink-100 text-pink-700"
    },
    {
      icon: Users,
      title: "Private Parties",
      description: "Birthday parties, anniversaries, and special celebrations",
      features: ["Theme Design", "Entertainment", "Catering", "Coordination"],
      color: "bg-purple-100 text-purple-700"
    },
    {
      icon: Building2,
      title: "Corporate Events",
      description: "Professional events, conferences, and team building activities",
      features: ["Venue Management", "AV Setup", "Catering", "Logistics"],
      color: "bg-blue-100 text-blue-700"
    },
    {
      icon: Camera,
      title: "Event Photography",
      description: "Professional photography and videography for all events",
      features: ["Photo Sessions", "Video Coverage", "Editing", "Albums"],
      color: "bg-green-100 text-green-700"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Event Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in creating memorable events that reflect your unique style and vision
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto rounded-full ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-center">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="mr-2 mb-2">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
