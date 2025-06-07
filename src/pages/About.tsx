
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-gradient animate-fade-in">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Get to know more about my journey and passion for design
            </p>
          </div>
        </section>
        
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
};

export default About;
