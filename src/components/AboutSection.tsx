
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutSection = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: ["React", "Vue", "TypeScript", "Tailwind CSS"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express", "PostgreSQL", "MongoDB"]
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
                I'm a passionate software engineer with over 5 years of experience building web applications and services.
                My journey in tech started with a curiosity about how things work, which led me to explore the world of programming.
              </p>
              <p>
                I specialize in creating robust and scalable applications, with a focus on clean code, performance, and user experience.
                Whether it's frontend, backend, or full-stack development, I enjoy tackling challenging problems and delivering high-quality solutions.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="mb-6">Skills & Technologies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <Card key={skill.category} className="border border-border/50 bg-secondary/20 backdrop-blur-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{skill.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {skill.technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
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
