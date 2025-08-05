import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import fashionImage from "@/assets/category-fashion.jpg";
import electronicsImage from "@/assets/category-electronics.jpg";
import homeImage from "@/assets/category-home.jpg";
import sportsImage from "@/assets/category-sports.jpg";

const categories = [
  {
    id: 1,
    name: "Fashion",
    description: "Trendy clothing and accessories",
    image: fashionImage,
    productCount: "2,500+ items"
  },
  {
    id: 2,
    name: "Electronics",
    description: "Latest gadgets and tech",
    image: electronicsImage,
    productCount: "1,800+ items"
  },
  {
    id: 3,
    name: "Home & Decor",
    description: "Beautiful home essentials",
    image: homeImage,
    productCount: "3,200+ items"
  },
  {
    id: 4,
    name: "Sports & Fitness",
    description: "Active lifestyle gear",
    image: sportsImage,
    productCount: "1,200+ items"
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated collections designed to meet all your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 bg-background">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    {category.description}
                  </p>
                  <p className="text-sm font-medium text-primary mb-4">
                    {category.productCount}
                  </p>
                  <Button variant="shop" className="w-full">
                    Explore {category.name}
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

export default Categories;