import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Calendar, Trophy, Target, Globe } from "lucide-react";

const stats = [
  { icon: Users, label: "Active Members", value: "350+" },
  { icon: Calendar, label: "Years Active", value: "15" },
  { icon: Trophy, label: "Trophies Celebrated", value: "42" },
  { icon: Globe, label: "Countries", value: "8" },
];

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We live and breathe Bayern München. Our love for the club runs deep and drives everything we do."
  },
  {
    icon: Users,
    title: "Community",
    description: "We're more than fans - we're a family. Together we support each other and our beloved team."
  },
  {
    icon: Target,
    title: "Loyalty",
    description: "Through victories and defeats, we stand by Bayern. Our loyalty never wavers, no matter the circumstances."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Our Club</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Founded by passionate Bayern supporters, we've been bringing fans together 
            for over 15 years to celebrate the greatest football club in the world.
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
            <h3 className="text-3xl font-bold mb-6">Our Story</h3>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Our fanclub was born in 2009 from the simple desire to watch Bayern München 
                matches together with fellow supporters. What started as a small group of friends 
                meeting in a local pub has grown into one of the most active international fan clubs.
              </p>
              <p>
                We organize trips to Munich for home matches, host viewing parties for every game, 
                and create a community where Bayern fans can connect, celebrate, and share their 
                passion for the greatest club in football history.
              </p>
              <p>
                Whether you're a lifelong supporter or new to the Bayern family, you'll find 
                a warm welcome and lifetime friendships in our club. Mia san mia - we are who we are!
              </p>
            </div>
            <div className="mt-8">
              <Button variant="hero" size="lg">
                Join Our Community
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Our Values</h3>
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
          <h3 className="text-3xl font-bold mb-4">Ready to Join the Bayern Family?</h3>
          <p className="text-xl mb-8 opacity-90">
            Experience the thrill of being part of something bigger. Join hundreds of passionate 
            Bayern supporters from around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Become a Member
            </Button>
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;