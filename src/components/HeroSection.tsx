
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const textToType = "Technician and Self-Proclaimed Gamer";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < textToType.length) {
        setTypedText(textToType.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#3b82f6,transparent_70%)] opacity-20" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 font-medium mb-4 opacity-0 animate-fade-down" style={{ animationDelay: '200ms' }}>
            Hello, I'm
          </p>
          <h1 className="font-bold mb-4 opacity-0 animate-fade-down" style={{ animationDelay: '400ms' }}>
            Rituraj Kanchan
          </h1>
          <div className="text-xl sm:text-2xl md:text-3xl font-medium mb-8 opacity-0 animate-fade-down" style={{ animationDelay: '600ms' }}>
            <span>{typedText}</span>
            <span className={`inline-block w-0.5 h-6 ml-1 bg-current ${showCursor ? 'animate-blink' : 'opacity-0'}`}></span>
          </div>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: '800ms' }}>
            I tinker with systems, and sometimes break things just to fix them better.
            I do what I love — turning ideas into clean, functional code.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center opacity-0 animate-fade-up" style={{ animationDelay: '1000ms' }}>
            <Button asChild size="lg" className="button-glow">
              <a href="#projects">
                My Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="button-glow">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-blur" />
    </section>
  );
};

export default HeroSection;
