import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Trophy } from "lucide-react";

const announcements = [
  {
    id: 1,
    title: "Victory Celebration - Champions League Win!",
    description: "Join us for the biggest celebration of the season! We'll be gathering at Marienplatz to celebrate Bayern's incredible Champions League victory.",
    date: "2024-05-28",
    type: "celebration",
    urgent: true,
  },
  {
    id: 2,
    title: "Away Match Bus Trip to Dortmund",
    description: "Secure your spot on the official fanclub bus to the away match against Borussia Dortmund. Limited seats available.",
    date: "2024-06-15",
    type: "travel",
    urgent: false,
  },
  {
    id: 3,
    title: "Annual General Meeting 2024",
    description: "All members are invited to attend our annual general meeting. We'll discuss club activities, budget, and upcoming events.",
    date: "2024-07-20",
    type: "meeting",
    urgent: false,
  },
  {
    id: 4,
    title: "New Season Merchandise Available",
    description: "Get your hands on the latest Bayern München and fanclub merchandise. Special member discounts available!",
    date: "2024-07-01",
    type: "merchandise",
    urgent: false,
  },
  {
    id: 5,
    title: "Summer BBQ & Friendly Match Viewing",
    description: "Join us for our annual summer BBQ while watching Bayern's friendly matches. Family-friendly event with activities for kids.",
    date: "2024-08-10",
    type: "social",
    urgent: false,
  },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "celebration":
      return <Trophy className="w-4 h-4" />;
    case "travel":
      return <Users className="w-4 h-4" />;
    default:
      return <Calendar className="w-4 h-4" />;
  }
};

const getTypeBadge = (type: string, urgent: boolean) => {
  if (urgent) {
    return <Badge variant="destructive">Urgent</Badge>;
  }
  
  const variants: { [key: string]: "default" | "secondary" } = {
    celebration: "default",
    travel: "secondary",
    meeting: "secondary",
    merchandise: "default",
    social: "secondary",
  };
  
  return <Badge variant={variants[type] || "secondary"}>{type}</Badge>;
};

const Announcements = () => {
  return (
    <section id="announcements" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest News</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay up to date with all the latest announcements, events, and club activities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcements.map((announcement) => (
            <Card 
              key={announcement.id} 
              className="hover:shadow-primary transition-smooth cursor-pointer group"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-primary">
                    {getTypeIcon(announcement.type)}
                    <span className="text-sm font-medium">
                      {new Date(announcement.date).toLocaleDateString()}
                    </span>
                  </div>
                  {getTypeBadge(announcement.type, announcement.urgent)}
                </div>
                <CardTitle className="group-hover:text-primary transition-smooth">
                  {announcement.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {announcement.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Announcements;