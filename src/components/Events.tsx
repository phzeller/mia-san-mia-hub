import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Clock, Users, Plane, Tv } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Champions League Final Viewing Party",
    description: "Join us for the biggest match of the season! Watch Bayern take on the competition in style with food, drinks, and incredible atmosphere.",
    date: "2024-06-01",
    time: "20:00",
    location: "Sports Bar Central, Downtown",
    type: "viewing",
    category: "upcoming",
    attendees: 85,
    maxAttendees: 100,
  },
  {
    id: 2,
    title: "Away Trip to Barcelona",
    description: "3-day trip to Barcelona including match tickets, hotel accommodation, and city tour. Experience Camp Nou like never before!",
    date: "2024-09-15",
    time: "06:00",
    location: "Barcelona, Spain",
    type: "travel",
    category: "upcoming",
    attendees: 45,
    maxAttendees: 50,
  },
  {
    id: 3,
    title: "Oktoberfest Meetup",
    description: "Celebrate Oktoberfest with fellow Bayern fans! Traditional Bavarian food, beer, and live music in the heart of Munich.",
    date: "2024-09-22",
    time: "14:00",
    location: "Theresienwiese, Munich",
    type: "social",
    category: "upcoming",
    attendees: 120,
    maxAttendees: 150,
  },
  {
    id: 4,
    title: "Bundesliga Season Opener",
    description: "Kicked off the 2024/25 season with an incredible viewing party. Great atmosphere and even better result!",
    date: "2024-08-18",
    time: "15:30",
    location: "Bayern Pub, City Center",
    type: "viewing",
    category: "past",
    attendees: 95,
    maxAttendees: 100,
  },
  {
    id: 5,
    title: "Summer BBQ & Friendly Matches",
    description: "Annual summer gathering with BBQ, games, and watching Bayern's pre-season friendlies. Perfect family event!",
    date: "2024-07-28",
    time: "12:00",
    location: "Riverside Park",
    type: "social",
    category: "past",
    attendees: 180,
    maxAttendees: 200,
  },
  {
    id: 6,
    title: "Youth Team Development Day",
    description: "Supporting the next generation of Bayern talents with coaching clinics and youth match viewing.",
    date: "2024-07-15",
    time: "10:00",
    location: "Local Football Academy",
    type: "community",
    category: "past",
    attendees: 65,
    maxAttendees: 80,
  }
];

const getEventIcon = (type: string) => {
  switch (type) {
    case "viewing":
      return <Tv className="w-4 h-4" />;
    case "travel":
      return <Plane className="w-4 h-4" />;
    case "social":
      return <Users className="w-4 h-4" />;
    default:
      return <Calendar className="w-4 h-4" />;
  }
};

const getEventBadge = (type: string) => {
  const badges: { [key: string]: { variant: "default" | "secondary" | "outline", label: string } } = {
    viewing: { variant: "default", label: "Match Viewing" },
    travel: { variant: "outline", label: "Travel" },
    social: { variant: "secondary", label: "Social" },
    community: { variant: "outline", label: "Community" },
  };
  
  const badge = badges[type] || { variant: "secondary", label: type };
  return <Badge variant={badge.variant}>{badge.label}</Badge>;
};

const EventCard = ({ event, isPast = false }: { event: any, isPast?: boolean }) => (
  <Card className={`hover:shadow-primary transition-smooth ${isPast ? 'opacity-75' : ''}`}>
    <CardHeader>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-primary">
          {getEventIcon(event.type)}
          <span className="text-sm font-medium">
            {new Date(event.date).toLocaleDateString()}
          </span>
        </div>
        {getEventBadge(event.type)}
      </div>
      <CardTitle className="text-xl">{event.title}</CardTitle>
      <CardDescription>{event.description}</CardDescription>
    </CardHeader>
    <CardContent className="space-y-3">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Clock className="w-4 h-4" />
        <span>{event.time}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="w-4 h-4" />
        <span>{event.location}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Users className="w-4 h-4" />
        <span>{event.attendees}/{event.maxAttendees} attendees</span>
      </div>
      {!isPast && (
        <div className="pt-2">
          <Button 
            variant={event.attendees >= event.maxAttendees ? "secondary" : "default"} 
            className="w-full"
            disabled={event.attendees >= event.maxAttendees}
          >
            {event.attendees >= event.maxAttendees ? "Event Full" : "Join Event"}
          </Button>
        </div>
      )}
    </CardContent>
  </Card>
);

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  
  const upcomingEvents = events.filter(event => event.category === "upcoming");
  const pastEvents = events.filter(event => event.category === "past");

  return (
    <section id="events" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Events Calendar</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us for match viewings, trips, social events, and community activities. 
            There's always something happening in the Bayern family!
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
            {upcomingEvents.length === 0 && (
              <div className="text-center py-12">
                <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg text-muted-foreground">No upcoming events scheduled.</p>
                <p className="text-sm text-muted-foreground">Check back soon for new events!</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} isPast />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <div className="bg-card rounded-2xl p-8 border">
            <h3 className="text-2xl font-bold mb-4">Have an Event Idea?</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for new ways to bring the Bayern community together. 
              Share your ideas with us!
            </p>
            <Button variant="default">Suggest an Event</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;