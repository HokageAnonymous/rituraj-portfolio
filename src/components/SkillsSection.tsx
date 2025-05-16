
import TechSlider from "./TechSlider";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#4f46e5,transparent 70%)] opacity-10" />
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I work with a variety of technologies across the full stack development spectrum.
            Here are the tools, languages, and frameworks I'm proficient in.
          </p>
        </div>
        
        <TechSlider />
      </div>
    </section>
  );
};

export default SkillsSection;
