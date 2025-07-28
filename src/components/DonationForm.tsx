import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

// Optimized Lucide icon imports
import HeartIcon from 'lucide-react/dist/esm/icons/heart.js';
import UtensilsIcon from 'lucide-react/dist/esm/icons/utensils.js';
import GraduationCapIcon from 'lucide-react/dist/esm/icons/graduation-cap.js';
import ShieldIcon from 'lucide-react/dist/esm/icons/shield.js';
import GiftIcon from 'lucide-react/dist/esm/icons/gift.js';
import SmileIcon from 'lucide-react/dist/esm/icons/smile.js';
import DropletIcon from 'lucide-react/dist/esm/icons/droplet.js';
import ShirtIcon from 'lucide-react/dist/esm/icons/shirt.js';

type DonationType = "one-time" | "monthly";

interface DonationOption {
  amount: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  impact: string;
  bgColor: string;
  iconColor: string;
  selectedColor: string;
  popular?: boolean;
}

const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState<DonationType>("one-time");
  const { toast } = useToast();

  const donationOptions: DonationOption[] = [
    {
      amount: 1,
      icon: DropletIcon,
      title: "Clean Water",
      description: "Provides one bottle of clean water",
      impact: "Hydration for a child",
      bgColor: "bg-blue-100 hover:bg-blue-200",
      iconColor: "text-blue-600",
      selectedColor: "bg-blue-600/10 ring-blue-500/30"
    },
    {
      amount: 5,
      icon: ShirtIcon,
      title: "Clothing",
      description: "Provides warm clothing for winter",
      impact: "Protection from elements",
      bgColor: "bg-purple-100 hover:bg-purple-200",
      iconColor: "text-purple-600",
      selectedColor: "bg-purple-600/10 ring-purple-500/30"
    },
    {
      amount: 10,
      icon: SmileIcon,
      title: "Love & Support",
      description: "Provides daily basics",
      impact: "Daily essentials",
      bgColor: "bg-pink-100 hover:bg-pink-200",
      iconColor: "text-pink-600",
      selectedColor: "bg-pink-600/10 ring-pink-500/30"
    },
    {
      amount: 20,
      icon: UtensilsIcon,
      title: "Feed a Child",
      description: "Provides nutritious meals for 1 week",
      impact: "1 week of meals",
      bgColor: "bg-orange-100 hover:bg-orange-200",
      iconColor: "text-orange-600",
      selectedColor: "bg-orange-600/10 ring-orange-500/30",
      popular: true
    },
    {
      amount: 50,
      icon: GraduationCapIcon,
      title: "Education Kit",
      description: "School supplies and books for 1 month",
      impact: "1 month of education",
      bgColor: "bg-green-100 hover:bg-green-200",
      iconColor: "text-green-600",
      selectedColor: "bg-green-600/10 ring-green-500/30"
    },
    {
      amount: 100,
      icon: ShieldIcon,
      title: "Healthcare Support",
      description: "Medical care and vitamins for 1 month",
      impact: "Essential healthcare",
      bgColor: "bg-red-100 hover:bg-red-200",
      iconColor: "text-red-600",
      selectedColor: "bg-red-600/10 ring-red-500/30"
    }
  ];

  const handleDonate = () => {
    const amount = selectedAmount || parseInt(customAmount);
    if (!amount || amount < 1) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a donation amount of at least $1.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Thank You! ❤️",
      description: `Your ${donationType === "monthly" ? "monthly" : ""} donation of $${amount} will make a real difference.`,
    });
  };

  return (
    <section id="donate-section" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Make Your <span className="text-primary">Impact Today</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose how you'd like to help. Every donation, no matter the size, creates meaningful change in a child's life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Donation Type Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-secondary/30 rounded-full p-1 flex backdrop-blur-sm">
              <Button
                variant={donationType === "one-time" ? "default" : "ghost"}
                onClick={() => setDonationType("one-time")}
                className="px-6 py-2 rounded-full"
              >
                One-time
              </Button>
              <Button
                variant={donationType === "monthly" ? "default" : "ghost"}
                onClick={() => setDonationType("monthly")}
                className="px-6 py-2 rounded-full"
              >
                Monthly
                <Badge className="ml-2 bg-primary text-primary-foreground">
                  2x Impact
                </Badge>
              </Button>
            </div>
          </div>

          {/* Donation Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {donationOptions.map((option) => {
              const IconComponent = option.icon;
              const isSelected = selectedAmount === option.amount;

              return (
                <div
                  key={option.amount}
                  className={`cursor-pointer transition-all duration-300 hover:scale-[1.02] rounded-xl p-1 ${
                    isSelected ? option.selectedColor + " shadow-lg" : option.bgColor
                  }`}
                  onClick={() => {
                    setSelectedAmount(option.amount);
                    setCustomAmount("");
                  }}
                >
                  <div className="bg-background/80 rounded-lg p-6 h-full backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-full ${option.iconColor} ${isSelected ? "bg-opacity-20" : "bg-opacity-10"} ${option.bgColor.replace('hover:', '')}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      {option.popular && (
                        <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                      )}
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground mb-2">
                      ${option.amount}
                      {donationType === "monthly" && <span className="text-sm font-normal text-muted-foreground">/month</span>}
                    </CardTitle>
                    <h3 className="font-semibold text-foreground mb-2">{option.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                    <div className="text-xs font-medium text-primary">Impact: {option.impact}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Custom Amount */}
          <div className="text-center mb-8">
            <p className="text-muted-foreground mb-4">Or enter a custom amount:</p>
            <div className="max-w-xs mx-auto">
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  className="pl-8 text-center text-lg py-6 border-0 bg-background/80 backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-primary/30"
                  min="1"
                />
              </div>
            </div>
          </div>

          {/* Impact Preview */}
          {(selectedAmount || customAmount) && (
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 mb-8 text-center backdrop-blur-sm">
              <div className="flex items-center justify-center mb-4">
                <HeartIcon className="h-8 w-8 text-primary mr-2" />
                <span className="text-2xl font-bold text-foreground">
                  Your ${selectedAmount || customAmount} {donationType === "monthly" ? "monthly " : ""}donation will:
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-blue-50/50 p-3 rounded-lg">
                  <div className="font-semibold text-foreground">Provide</div>
                  <div className="text-muted-foreground">
                    {Math.floor((selectedAmount || parseInt(customAmount) || 0 / 1)} bottles of clean water
                  </div>
                </div>
                <div className="bg-purple-50/50 p-3 rounded-lg">
                  <div className="font-semibold text-foreground">Clothe</div>
                  <div className="text-muted-foreground">
                    {Math.floor((selectedAmount || parseInt(customAmount) || 0 / 5)} children with warm clothing
                  </div>
                </div>
                <div className="bg-orange-50/50 p-3 rounded-lg">
                  <div className="font-semibold text-foreground">Feed</div>
                  <div className="text-muted-foreground">
                    {Math.floor((selectedAmount || parseInt(customAmount) || 0 / 3)} children for a week
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Donate Button */}
          <div className="text-center">
            <Button
              size="lg"
              onClick={handleDonate}
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary hover:to-primary text-primary-foreground px-12 py-6 text-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <HeartIcon className="mr-3 h-6 w-6" />
              Donate {selectedAmount || customAmount ? `$${selectedAmount || customAmount}` : ""}{" "}
              {donationType === "monthly" ? "Monthly" : "Now"}
            </Button>

            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p>🔒 Your donation is secure and encrypted</p>
              <p>📧 You'll receive a tax-deductible receipt via email</p>
              <p>❤️ 95% of your donation goes directly to children in need</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
