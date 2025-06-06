
const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-gradient animate-fade-in">
            About Jay Ramoliya
          </h2>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg md:text-xl text-portfolio-text-secondary leading-relaxed mb-8">
              I'm a passionate graphic designer with a unique approach to creativity. I believe that the best designs 
              start with compelling prompts that challenge conventional thinking and push creative boundaries.
            </p>
            
            <p className="text-lg md:text-xl text-portfolio-text-secondary leading-relaxed mb-12">
              My work spans across various mediums - from minimalist posters to complex brand identities, 
              futuristic UI concepts to abstract illustrations. Each project is a response to a creative 
              challenge, transforming ideas into visual narratives that resonate with audiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="glass-card p-6">
              <h3 className="text-xl font-display font-semibold mb-3 text-portfolio-accent">
                Design Philosophy
              </h3>
              <p className="text-portfolio-text-secondary">
                Every design tells a story. I focus on creating meaningful connections between concepts and visuals.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-xl font-display font-semibold mb-3 text-portfolio-accent">
                Creative Process
              </h3>
              <p className="text-portfolio-text-secondary">
                From prompt to prototype, I embrace experimentation and iteration to achieve the perfect solution.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-xl font-display font-semibold mb-3 text-portfolio-accent">
                Innovation Focus
              </h3>
              <p className="text-portfolio-text-secondary">
                Combining traditional design principles with modern technology to create cutting-edge visuals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
