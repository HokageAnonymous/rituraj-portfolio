
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const GamesSection = () => {
  const games = [
    { title: "PUBG Mobile", hours: "1000+ hrs", tier: "Platinum" },
    { title: "Genshin Impact", hours: "720+ hrs", tier: "Platinum" },
    { title: "Rocket League", hours: "320+ hrs", tier: "Gold" },
    { title: "Minecraft", hours: "300+ hrs", tier: "Gold" },
    { title: "War Thunder", hours: "260+ hrs", tier: "Gold" },
    { title: "Rules of Survival", hours: "200+ hrs", tier: "Gold" },
    { title: "Forza Horizon 5", hours: "100+ hrs", tier: "Silver" },
    { title: "Just Cause 3", hours: "60+ hrs", tier: "Silver" },
    { title: "Fall Guys", hours: "50+ hrs", tier: "Silver" },
    { title: "Valorant", hours: "40+ hrs", tier: "Bronze" },
    { title: "Palworld", hours: "40+ hrs", tier: "Bronze" },
    { title: "Wuthering Waves", hours: "40+ hrs", tier: "Bronze" },
    { title: "Strinova", hours: "40+ hrs", tier: "Bronze" },
    { title: "The Finals", hours: "30+ hrs", tier: "Bronze" },
    { title: "Battlefield 1", hours: "15+ hrs", tier: "Bronze" },
    { title: "Fortnite OG", hours: "10+ hrs", tier: "Bronze" },
    { title: "Call of Duty: Warzone", hours: "10+ hrs", tier: "Bronze" },
    { title: "Battlefield V", hours: "10+ hrs", tier: "Bronze" },
    { title: "Overwatch 2", hours: "5+ hrs", tier: "Bronze" },
    { title: "Counter-Strike", hours: "5+ hrs", tier: "Bronze" }
  ];

  // Group games by tier
  const platinumGames = games.filter(game => game.tier === "Platinum");
  const goldGames = games.filter(game => game.tier === "Gold");
  const silverGames = games.filter(game => game.tier === "Silver");
  const bronzeGames = games.filter(game => game.tier === "Bronze");

  const getTierLabel = (tier: string) => {
    switch(tier) {
      case "Platinum": return "500+ Hours";
      case "Gold": return "200-499 Hours";
      case "Silver": return "50-199 Hours";
      case "Bronze": return "Under 50 Hours";
      default: return "";
    }
  };

  const getTierClass = (tier: string) => {
    switch(tier) {
      case "Platinum": return "border-t-purple-500";
      case "Gold": return "border-t-amber-500";
      case "Silver": return "border-t-slate-400";
      case "Bronze": return "border-t-amber-700";
      default: return "";
    }
  };

  const renderGameCard = (game: { title: string; hours: string; tier: string }, index: number) => (
    <div 
      key={index}
      className="group relative transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
    >
      <Card className={`border border-border/30 bg-card/20 backdrop-blur-lg h-full overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-2 ${getTierClass(game.tier)} hover:bg-card/40`}>
        <CardHeader className="pb-2 relative">
          {(game.tier === "Platinum") && (
            <span className="absolute top-0 right-0 w-8 h-8">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-yellow-500 absolute top-2 right-2 opacity-80 rotate-12">
                <polygon fill="currentColor" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </span>
          )}
          <CardTitle className="text-lg glitch-text flex items-center">
            <span className="mr-1.5">{game.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="relative overflow-hidden">
          <Badge 
            variant="secondary" 
            className="group-hover:bg-card/50 transition-colors text-xs py-1"
          >
            {game.hours}
          </Badge>
          <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-br from-transparent to-slate-100/10 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
        </CardContent>
      </Card>
    </div>
  );

  const renderGameGroup = (games: { title: string; hours: string; tier: string }[], tier: string) => (
    <div className="mt-10 first:mt-0">
      <div className="flex items-center mb-4">
        <h3 className="text-xl font-semibold">{getTierLabel(tier)}</h3>
        <div className="h-px bg-border/30 flex-grow ml-4"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {games.map((game, index) => renderGameCard(game, index))}
      </div>
    </div>
  );

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
        
        {renderGameGroup(platinumGames, "Platinum")}
        {renderGameGroup(goldGames, "Gold")}
        {renderGameGroup(silverGames, "Silver")}
        {renderGameGroup(bronzeGames, "Bronze")}
      </div>
    </section>
  );
};

export default GamesSection;
