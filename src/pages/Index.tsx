
import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import GamesSection from "@/components/GamesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Calculate when the section is in view
        const isInView = sectionTop < windowHeight * 0.75 && 
                         sectionTop > -sectionHeight * 0.5;
        
        if (isInView) {
          section.classList.add('opacity-100', 'translate-y-0');
          section.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };
    
    // Add transition classes to all sections initially
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('transition-all', 'duration-700', 'ease-out');
      
      // Only add transform classes if section is not in initial view
      if (section.getBoundingClientRect().top > window.innerHeight * 0.75) {
        section.classList.add('opacity-0', 'translate-y-10');
      } else {
        section.classList.add('opacity-100', 'translate-y-0');
      }
    });
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
    // Run once to initialize
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <GamesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
