
import { useEffect, useRef } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type Technology = {
  name: string;
  logoUrl: string;
};

const technologies: Technology[] = [
  {
    name: "React",
    logoUrl: "https://cdn.simpleicons.org/react/61DAFB",
  },
  {
    name: "Vue.js",
    logoUrl: "https://cdn.simpleicons.org/vuedotjs/4FC08D",
  },
  {
    name: "TypeScript",
    logoUrl: "https://cdn.simpleicons.org/typescript/3178C6",
  },
  {
    name: "Tailwind CSS",
    logoUrl: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  },
  {
    name: "Node.js",
    logoUrl: "https://cdn.simpleicons.org/nodedotjs/339933",
  },
  {
    name: "Express",
    logoUrl: "https://cdn.simpleicons.org/express/000000",
  },
  {
    name: "PostgreSQL",
    logoUrl: "https://cdn.simpleicons.org/postgresql/4169E1",
  },
  {
    name: "MongoDB",
    logoUrl: "https://cdn.simpleicons.org/mongodb/47A248",
  },
  {
    name: "MySQL",
    logoUrl: "https://cdn.simpleicons.org/mysql/4479A1",
  },
  {
    name: "Git",
    logoUrl: "https://cdn.simpleicons.org/git/F05032",
  },
  {
    name: "GitHub",
    logoUrl: "https://cdn.simpleicons.org/github/181717",
  },
  {
    name: "Docker",
    logoUrl: "https://cdn.simpleicons.org/docker/2496ED",
  },
  {
    name: "C",
    logoUrl: "https://cdn.simpleicons.org/c/00599C",
  },
  {
    name: "C++",
    logoUrl: "https://cdn.simpleicons.org/cplusplus/00599C",
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
