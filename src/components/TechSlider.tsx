
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const TechSlider = () => {
  const technologies = [
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Vue", icon: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "Express", icon: "https://cdn.simpleicons.org/express/000000" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "C", icon: "https://cdn.simpleicons.org/c/00599C" },
    { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  ];

  // Duplicate the array to create the illusion of infinite scrolling
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <div className="w-full overflow-hidden py-10">
      <div className="flex animate-marquee space-x-12">
        {duplicatedTechnologies.map((tech, index) => (
          <TooltipProvider key={index} delayDuration={300}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-card/30 p-2 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-card/50">
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="h-10 w-10 object-contain"
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-medium">{tech.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};

export default TechSlider;
