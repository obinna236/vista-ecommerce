import { Button } from "@/components/ui/button";
import { ShoppingCart, Search, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent"></div>
            <span className="text-xl font-bold">Vista Shop</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              Categories
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              Deals
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              New Arrivals
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              className="flex-1 bg-transparent placeholder:text-muted-foreground focus:outline-none"
              placeholder="Search products..."
              type="search"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
              3
            </span>
          </Button>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;