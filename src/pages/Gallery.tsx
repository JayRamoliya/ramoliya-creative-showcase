import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const galleryImages = [
    {
      id: 1,
      title: "Logo Design",
      category: "Logo Design",
      imageUrl: "images/ramoliya logo.webp",
      description: "",
    },
    {
      id: 2,
      title: "Logo Design",
      category: "Logo Design",
      imageUrl: "images/wings tech.webp",
      description: "",
    },
    {
      id: 3,
      title: "Abstract Art",
      category: "Illustration",
      imageUrl: "/images/pink wings tech.webp",
      description: "",
    },
    {
      id: 4,
      title: "Brand Identity",
      category: "Branding",
      imageUrl: "/images/monixa adve.webp",
      description: "Eco-friendly startup branding",
    },
    {
      id: 5,
      title: "Logo",
      category: "Logo Design",
      imageUrl: "/images/netflix.webp",
      description: "AI startup logo",
    },
    {
      id: 6,
      title: "Logo Design",
      category: "Logo Design",
      imageUrl: "/images/3dramoliya.webp",
      description: "",
    },
    {
      id: 7,
      title: "Package Design",
      category: "Packaging",
      imageUrl: "/images/pill.webp",
      description: "",
    },
    {
      id: 8,
      title: "Social Campaign",
      category: "Marketing",
      imageUrl: "/images/monix tshirt.webp",
      description: "Sustainable fashion campaign",
    },
    {
      id: 9,
      title: "Social Campaign",
      category: "Marketing",
      imageUrl: "/images/monixa style.webp",
      description: "",
    },
    {
      id: 10,
      title: "",
      category: "Marketing",
      imageUrl: "/images/pepsi.webp",
      description: "",
    },
    {
      id: 11,
      title: "",
      category: "Cinematic",
      imageUrl: "/images/mevirat.webp",
      description: "",
    },
    {
      id: 12,
      title: "",
      category: "Car",
      imageUrl: "/images/meredcar.webp",
      description: "",
    },
    {
      id: 13,
      title: "",
      category: "Car",
      imageUrl: "/images/meredcar1.webp",
      description: "",
    },
    {
      id: 14,
      title: "",
      category: "Car",
      imageUrl: "/images/mecar1.webp",
      description: "",
    },
    {
      id: 15,
      title: "",
      category: "3D",
      imageUrl: "/images/3dinme.webp",
      description: "",
    },
    {
      id: 16,
      title: "",
      category: "Cinematic",
      imageUrl: "/images/meingame.webp",
      description: "",
    },
    {
      id: 17,
      title: "",
      category: "Wooden",
      imageUrl: "/images/wooden.webp",
      description: "",
    },
    {
      id: 18,
      title: "",
      category: "Cinematic",
      imageUrl: "/images/cinematic.webp",
      description: "",
    },
    {
      id: 19,
      title: "",
      category: "Cinematic",
      imageUrl: "/images/cinematic1.webp",
      description: "",
    },
    {
      id: 20,
      title: "",
      category: "Marketing",
      imageUrl: "/images/monixain.webp",
      description: "",
    },
    {
      id: 21,
      title: "",
      category: "Cinematic",
      imageUrl: "/images/shivme.webp",
      description: "",
    },
    {
      id: 22,
      title: "",
      category: "Text",
      imageUrl: "/images/water.webp",
      description: "",
    },
    {
      id: 23,
      title: "",
      category: "Text",
      imageUrl: "/images/neonramoliya.webp",
      description: "",
    },
    {
      id: 24,
      title: "",
      category: "Graphic",
      imageUrl: "/images/fire.webp",
      description: "",
    },
    {
      id: 25,
      title: "",
      category: "Water",
      imageUrl: "/images/133water.webp",
      description: "",
    },
    {
      id: 26,
      title: "",
      category: "Text",
      imageUrl: "/images/redr.webp",
      description: "",
    },
    {
      id: 27,
      title: "",
      category: "Marketing",
      imageUrl: "/images/tea.webp",
      description: "",
    },
    {
      id: 28,
      title: "",
      category: "Marketing",
      imageUrl: "/images/tea1.webp",
      description: "",
    },
    {
      id: 29,
      title: "",
      category: "Marketing",
      imageUrl: "/images/agro.webp",
      description: "",
    },
    {
      id: 30,
      title: "",
      category: "Marketing",
      imageUrl: "/images/agro2.webp",
      description: "",
    },
    {
      id: 31,
      title: "",
      category: "Card Design",
      imageUrl: "/images/card.webp",
      description: "",
    },
    {
      id: 32,
      title: "",
      category: "Card Design",
      imageUrl: "/images/card1.webp",
      description: "",
    },
    {
      id: 33,
      title: "",
      category: "Marketing",
      imageUrl: "/images/poster.webp",
      description: "",
    },
    {
      id: 34,
      title: "",
      category: "Marketing",
      imageUrl: "/images/tractor.webp",
      description: "",
    },
    {
      id: 35,
      title: "",
      category: "Marketing",
      imageUrl: "/images/gadu.webp",
      description: "",
    },
    {
      id: 36,
      title: "",
      category: "Card Design",
      imageUrl: "/images/visicard.webp",
      description: "",
    },
    {
      id: 37,
      title: "",
      category: "Card Design",
      imageUrl: "/images/visicard1.webp",
      description: "",
    },
    {
      id: 38,
      title: "",
      category: "Card Design",
      imageUrl: "/images/visicard2.webp",
      description: "",
    },
    {
      id: 39,
      title: "",
      category: "Card Design",
      imageUrl: "/images/visicard3.webp",
      description: "",
    },
    {
      id: 40,
      title: "",
      category: "Marketing",
      imageUrl: "/images/tv.webp",
      description: "",
    },
    {
      id: 41,
      title: "",
      category: "Marketing",
      imageUrl: "/images/tv1.webp",
      description: "",
    },
    {
      id: 42,
      title: "",
      category: "Marketing",
      imageUrl: "/images/school.webp",
      description: "",
    },
    {
      id: 43,
      title: "",
      category: "Marketing",
      imageUrl: "/images/mahi.webp",
      description: "",
    },
    {
      id: 44,
      title: "",
      category: "Marketing",
      imageUrl: "/images/bhar.webp",
      description: "",
    },
  ];

  const categories = [
    "All",
    ...new Set(galleryImages.map((img) => img.category)),
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
            <p
              className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Explore my creative journey through innovative design solutions
              and visual storytelling
            </p>
          </div>
        </section>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border transition-colors duration-300 ${
                selectedCategory === cat
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryImages
                .filter((image) =>
                  selectedCategory === "All"
                    ? true
                    : image.category === selectedCategory
                )
                .map((image, index) => (
                  <Card
                    key={image.id}
                    className="group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 bg-card border border-border animate-fade-in overflow-hidden"
                    style={{ animationDelay: `${0.1 * index}s` }}
                    onClick={() => setSelectedImage(image.imageUrl)}
                  >
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                          src={image.imageUrl}
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
                src={selectedImage}
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
