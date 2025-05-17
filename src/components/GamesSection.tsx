
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const GamesSection = () => {
  const games = [
    { title: "PUBG Mobile", hours: "1000+ hrs" },
    { title: "Genshin Impact", hours: "720+ hrs" },
    { title: "Rocket League", hours: "320+ hrs" },
    { title: "Minecraft", hours: "300+ hrs" },
    { title: "War Thunder", hours: "260+ hrs" },
    { title: "Rules of Survival", hours: "200+ hrs" },
    { title: "Forza Horizon 5", hours: "100+ hrs" },
    { title: "Just Cause 3", hours: "60+ hrs" },
    { title: "Fall Guys", hours: "50+ hrs" },
    { title: "Valorant", hours: "40+ hrs" },
    { title: "Palworld", hours: "40+ hrs" },
    { title: "Wuthering Waves", hours: "40+ hrs" },
    { title: "Strinova", hours: "40+ hrs" },
    { title: "The Finals", hours: "30+ hrs" },
    { title: "Battlefield 1", hours: "15+ hrs" },
    { title: "Fortnite OG", hours: "10+ hrs" },
    { title: "Call of Duty: Warzone", hours: "10+ hrs" },
    { title: "Battlefield V", hours: "10+ hrs" },
    { title: "Overwatch 2", hours: "5+ hrs" },
    { title: "Counter-Strike", hours: "5+ hrs" }
  ];

  return (
    <section id="games" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#10b981,transparent_70%)] opacity-10" />
      
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="mb-4">Top Games I've Played</h2>
          <p className="text-muted-foreground">
            Games that have consumed my time and fueled my passion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {games.map((game, index) => (
            <div 
              key={index}
              className="group relative transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Card className="border border-border/50 bg-card/30 backdrop-blur-sm h-full overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg glitch-text">{game.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge 
                    variant="secondary" 
                    className="group-hover:bg-green-800/30 transition-colors"
                  >
                    {game.hours}
                  </Badge>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
