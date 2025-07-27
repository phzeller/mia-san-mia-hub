import { Button } from "@/components/ui/button";
import heroImage from "@/assets/emertsham-bayern-hero.jpg";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAnnouncements = () => {
    const element = document.getElementById("announcements");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
      
      <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Mia San
            <span className="block text-accent">Mia</span>
          </h1>
          <div className="mb-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground/90 mb-2">
              FC Bayern München Fanclub Emertsham
            </h2>
            <p className="text-lg md:text-xl text-accent font-medium">
              Dahoam im Besenwirt • Since 2009
            </p>
          </div>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
            Welcome to Bavaria's most passionate fanclub in the heart of Emertsham. 
            Join us at the Besenwirt for every match, celebration, and unforgettable Bayern moment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="px-8 py-4 text-lg">
              Become a Member
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/70">
        <button
          onClick={scrollToAnnouncements}
          className="flex flex-col items-center animate-bounce hover:text-primary-foreground transition-smooth"
        >
          <span className="text-sm mb-2">Scroll down</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;