
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#6366f1,transparent_70%)] opacity-10" />
      
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="mb-4">My Experience</h2>
          <p className="text-muted-foreground">
            Professional experiences and projects that have shaped my journey.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="border border-border/50 bg-card/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>PC Hardware Specialist (Freelance)</CardTitle>
              <CardDescription className="text-muted-foreground font-medium">
                Self-Initiated | 2020 – Present
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                <li>Built and optimized a custom gaming PC using cost-effective, high-performance components.</li>
                <li>Helped numerous friends, family, and local community members with PC builds, upgrades, and troubleshooting.</li>
                <li>Diagnosed and resolved software/driver issues, ensuring long-term performance and compatibility.</li>
                <li>Maintained upgrade records and provided ongoing tech support.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
