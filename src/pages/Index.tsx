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
                <div className="flex flex-col">
                  <span className="font-bold text-lg">FC Bayern München</span>
                  <span className="text-sm opacity-80">Fanclub Emertsham</span>
                </div>
              </div>
              <p className="text-primary-foreground/80">
                Bayerns leidenschaftlichster Fanclub seit 2009 - dahoam im Besenwirt Emertsham.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Schnellzugriff</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#home" className="hover:text-primary-foreground transition-smooth">Home</a></li>
                <li><a href="#announcements" className="hover:text-primary-foreground transition-smooth">Neuigkeiten</a></li>
                <li><a href="#about" className="hover:text-primary-foreground transition-smooth">Über uns</a></li>
                <li><a href="#events" className="hover:text-primary-foreground transition-smooth">Termine</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Besenwirt Emertsham</h3>
              <div className="text-primary-foreground/80 space-y-2">
                <p>info@fcb-emertsham.de</p>
                <p>+49 9404 1234 567</p>
                <p>Emertsham, Bayern</p>
                <p className="text-sm italic">Jeden Spieltag geöffnet!</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 FC Bayern München Fanclub Emertsham. Mia san mia!</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
