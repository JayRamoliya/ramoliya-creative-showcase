
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-dark via-portfolio-dark-secondary to-portfolio-dark"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-portfolio-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-portfolio-gradient-end/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-fade-in-left">
            Welcome to{' '}
            <span className="shimmer-text">Jay Ramoliya's</span>
            <br />
            Graphic Design Portfolio
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-portfolio-text-secondary animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
            Where Creativity Meets Concept
          </h2>
          
          <div className="max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-lg md:text-xl text-portfolio-text-secondary leading-relaxed">
              Hi, I'm Jay Ramoliya, a passionate graphic designer who loves blending creative prompts 
              with innovative design solutions. This portfolio showcases my journey of transforming 
              ideas into visual stories using modern design tools and animation.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="inline-block p-4 glass-card animate-pulse-slow">
              <p className="text-portfolio-accent font-medium">
                "Design inspired by nature and technology fusion."
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToWork}
            className="text-portfolio-text-secondary hover:text-portfolio-accent transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
