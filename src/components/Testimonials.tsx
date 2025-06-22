
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah & John",
      event: "Wedding",
      text: "Raha Events made our dream wedding come true! Every detail was perfect, from the beautiful decorations to the seamless coordination.",
      rating: 5,
      location: "Kigali"
    },
    {
      name: "David M.",
      event: "Gorilla Tour",
      text: "The gorilla trekking experience was incredible! The team was professional and knowledgeable about Rwanda's wildlife.",
      rating: 5,
      location: "Volcanoes National Park"
    },
    {
      name: "Maria L.",
      event: "Corporate Event",
      text: "Our company retreat was flawlessly organized. The team building activities and venues were outstanding.",
      rating: 5,
      location: "Lake Kivu"
    },
    {
      name: "James & Anne",
      event: "Anniversary",
      text: "They helped us celebrate our 25th anniversary in the most beautiful way. Highly recommend their services!",
      rating: 5,
      location: "Kigali"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.event} • {testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
