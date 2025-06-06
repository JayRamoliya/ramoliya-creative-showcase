
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      title: "Minimalist Design",
      category: "Poster Design",
      imageUrl: "photo-1493397212122-2b85dda8106b",
      description: "Clean lines and minimal color palettes"
    },
    {
      id: 2,
      title: "Futuristic Interface",
      category: "UI/UX Design",
      imageUrl: "photo-1461749280684-dccba630e2f6",
      description: "Modern smart home app interface"
    },
    {
      id: 3,
      title: "Abstract Art",
      category: "Illustration",
      imageUrl: "photo-1487058792275-0ad4aaf24ca7",
      description: "Music rhythm inspired artwork"
    },
    {
      id: 4,
      title: "Brand Identity",
      category: "Branding",
      imageUrl: "photo-1498050108023-c5249f4df085",
      description: "Eco-friendly startup branding"
    },
    {
      id: 5,
      title: "Tech Logo",
      category: "Logo Design",
      imageUrl: "photo-1555066931-4365d14bab8c",
      description: "AI tech startup logo"
    },
    {
      id: 6,
      title: "Mobile App",
      category: "App Design",
      imageUrl: "photo-1571019613454-1cb2f99b2d8b",
      description: "Fitness tracking application"
    },
    {
      id: 7,
      title: "Package Design",
      category: "Packaging",
      imageUrl: "photo-1559056199-641a0ac8b55e",
      description: "Organic coffee packaging"
    },
    {
      id: 8,
      title: "Social Campaign",
      category: "Marketing",
      imageUrl: "photo-1441986300917-64674bd600d8",
      description: "Sustainable fashion campaign"
    },
    {
      id: 9,
      title: "Web Development",
      category: "Development",
      imageUrl: "photo-1649972904349-6e44c42644a7",
      description: "Modern web application"
    },
    {
      id: 10,
      title: "Circuit Board",
      category: "Technology",
      imageUrl: "photo-1518770660439-4636190af475",
      description: "Electronic circuit design"
    },
    {
      id: 11,
      title: "Programming",
      category: "Development",
      imageUrl: "photo-1486312338219-ce68d2c6f44d",
      description: "Software development"
    },
    {
      id: 12,
      title: "Robotics",
      category: "Technology",
      imageUrl: "photo-1485827404703-89b55fcc595e",
      description: "AI robotics design"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-gradient animate-fade-in">
              Jay Ramoliya Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Explore my creative journey through innovative design solutions and visual storytelling
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <Card 
                  key={image.id}
                  className="group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 bg-card border border-border animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${0.1 * index}s` }}
                  onClick={() => setSelectedImage(image.imageUrl)}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={`https://images.unsplash.com/${image.imageUrl}?w=400&h=300&fit=crop`}
                        alt={image.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                          {image.category}
                        </span>
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <h3 className="text-lg font-display font-semibold mb-1">
                          {image.title}
                        </h3>
                        <p className="text-sm text-gray-300">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={`https://images.unsplash.com/${selectedImage}?w=1200&h=800&fit=crop`}
                alt="Gallery Image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
