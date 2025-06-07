
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';

const Work = () => {
  const projects = [
    {
      prompt: "Design a luxury, elegant, and timeless black and white logo for a brand named Ramoliya. The logo should have a sophisticated and minimalist look with clean lines and a refined serif or modern calligraphy font. Include a simple yet memorable icon or monogram that reflects exclusivity, prestige, and high-end quality. The overall design should feel classic and premium, suitable for a luxury brand in fashion, jewelry, or lifestyle sectors.",
      title: "Minimalist Poster Design",
      description: "This design by Jay Ramoliya uses clean lines, minimal color palettes, and ample white space to evoke calmness and clarity, perfectly reflecting the prompt's essence.",
      tools: ["Photoshop", "Illustrator", "AI"],
      imageUrl: "images/ramoliya logo.webp"
    },
    {
      prompt: "Redesign the logo for Wings Tech, an IT Services and IT Consulting company. The new logo should keep the essence of wings symbolizing speed, agility, and innovation, but with a more modern, sleek, and minimalist look. Use a clean, professional style with a black and white or monochrome palette to convey sophistication and trustworthiness. Incorporate a contemporary sans-serif font for the text 'Wings Tech' that is bold and easily readable. The design should reflect technology, digital transformation, and consultancy professionalism while maintaining simplicity and elegance.",
      title: "Futuristic UI Concept",
      description: "Created by Jay Ramoliya, this futuristic UI features sleek lines, neon accents, and intuitive navigation designed to enhance the smart home experience.",
      tools: ["Figma", "Adobe XD"],
      imageUrl: "images/wings tech.webp"
    },
    {
      prompt: "A 3D-rendered poster with the phrase 'Wings Tech' in bold, dripping pink letters. The background is dark gray with abstract pink designs and splatters. The text appears to be melting, giving it a dynamic and edgy look. The overall design is modern and attention-grabbing, conveying a sense of boldness and urgency.",
      title: "Artistic Illustration",
      description: "This abstract illustration by Jay Ramoliya captures the fluidity and energy of music rhythms using dynamic shapes and vibrant colors.",
      tools: ["Procreate", "Adobe Illustrator"],
      imageUrl: "/images/pink wings tech.webp"
    },
    {
      prompt: "A conceptual and artistic fashion advertisement. A small tree with bare branches growing out of a large, broken white egg shell planter. The egg has the brand name 'Monixa' written on it in bold black modern font. The branches display stylish clothing items—two fashionable jackets hanging neatly on wooden hangers and two pairs of leather shoes hanging by laces. The background is minimalistic and pure white, giving the scene a clean, elegant look. The overall composition should be surreal, high-end, and modern, suitable for a luxury fashion brand ad.",
      title: "Branding Identity",
      description: "Designed by Jay Ramoliya, this brand identity reflects sustainability through earthy colors and clean design, highlighting eco-friendly values.",
      tools: ["Illustrator", "Photoshop"],
      imageUrl: "/images/monixa adve.webp"
    },
    {
      prompt: "A modern and artistic product advertisement. A thermal receipt printer is printing a white receipt. The top of the receipt says 'NEW ORDER' in bold black font, followed by a barcode. In the center of the receipt is an image of a stylish beige T-shirt with the word 'Monixa' written across the chest in clean, black modern typography. Below the image, the text reads 'real beauty' in a simple serif font. The background is in soft beige tones, giving a minimalist and elegant look suitable for a fashion or lifestyle brand ad.",
      title: "AI Tech Logo Design",
      description: "A sleek, modern logo design that represents innovation and cutting-edge technology in the AI space.",
      tools: ["Illustrator", "Figma"],
      imageUrl: "/images/monixa order.webp"
    },
    {
      prompt: "Design a modern and minimalist logo for a brand named Netflix. The logo should be clean, geometric, and suitable for a tech startup. Use a professional color palette like shades of blue, black, and white. The design should include a simple icon or monogram that reflects innovation, connectivity, or digital transformation. The typography should be bold, sans-serif, and easily readable. The overall look should feel futuristic and premium, yet minimal.",
      title: "Fitness App UI/UX",
      description: "Intuitive and motivating mobile interface design that encourages users to achieve their fitness goals.",
      tools: ["Figma", "Principle", "Adobe XD"],
      imageUrl: "/images/netflix.webp"
    },
    {
      prompt: "3D typography artwork with the phrase 'Ramoliya' formed from vibrant, rainbow-colored clouds and smoke. The text is sculpted from colorful, puffy, and fluffy material that looks like dripping paint and cotton candy. Each letter is seamlessly blended into a dynamic cloud mass with a realistic, soft texture. The background is dark and moody to make the colors pop. Ultra-detailed, hyper-realistic, surreal, dreamlike composition.",
      title: "Organic Coffee Packaging",
      description: "Sustainable and eye-catching packaging design that reflects the premium quality and organic nature of the coffee.",
      tools: ["Photoshop", "Illustrator", "3D Mockup"],
      imageUrl: "/images/3dramoliya.webp"
    },
    {
      prompt: "Create a poster with a 9:16 aspect ratio. A pill with green color leetcode on top and transparent at the bottom, featuring the printed leetcode logo. Inside the pill, include a large amount of 500+ badge. black background.",
      title: "Sustainable Fashion Campaign",
      description: "Vibrant and engaging social media visuals that promote eco-conscious fashion choices and brand awareness.",
      tools: ["Photoshop", "After Effects", "Canva"],
      imageUrl: "/images/pill.webp"
    },
    {
      prompt: "A luxurious and dreamy fashion advertisement featuring an ornate golden carousel. Instead of traditional horses, the carousel has elegant brown designer T-shirt with matching blazers displayed on golden poles. The T-shirt rotate gracefully under soft sunlight in an open-air palace courtyard surrounded by vines and arches. The brand name 'MONIXA' appears at the top in gold capital letters. The atmosphere should be fairytale-like, sophisticated, and high-end, evoking luxury and fantasy.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/monix tshirt.webp"
    },
    {
      prompt: "Create a trendy and eye-catching advertising graphic for Monixa T-shirts. The design should reflect modern fashion vibes with a clean and stylish look. Use bold typography featuring the brand name 'Monixa' prominently, paired with minimalist but fashionable elements like abstract shapes or subtle textures. Incorporate a color palette that matches the Monixa brand identity (neutral tones with pops of vibrant colors like coral or teal). The overall style should be youthful, fresh, and energetic to attract young fashion-conscious customers. Include a subtle call-to-action like ‘Shop Now’ or ‘Feel the Style’.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/monixa style.webp"
    },
    {
      prompt: "Act as if you are an ads creative graphic designer. You need to design a social media post for an Instagram advertisement featuring a Pepsi cold drink can. The design should include be a attractive holding the Pepsi can in her hand, showcasing a sweet smile. The woman should be dressed in trekking attire, and the background should feature mountains. Additionally, the image should be hyper-realistic and in high definition.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/pepsi.webp"
    },
    {
      prompt: "with a black tie, evening time arms crossed. To my right, Virat Kohli resting shoulder to shoulder with me in a black suit with a white shirt, The street is empty and dramatic. Moody lighting with a 35mm film look. Shallow depth of field, sharp focus on the three of us. Aspect ratio 9:16.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/mevirat.webp"
    },
    {
      prompt: "An aerial cinematic shot of A young man 'With the same face as uploded image' leaning coolly on the hood of a red Lamborghini Aventador on a luxury car studio, wearing a oversized premium off white T-shirt underneath a maroon color varsity jacket. I Moody lighting, Photorealistic, shallow depth of field, soft warm lighting, high-resolution DSLR quality, Hasselblad X2D 100C, cinematic",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/meredcar.webp"
    },
    {
      prompt: "Edit this photo to place me in a Fast & Furious style scene. Keep my face and pose the same. Add a sleek, modified orange sports car (like a veilside Mazda RX-7) and In this image, I am resting my leg on the front fender, which is a part of the car's exterior. Like the pic I sent secondly. Make the background look like an urban street or garage setting, with a gritty, cinematic vibe. Don't change my face keep it same. Add shadowyfigures or people in racing gear in the background, like a street racing meet. Lightingshould be dramatic, like in the movie.Ration portrait 16:9",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/meredcar1.webp"
    },
    {
      prompt: "A 3D hyper-realistic miniature diorama inside a glass box with a black acrylic base, labeled 'Ramoliya Jay' in silver, with a small LED light under the label. It should feature a figure sitting relaxed with a right leg over the left thigh, on a wooden park bench, holding a cup of tea, at night, on a grass park base. Place a street lamp behind the figure, shinning downward. Make it without any background inside the glass box. Cinematic 4D rendered 8K quality, portrait view",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/3dinme.webp"
    },
    {
      prompt: "Transform this person into a scene from the Squid Game TV series. Keep the face exactly the same. Add a green tracksuit with a white number tag, dim indoor lighting with a dramatic and ter atmosphere, and background characters in similar outfits. Make it look like a cinematic shot from survival game show, keeping facial expression and identity unchanged!",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/meingame.webp"
    },
    {
      prompt: "Create a high-resolution 3D text design in the style of stacked wooden blocks. The text should read: 'LinkedIn' with each word stacked vertically like a totem pole. The letters should be bold, blocky, and appear as if they are carved from rough, aged wood with visible grain, cracks, and natural imperfections. The wood texture should look dry and slightly cracked, with a rich brown color and realistic lighting and shadows. Ensure the front face of the letters has a slightly darker tone and the sides have soft gradients to show depth. Use a warm, pastel background (like soft orange or beige) to make the 3D text pop. Maintain realistic shadows and subtle reflections to give a solid, grounded feel. Style: Photorealistic, cinematic lighting, dramatic depth, slight perspective from the bottom left.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/wooden.webp"
    },
    {
      prompt: "Cinematic overhead shot of me standing still a brick city sidesalk, wearing a dark oversized blazer, motion-blurred crowd rushes past around me moody lighting 35mm film look. Shallow depth of field, sharp focus on me. Ration portrait 4:3 Keep the face same as the raw picture",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/cinematic.webp"
    },
    {
      prompt: "Cinematic overhead shot of me standing still a brick city sidesalk, wearing a dark oversized blazer, motion-blurred crowd rushes past around me moody lighting 35mm film look. Shallow depth of field, sharp focus on me. Ration potrait 4:3",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/cinematic1.webp"
    },
    {
      prompt: "",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/.webp"
    },
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
