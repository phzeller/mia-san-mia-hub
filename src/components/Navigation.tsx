import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">FCB</span>
            </div>
            <span className="font-bold text-lg">Bayern Fanclub</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("announcements")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              News
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Events
            </button>
            <Button variant="default" size="sm">
              Join Club
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t animate-fade-in">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left py-2 text-foreground hover:text-primary transition-smooth"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("announcements")}
                className="text-left py-2 text-foreground hover:text-primary transition-smooth"
              >
                News
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left py-2 text-foreground hover:text-primary transition-smooth"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("events")}
                className="text-left py-2 text-foreground hover:text-primary transition-smooth"
              >
                Events
              </button>
              <div className="pt-2">
                <Button variant="default" size="sm" className="w-full">
                  Join Club
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;