
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';

const Work = () => {
  const projects = [
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
    },
    {
      prompt: "Create a modern logo for a tech startup focused on AI solutions.",
      title: "AI Tech Logo Design",
      description: "A sleek, modern logo design that represents innovation and cutting-edge technology in the AI space.",
      tools: ["Illustrator", "Figma"],
      imageUrl: "photo-1555066931-4365d14bab8c"
    },
    {
      prompt: "Design a mobile app interface for a fitness tracking application.",
      title: "Fitness App UI/UX",
      description: "Intuitive and motivating mobile interface design that encourages users to achieve their fitness goals.",
      tools: ["Figma", "Principle", "Adobe XD"],
      imageUrl: "photo-1571019613454-1cb2f99b2d8b"
    },
    {
      prompt: "Create packaging design for an organic coffee brand.",
      title: "Organic Coffee Packaging",
      description: "Sustainable and eye-catching packaging design that reflects the premium quality and organic nature of the coffee.",
      tools: ["Photoshop", "Illustrator", "3D Mockup"],
      imageUrl: "photo-1559056199-641a0ac8b55e"
    },
    {
      prompt: "Design a social media campaign for a sustainable fashion brand.",
      title: "Sustainable Fashion Campaign",
      description: "Vibrant and engaging social media visuals that promote eco-conscious fashion choices and brand awareness.",
      tools: ["Photoshop", "After Effects", "Canva"],
      imageUrl: "photo-1441986300917-64674bd600d8"
    }
  ];

  return (
    <div className="min-h-screen bg-portfolio-dark">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20 bg-portfolio-dark">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-gradient animate-fade-in">
                My Work
              </h1>
              <p className="text-xl text-portfolio-text-secondary max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Explore my creative journey through prompt-driven design solutions. Each project showcases the power of combining creative briefs with innovative visual storytelling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  {...project}
                  animationDelay={`${0.1 * index}s`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Work;
