
import { useEffect, useRef } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type Technology = {
  name: string;
  logoUrl: string;
};

const technologies: Technology[] = [
  {
    name: "React",
    logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg",
  },
  {
    name: "Vue.js",
    logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vuedotjs.svg",
  },
  {
    name: "TypeScript",
    logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/typescript.svg",
  },
  {
    name: "Tailwind CSS",
    logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tailwindcss.svg",
  },
  {
    name: "Node.js",
    logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nodedotjs.svg",
  },
  {
    name: "Express",
    logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/express.svg",
  },
  {
    name: "PostgreSQL",
    logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/postgresql.svg",
  },
  {
    name: "MongoDB",
    logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mongodb.svg",
  },
  {
    name: "MySQL",
    logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg",
  },
  {
    name: "Git",
    logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/git.svg",
  },
  {
    name: "GitHub",
    logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg",
  },
  {
    name: "Docker",
    logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/docker.svg",
  },
  {
    name: "C",
    logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/c.svg",
  },
  {
    name: "C++",
    logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/cplusplus.svg",
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
