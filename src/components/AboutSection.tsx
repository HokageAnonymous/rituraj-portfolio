
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutSection = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: ["React", "Vue", "TypeScript", "Tailwind CSS"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express", "PostgreSQL", "MongoDB", "MySQL"]
    },
    {
      category: "Tools",
      technologies: ["Git", "Docker", "AWS", "CI/CD"]
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#8b5cf6,transparent_70%)] opacity-10" />
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Computer Science and Engineering student at Birla Institute of Technology, Mesra, with a solid foundation in programming, data structures, and algorithms. Passionate about gaming, having spent extensive hours honing strategic thinking and problem-solving skills through competitive play as a self-proclaimed professional gamer.
              </p>
              <p>
                Eager to apply both technical knowledge and gaming-derived skills to real-world projects through internships in the tech industry.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="mb-6">Skills & Technologies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <Card key={skill.category} className="border border-border/50 bg-secondary/20 backdrop-blur-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg tech-category-glow">{skill.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {skill.technologies.map((tech) => (
                        <li key={tech} className="tech-item">{tech}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
