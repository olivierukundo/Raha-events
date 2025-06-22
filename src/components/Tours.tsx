
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Star } from "lucide-react";

const Tours = () => {
  const tours = [
    {
      title: "Volcanoes National Park",
      description: "Gorilla trekking and golden monkey encounters",
      duration: "3 Days",
      groupSize: "8-12 people",
      rating: 4.9,
      price: "From $850",
      highlights: ["Gorilla Trekking", "Golden Monkeys", "Cultural Village"]
    },
    {
      title: "Lake Kivu Experience",
      description: "Relaxing lakeside retreat with water activities",
      duration: "2 Days",
      groupSize: "6-15 people",
      rating: 4.8,
      price: "From $420",
      highlights: ["Boat Cruise", "Island Hopping", "Coffee Plantation"]
    },
    {
      title: "Akagera National Park",
      description: "Big Five safari adventure in Rwanda's savanna",
      duration: "2 Days",
      groupSize: "4-10 people",
      rating: 4.7,
      price: "From $650",
      highlights: ["Game Drives", "Boat Safari", "Bird Watching"]
    },
    {
      title: "Kigali City Tour",
      description: "Discover Rwanda's vibrant capital and its history",
      duration: "1 Day",
      groupSize: "5-20 people",
      rating: 4.6,
      price: "From $85",
      highlights: ["Genocide Memorial", "Markets", "Cultural Sites"]
    }
  ];

  return (
    <section id="tours" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Discover Rwanda</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the beauty of the Land of a Thousand Hills with our carefully crafted tour packages
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tours.map((tour, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg leading-tight">{tour.title}</CardTitle>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{tour.rating}</span>
                  </div>
                </div>
                <CardDescription>{tour.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {tour.highlights.map((highlight, idx) => (
                    <Badge key={idx} variant="outline" className="mr-1 mb-1 text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between items-center pt-4">
                  <div className="text-lg font-bold text-primary">{tour.price}</div>
                  <Button size="sm" variant="outline">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
