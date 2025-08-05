import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent"></div>
              <span className="text-xl font-bold">Vista Shop</span>
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              Your premier destination for quality products and exceptional shopping experience. 
              Join thousands of satisfied customers worldwide.
            </p>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Stay updated with our latest offers</h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                />
                <Button variant="secondary">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-background transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Size Guide</a></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Fashion</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Electronics</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Home & Decor</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Sports & Fitness</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Beauty</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Accessories</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2024 Vista Shop. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-background/60">Follow us:</span>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-background/60 hover:text-background hover:bg-background/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-background/60 hover:text-background hover:bg-background/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-background/60 hover:text-background hover:bg-background/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-background/60 hover:text-background hover:bg-background/10">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;