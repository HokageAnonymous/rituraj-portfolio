
import { useEffect, useRef } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type Technology = {
  name: string;
  logoUrl: string;
};

const technologies: Technology[] = [
  {
    name: "React",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Vue",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "TypeScript",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Tailwind CSS",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    name: "Node.js",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "PostgreSQL",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Git",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Docker",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "C",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "C++",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "FreeCodeCamp",
    logoUrl: "https://cdn.worldvectorlogo.com/logos/freecodecamp.svg",
  },
  {
    name: "NordVPN",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/NordVPN_logo.svg/2560px-NordVPN_logo.svg.png",
  },
];

const TechSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Clone logos for infinite loop effect
    if (sliderRef.current) {
      const slider = sliderRef.current;
      slider.innerHTML += slider.innerHTML;
      
      const animateSlider = () => {
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        } else {
          slider.scrollLeft += 1;
        }
        requestAnimationFrame(animateSlider);
      };
      
      const animation = requestAnimationFrame(animateSlider);
      
      return () => cancelAnimationFrame(animation);
    }
  }, []);

  return (
    <div className="w-full relative overflow-hidden py-10">
      <div 
        ref={sliderRef}
        className="flex items-center space-x-16 overflow-hidden whitespace-nowrap py-4"
      >
        {technologies.map((tech, index) => (
          <TooltipProvider key={`${tech.name}-${index}`}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div 
                  className="inline-flex items-center justify-center h-16 w-16 bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-xl p-3 hover:bg-primary/10 transition-all duration-300 cursor-pointer hover:scale-110"
                >
                  <img 
                    src={tech.logoUrl} 
                    alt={`${tech.name} logo`}
                    className="h-full w-full object-contain"
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-card border border-border/50 text-foreground">
                <p>{tech.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};

export default TechSlider;
