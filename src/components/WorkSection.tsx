
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import ProjectCard from './ProjectCard';

const WorkSection = () => {
  const featuredProjects = [
    {
      prompt: "Create a minimalist poster that expresses calm and simplicity.",
      title: "Minimalist Poster Design",
      description: "This design by Jay Ramoliya uses clean lines, minimal color palettes, and ample white space to evoke calmness and clarity, perfectly reflecting the prompt's essence.",
      tools: ["Photoshop", "Illustrator", "AI"],
      imageUrl: "photo-1493397212122-2b85dda8106b"
    },
    {
      prompt: "Design a futuristic user interface for a smart home app.",
      title: "Futuristic UI Concept",
      description: "Created by Jay Ramoliya, this futuristic UI features sleek lines, neon accents, and intuitive navigation designed to enhance the smart home experience.",
      tools: ["Figma", "Adobe XD"],
      imageUrl: "photo-1461749280684-dccba630e2f6"
    },
    {
      prompt: "Illustrate an abstract artwork inspired by music rhythms.",
      title: "Artistic Illustration",
      description: "This abstract illustration by Jay Ramoliya captures the fluidity and energy of music rhythms using dynamic shapes and vibrant colors.",
      tools: ["Procreate", "Adobe Illustrator"],
      imageUrl: "photo-1487058792275-0ad4aaf24ca7"
    },
    {
      prompt: "Design a brand identity for an eco-friendly startup.",
      title: "Branding Identity",
      description: "Designed by Jay Ramoliya, this brand identity reflects sustainability through earthy colors and clean design, highlighting eco-friendly values.",
      tools: ["Illustrator", "Photoshop"],
      imageUrl: "photo-1498050108023-c5249f4df085"
    }
  ];

  return (
    <section id="work" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gradient animate-fade-in">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Explore my creative journey through these prompt-driven design solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              animationDelay={`${0.1 * index}s`}
            />
          ))}
        </div>

        <div className="text-center">
          <Link to="/work">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
