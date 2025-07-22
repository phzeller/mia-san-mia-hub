import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Announcements from "@/components/Announcements";
import About from "@/components/About";
import Events from "@/components/Events";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Announcements />
        <About />
        <Events />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">FCB</span>
                </div>
                <span className="font-bold text-lg">Bayern Fanclub</span>
              </div>
              <p className="text-primary-foreground/80">
                The most passionate FC Bayern München supporters, bringing fans together since 2009.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#home" className="hover:text-primary-foreground transition-smooth">Home</a></li>
                <li><a href="#announcements" className="hover:text-primary-foreground transition-smooth">News</a></li>
                <li><a href="#about" className="hover:text-primary-foreground transition-smooth">About</a></li>
                <li><a href="#events" className="hover:text-primary-foreground transition-smooth">Events</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Info</h3>
              <div className="text-primary-foreground/80 space-y-2">
                <p>info@bayernfanclub.com</p>
                <p>+49 89 1234 5678</p>
                <p>München, Germany</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Bayern Fanclub. All rights reserved. Mia san mia!</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
