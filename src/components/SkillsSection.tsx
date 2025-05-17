
import TechSlider from "./TechSlider";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b82f6,transparent_70%)] opacity-10" />
      
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground">
            A collection of languages, frameworks, and tools I work with.
          </p>
        </div>
        
        <TechSlider />
      </div>
    </section>
  );
};

export default SkillsSection;
