import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Heart, Mail, Phone, MapPin,
  Facebook, Twitter, Instagram, Linkedin
} from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">Hope for Africa</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Transforming lives across Africa through sustainable programs that provide 
              nutrition, education, and healthcare to children in need.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <Button
                  key={idx}
                  size="sm"
                  variant="ghost"
                  className="text-background hover:text-primary hover:bg-background/10 p-2"
                >
                  <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2 text-background/80">
              {["About Us", "Our Programs", "Impact Stories", "Donate Now", "Volunteer", "News & Updates"].map((text, i) => (
                <li key={i}>
                  <a href={`#${text.toLowerCase().replace(/ /g, '')}`} className="hover:text-primary transition-colors">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Support</h3>
            <ul className="space-y-2 text-background/80">
              {["FAQ", "Contact Us", "Financial Reports", "Privacy Policy", "Terms of Service", "Careers"].map((item, i) => (
                <li key={i}>
                  <a href={`#${item.toLowerCase().replace(/ /g, '')}`} className="hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Stay Connected</h3>

            {/* Contact Info */}
            <div className="space-y-3 text-background/80 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Hope Street, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@hopeforafrica.org</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <p className="text-sm text-background/80">Get updates on our impact:</p>
              <div className="flex space-x-2">
                <Input
                  placeholder="Your email"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                />
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-background/20 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-background/80 text-sm">
              © 2025 Hope for Africa. All rights reserved.
            </p>
            <p className="text-background/60 text-xs mt-1">
              Registered Charity #123456789 | Tax ID: 12-3456789
            </p>
          </div>

          <div className="flex items-center space-x-6 text-xs text-background/60">
            {["GuideStar Gold Seal", "Charity Navigator 4★", "BBB Accredited"].map((text, i) => (
              <div key={i} className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-success rounded-full" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
          <p className="text-center text-sm text-background/90">
            <strong>Emergency Response:</strong> For urgent humanitarian crises, call our 24/7 hotline:
            <a href="tel:+254112163432" className="text-primary font-semibold ml-1">+254 700 123 456</a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;