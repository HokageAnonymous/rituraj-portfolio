
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Home Server Implementation Using Docker on Legacy Hardware",
      description: "Repurposed an old laptop into a multifunctional home server running Ubuntu Linux. Deployed Docker containers to manage and isolate services efficiently. Set up Jellyfin, an open-source media server, to stream personal media collections across devices. Hosted a Minecraft server for multiplayer gaming sessions. Experimented with self-hosting Llama 3, a large language model, to explore AI capabilities locally.",
      tags: ["Ubuntu", "Docker", "Jellyfin", "Minecraft", "Llama 3"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Custom Unix Shell in Python",
      description: "Built a custom Unix shell using Python on the Codecrafters platform. Focused on process management, piping, I/O redirection, and signal handling to deepen understanding of system-level programming.",
      tags: ["Python", "Unix", "Codecrafters", "Shell"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Personal Portfolio Website",
      description: "Developing a responsive personal portfolio website to showcase projects and skills. Created using HTML, CSS, and JavaScript.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Solana Token on Devnet",
      description: "Deployed a custom SPL token on the Solana devnet using CLI-based deployment. Ran a local Solana validator in Docker to test interactions. Learned token minting, wallet creation, and transaction workflows. Followed NetworkChuck's tutorial to complete the process end-to-end.",
      tags: ["Solana", "SPL Token", "Docker", "CLI", "Devnet"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#ec4899,transparent_70%)] opacity-10" />
      
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="mb-4">My Projects</h2>
          <p className="text-muted-foreground">
            Here's a selection of projects I've worked on. Each one presented unique challenges and opportunities to learn and grow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/20 transition-all duration-300 hover:scale-105 transform"
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-secondary/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between gap-2">
                <Button variant="outline" size="sm" asChild className="button-glow">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild className="button-glow">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" asChild className="button-glow">
            <a href="#" target="_blank" rel="noopener noreferrer">
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
