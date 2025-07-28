import { Card, CardContent } from "@/components/ui/card";
import { Utensils, GraduationCap, Heart, Home } from "lucide-react";
import educationImage from "@/assets/education-impact.jpg";
import nutritionImage from "@/assets/nutrition-impact.jpg";

const ImpactSection = () => {
  const impactStats = [
    {
      icon: Utensils,
      number: "2.3M",
      label: "Meals Provided",
      description: "Nutritious meals delivered to malnourished children",
      iconColor: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: GraduationCap,
      number: "85K",
      label: "Children Educated",
      description: "Access to quality education and learning materials",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Heart,
      number: "120K",
      label: "Medical Treatments",
      description: "Essential healthcare and medical interventions",
      iconColor: "text-rose-600",
      bgColor: "bg-rose-100"
    },
    {
      icon: Home,
      number: "450",
      label: "Safe Shelters",
      description: "Secure housing and protection for vulnerable children",
      iconColor: "text-yellow-600",
      bgColor: "bg-yellow-100"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Making a Real <span className="text-primary">Difference</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every donation creates lasting change. See how your contribution transforms lives 
            and builds stronger communities across Africa.
          </p>
        </div>

        {/* Impact Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${stat.bgColor} mb-4`}>
                    <Icon className={`h-8 w-8 ${stat.iconColor}`} />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Visual Impact: Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-md">
            <img
              src={educationImage}
              alt="Children learning"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-1">Education Changes Everything</h3>
              <p className="text-white/90">Quality education opens doors to brighter futures</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-foreground">
              Building Brighter Futures Through Education
            </h3>
            <p className="text-lg text-muted-foreground">
              Education breaks the cycle of poverty. Our programs offer more than books — they offer hope.
            </p>
            <ul className="space-y-3">
              {[
                "School supplies and uniforms for 1,000+ children annually",
                "Teacher training programs in 50+ schools",
                "Digital learning tools and technology access"
              ].map((point, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Visual Impact: Nutrition */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
          <div className="relative rounded-2xl overflow-hidden shadow-md lg:order-2">
            <img
              src={nutritionImage}
              alt="Children receiving food"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-600/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-1">Nutrition Saves Lives</h3>
              <p className="text-white/90">Every meal fuels a child's development</p>
            </div>
          </div>

          <div className="space-y-4 lg:order-1">
            <h3 className="text-3xl font-bold text-foreground">
              Fighting Malnutrition One Meal at a Time
            </h3>
            <p className="text-lg text-muted-foreground">
              Proper nutrition ensures healthy growth and a strong future. Your support feeds thousands.
            </p>
            <ul className="space-y-3">
              {[
                "Daily nutritious meals for 15,000+ children",
                "Vitamin supplements and nutrition therapy",
                "Community gardens and sustainable food programs"
              ].map((point, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-success rounded-full"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
