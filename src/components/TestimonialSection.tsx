import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Star from "lucide-react/dist/esm/icons/star";
import Quote from "lucide-react/dist/esm/icons/quote";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Amara",
      age: 12,
      location: "Kenya",
      quote: "Thanks to the school feeding program, I can focus on my studies instead of being hungry. Now I dream of becoming a teacher to help other children like me.",
      avatar: "A",
      stars: 5,
    },
    {
      name: "Dr. Sarah Mbeki",
      role: "Local Healthcare Worker",
      location: "Ghana",
      quote: "The medical supplies and nutrition programs have reduced child mortality in our community by 40%. These donations truly save lives.",
      avatar: "SM",
      stars: 5,
    },
    {
      name: "James Mutua",
      role: "Teacher",
      location: "Tanzania",
      quote: "When children receive proper nutrition and school supplies, their performance improves dramatically. I've seen students transform before my eyes.",
      avatar: "JM",
      stars: 5,
    },
    {
      name: "Grace",
      age: 10,
      location: "Uganda",
      quote: "I love going to school now because I have books, pencils, and a full stomach. My favorite subject is mathematics, and I want to be an engineer.",
      avatar: "G",
      stars: 5,
    },
    {
      name: "Mary Ochieng",
      role: "Community Leader",
      location: "Kenya",
      quote: "This organization doesn't just provide aid – they empower our communities. They train local teachers and support sustainable programs.",
      avatar: "MO",
      stars: 5,
    },
    {
      name: "Emmanuel",
      age: 14,
      location: "Rwanda",
      quote: "Before the nutrition program, I was too weak to walk to school. Now I'm strong, healthy, and the best student in my class.",
      avatar: "E",
      stars: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Voices of <span className="text-primary">Hope</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from the children, families, and communities whose lives have been
            transformed by your generosity and support.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />

                {/* Stars */}
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <Avatar className="border-2 border-primary/20">
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                      {testimonial.age && (
                        <span className="text-sm text-muted-foreground ml-2">
                          (Age {testimonial.age})
                        </span>
                      )}
                    </div>
                    {testimonial.role && (
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    )}
                    <div className="text-sm text-primary font-medium">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="p-4">

            <h3 className="text-2xl font-bold text-foreground mb-4">
              Your Story Could Be Next
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Every donation creates a new story of hope, transformation, and resilience.
              Join thousands of donors who are changing lives across Africa.
            </p>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">
                of beneficiaries report improved quality of life
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
