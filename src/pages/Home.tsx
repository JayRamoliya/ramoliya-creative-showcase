
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <HeroSection />
        
        {/* Quick Navigation Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-gradient">
              Explore My Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <Link to="/gallery">
                <Button className="w-full h-20 text-lg hover:scale-105 transition-transform">
                  Gallery
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="w-full h-20 text-lg hover:scale-105 transition-transform">
                  About Me
                </Button>
              </Link>
              <Link to="/work">
                <Button variant="outline" className="w-full h-20 text-lg hover:scale-105 transition-transform">
                  My Work
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="w-full h-20 text-lg hover:scale-105 transition-transform">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
