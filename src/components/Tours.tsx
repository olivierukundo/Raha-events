
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Star } from "lucide-react";

const Tours = () => {
  const tours = [
    {
      title: "Gorilla Trekking Experience",
      location: "Volcanoes National Park",
      duration: "Full Day",
      groupSize: "8 people max",
      price: "$600",
      rating: 4.9,
      description: "Meet the magnificent mountain gorillas in their natural habitat. An unforgettable wildlife experience.",
      highlights: ["Professional Guide", "Permits Included", "Transportation", "Lunch Provided"]
    },
    {
      title: "Lake Kivu Scenic Tour",
      location: "Lake Kivu",
      duration: "2 Days",
      groupSize: "12 people max",
      price: "$350",
      rating: 4.8,
      description: "Relax by Rwanda's largest lake with boat rides, swimming, and beautiful lakeside accommodations.",
      highlights: ["Boat Rides", "Swimming", "Lakeside Lodge", "Local Cuisine"]
    },
    {
      title: "Kigali City Explorer",
      location: "Kigali",
      duration: "Half Day",
      groupSize: "15 people max",
      price: "$80",
      rating: 4.7,
      description: "Discover Rwanda's vibrant capital city, its history, culture, and modern developments.",
      highlights: ["Genocide Memorial", "Local Markets", "Cultural Sites", "City Panorama"]
    },
    {
      title: "Nyungwe Forest Adventure",
      location: "Nyungwe National Park",
      duration: "3 Days",
      groupSize: "10 people max",
      price: "$450",
      rating: 4.9,
      description: "Explore ancient rainforests, spot primates, and walk the famous canopy bridge.",
      highlights: ["Canopy Walk", "Primate Tracking", "Bird Watching", "Nature Trails"]
    }
  ];

  return (
    <section id="tours" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Rwanda Tours</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the Land of a Thousand Hills with our expertly crafted tour experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tours.map((tour, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{tour.price}</Badge>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-sm">{tour.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-lg">{tour.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">{tour.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {tour.location}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    {tour.groupSize}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2">Tour Highlights:</h4>
                  <ul className="space-y-1">
                    {tour.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-xs text-gray-500 flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Book Tour
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
