import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      
      <div className="container relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Discover Amazing Products
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Shop with Confidence
          </span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90">
          Explore our curated collection of premium products across fashion, electronics, 
          home decor, and more. Quality guaranteed, fast shipping worldwide.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Shop Now
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-black">
            Browse Categories
          </Button>
        </div>
        
        <div className="mt-12 flex justify-center gap-8 text-white/80">
          <div className="text-center">
            <div className="text-2xl font-bold">50K+</div>
            <div className="text-sm">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">10K+</div>
            <div className="text-sm">Products</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">99%</div>
            <div className="text-sm">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;