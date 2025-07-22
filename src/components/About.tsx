import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Calendar, Trophy, Target, Globe, Home } from "lucide-react";
import besenwirtImage from "@/assets/besenwirt-interior.jpg";

const stats = [
  { icon: Users, label: "Active Members", value: "350+" },
  { icon: Calendar, label: "Years Active", value: "15" },
  { icon: Trophy, label: "Trophies Celebrated", value: "42" },
  { icon: Globe, label: "Countries", value: "8" },
];

const values = [
  {
    icon: Heart,
    title: "Leidenschaft",
    description: "Bayern München ist unser Leben. Diese Leidenschaft verbindet uns alle im Besenwirt."
  },
  {
    icon: Users,
    title: "Gemeinschaft", 
    description: "Wir sind mehr als nur Fans - wir sind eine Familie aus Emertsham und Umgebung."
  },
  {
    icon: Home,
    title: "Tradition",
    description: "Der Besenwirt ist unser Zuhause, wo bayerische Gemütlichkeit und Fußballbegeisterung verschmelzen."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Über unseren Verein</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seit 2009 bringen wir leidenschaftliche Bayern-Fans in Emertsham zusammen. 
            Unser Zuhause ist der Besenwirt - hier wird jedes Spiel zum Erlebnis.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <Card className="p-6 hover:shadow-primary transition-smooth">
                <CardContent className="flex flex-col items-center p-0">
                  <stat.icon className="w-8 h-8 text-primary mb-3" />
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">Unsere Geschichte</h3>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Der FC Bayern München Fanclub Emertsham wurde 2009 von einer Gruppe begeisterter 
                Bayern-Fans gegründet. Was als kleines Treffen im örtlichen Besenwirt begann, 
                ist zu einer der aktivsten Fangemeinschaften in Bayern geworden.
              </p>
              <p>
                Unser Herz schlägt im Besenwirt - hier schauen wir jedes Spiel gemeinsam, 
                feiern Siege und stehen auch in schweren Zeiten zusammen. Die gemütliche 
                Atmosphäre macht jeden Spieltag zu einem besonderen Erlebnis.
              </p>
              <p>
                Von Emertsham aus organisieren wir Fahrten nach München, besuchen Heimspiele 
                in der Allianz Arena und pflegen die Traditionen unseres geliebten Vereins. 
                Ob langjähriger Fan oder Neuling - bei uns findet jeder ein Zuhause!
              </p>
            </div>
            <div className="mt-8">
              <Button variant="hero" size="lg">
                Mitglied werden
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-primary">
              <img 
                src={besenwirtImage} 
                alt="Besenwirt Interior" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-primary-foreground">
                <h4 className="font-bold text-lg">Unser Besenwirt</h4>
                <p className="text-sm opacity-90">Das Herz unseres Fanclubs</p>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Unsere Werte</h3>
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-primary transition-smooth">
                <CardContent className="flex items-start gap-4 p-0">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-primary rounded-2xl p-12 text-primary-foreground">
          <h3 className="text-3xl font-bold mb-4">Werde Teil der Bayern-Familie!</h3>
          <p className="text-xl mb-8 opacity-90">
            Erlebe die Faszination Bayern München gemeinsam mit uns im Besenwirt Emertsham. 
            Hier findest du echte Freunde und unvergessliche Fußballmomente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Mitglied werden
            </Button>
            <Button variant="outline" size="lg">
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;