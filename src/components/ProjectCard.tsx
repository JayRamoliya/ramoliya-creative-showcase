
// import { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';

// interface ProjectCardProps {
//   prompt: string;
//   title: string;
//   description: string;
//   tools: string[];
//   imageUrl: string;
//   animationDelay?: string;
// }

// const ProjectCard = ({ prompt, title, description, tools, imageUrl, animationDelay = '0s' }: ProjectCardProps) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <Card 
//       className="group transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 bg-card border border-border animate-fade-in overflow-hidden"
//       style={{ animationDelay }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <CardContent className="p-0">
//         {/* Prompt Section */}
//         <div className="bg-primary/10 border-b border-primary/20 p-4">
//           <div className="flex items-center gap-2 mb-2">
//             <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
//             <span className="text-primary font-medium text-sm uppercase tracking-wider">Prompt</span>
//           </div>
//           <p className="text-primary font-medium text-sm leading-relaxed">
//             {prompt}
//           </p>
//         </div>

//         {/* Image Section */}
//         <div className="relative overflow-hidden bg-muted">
//           <img
//             src={imageUrl}
//             alt={title}
//             className={`w-full object-cover transition-transform duration-500 ${
//               isHovered ? 'scale-110' : 'scale-100'
//             }`}
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
//           {/* Design Label */}
//           {/* <div className="absolute top-4 right-4">
//             <div className="bg-background/90 backdrop-blur-sm border border-border rounded-full px-3 py-1">
//               <span className="text-foreground font-medium text-xs uppercase tracking-wider">Design</span>
//             </div>
//           </div> */}
//         </div>

//         {/* Content Section */}
//         {/* <div className="p-6">
//           <h3 className="text-xl font-display font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
//             {title}
//           </h3>

//           <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
//             {description}
//           </p>

//           <div className="flex flex-wrap gap-2">
//             {tools.map((tool, index) => (
//               <span
//                 key={index}
//                 className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full border border-border hover:border-primary/50 transition-colors"
//               >
//                 {tool}
//               </span>
//             ))}
//           </div>
//         </div> */}
//       </CardContent>
//     </Card>
//   );
// };

// export default ProjectCard;





// import { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { toast } from 'sonner'; // or your toast library

// interface ProjectCardProps {
//   prompt: string;
//   title: string;
//   description: string;
//   tools: string[];
//   imageUrl: string;
//   animationDelay?: string;
// }

// const ProjectCard = ({
//   prompt,
//   title,
//   description,
//   tools,
//   imageUrl,
//   animationDelay = '0s',
// }: ProjectCardProps) => {
//   const [isCopied, setIsCopied] = useState(false);

//   const handleCopy = async () => {
//     try {
//       await navigator.clipboard.writeText(prompt);
//       setIsCopied(true);
//       toast.success('✅ Prompt copied successfully!');
//     } catch (error) {
//       toast.error('❌ Failed to copy prompt.');
//     }
//   };

//   return (
//     <Card
//       className="transition-all duration-300 hover:shadow-xl bg-card border border-border rounded-xl overflow-hidden cursor-pointer"
//       style={{ animationDelay }}
//       onClick={handleCopy}
//     >
//       <CardContent className="p-0">
//         {/* Image Section */}
//         <div className="relative w-full aspect-[16/10] overflow-hidden">
//           <img
//             src={imageUrl}
//             alt={title}
//             className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//           />
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default ProjectCard;



import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

interface ProjectCardProps {
  prompt: string;
  title: string;
  description: string;
  tools: string[];
  imageUrl: string;
  animationDelay?: string;
}

const ProjectCard = ({
  prompt,
  title,
  description,
  tools,
  imageUrl,
  animationDelay = '0s',
}: ProjectCardProps) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      toast.success('✅ Prompt copied successfully!');
    } catch (error) {
      toast.error('❌ Failed to copy prompt.');
    }
  };

  return (
    <Card
      className="transition-all duration-300 hover:shadow-xl bg-card border border-border rounded-xl overflow-hidden cursor-pointer relative group"
      style={{ animationDelay }}
      onClick={handleCopy}
    >
      <CardContent className="p-0">
        <div className="w-full bg-muted relative">
          {/* Image */}
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto max-h-[400px] object-contain transition-transform duration-300 group-hover:scale-105"
          />

          {/* "Click to copy" overlay */}
          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm shadow-sm transition-opacity duration-300 group-hover:opacity-100 opacity-0">
            📋 Click to copy prompt
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
