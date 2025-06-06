
import { useState } from 'react';

interface ProjectCardProps {
  prompt: string;
  title: string;
  description: string;
  tools: string[];
  imageUrl: string;
  animationDelay?: string;
}

const ProjectCard = ({ prompt, title, description, tools, imageUrl, animationDelay = '0s' }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="project-card animate-fade-in"
      style={{ animationDelay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-6">
        <div className="bg-portfolio-accent/10 border border-portfolio-accent/30 rounded-lg p-4 mb-6">
          <p className="text-portfolio-accent font-medium text-sm">
            PROMPT: {prompt}
          </p>
        </div>
        
        <div className="relative overflow-hidden rounded-lg mb-6 group">
          <img
            src={`https://images.unsplash.com/${imageUrl}`}
            alt={title}
            className={`w-full h-64 object-cover transition-transform duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      <h3 className="text-xl font-display font-semibold mb-3 text-portfolio-text-primary">
        {title}
      </h3>

      <p className="text-portfolio-text-secondary mb-4 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tools.map((tool, index) => (
          <span
            key={index}
            className="text-xs px-3 py-1 bg-portfolio-accent/20 text-portfolio-accent rounded-full border border-portfolio-accent/30"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
