import { Button } from "@/components/ui/button";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import Heart from "lucide-react/dist/esm/icons/heart";
import heroImage from "@/assets/top.jpg";
<img
  src={heroImage}
  alt="Children in Africa"
  className="w-full h-full object-cover block"
/>

const HeroSection = () => {
  const scrollToDonate = () => {
    document.getElementById("donate-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Children in Africa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center lg:text-left max-w-6xl">
        <div className="lg:w-2/3">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Every Child Deserves{" "}
            <span className="block text-primary-soft">Hope & Nutrition</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
            Join us in transforming lives across Africa. Your donation provides
            essential nutrition, education, and healthcare to children who need it most.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-compassion hover:bg-compassion/90 text-compassion-foreground px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
              onClick={scrollToDonate}
            >
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg font-semibold transition-all duration-300"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Bitcoin Donation */}
          <div className="mt-6 text-left bg-black/30 p-4 rounded-lg text-primary-foreground backdrop-blur-sm">
            <p className="text-sm md:text-base">
              Prefer crypto? Send your donation via Bitcoin to:
            </p>
            <p className="text-sm md:text-base font-mono text-accent break-words mt-1">
              11a1esowhJJ4BAY2sEdRA5KZ8pZAPYTpH
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 mt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">50K+</div>
              <div className="text-primary-foreground/80">Children Fed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">200+</div>
              <div className="text-primary-foreground/80">Communities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">15+</div>
              <div className="text-primary-foreground/80">Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Down Arrow Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground animate-bounce">
        <ArrowRight className="h-6 w-6 rotate-90" />
      </div>
    </section>
  );
};

export default HeroSection;
