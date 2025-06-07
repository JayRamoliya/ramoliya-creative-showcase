
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Mail, Instagram, Youtube, ArrowRight } from 'lucide-react';

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

        {/* Featured Work Images Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gradient">
                Featured Work
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A glimpse into my creative process and design solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-lg aspect-[4/3] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop" 
                  alt="Design Project 1"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">Creative Design</h3>
                    <p className="text-sm opacity-90">Digital Art & Branding</p>
                  </div>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg aspect-[4/3] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop" 
                  alt="Design Project 2"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">Tech Solutions</h3>
                    <p className="text-sm opacity-90">UI/UX Design</p>
                  </div>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg aspect-[4/3] hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop" 
                  alt="Design Project 3"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">Brand Identity</h3>
                    <p className="text-sm opacity-90">Logo & Visual Design</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/gallery">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
                  View Full Gallery
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gradient">
                My Creative Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From concept to creation, here's how I bring ideas to life
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Discovery & Research</h3>
                    <p className="text-muted-foreground">Understanding your vision and requirements to create the perfect design strategy.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Concept Development</h3>
                    <p className="text-muted-foreground">Brainstorming and sketching initial concepts that align with your brand identity.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Design & Refinement</h3>
                    <p className="text-muted-foreground">Creating detailed designs with multiple iterations based on your feedback.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Final Delivery</h3>
                    <p className="text-muted-foreground">Delivering polished, high-quality designs ready for implementation.</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop" 
                  alt="Creative Workspace"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Redesigned Get in Touch Section */}
        <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gradient">
                  Get in Touch
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Ready to start your next project? Let's create something amazing together!
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-8">
                  <div className="bg-card border border-border rounded-lg p-8">
                    <h3 className="text-2xl font-display font-semibold mb-6 text-foreground">
                      Let's Connect
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                          <Mail className="text-primary" size={20} />
                        </div>
                        <div>
                          <p className="text-muted-foreground text-sm">Email</p>
                          <p className="text-foreground font-medium">jay@ramoliya.design</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                          <Instagram className="text-primary" size={20} />
                        </div>
                        <div>
                          <p className="text-muted-foreground text-sm">Instagram</p>
                          <p className="text-foreground font-medium">@jayramoliya.design</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                          <Youtube className="text-primary" size={20} />
                        </div>
                        <div>
                          <p className="text-muted-foreground text-sm">YouTube</p>
                          <p className="text-foreground font-medium">Jay Ramoliya Creative</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-3 text-foreground">Quick Response</h4>
                    <p className="text-muted-foreground mb-4">
                      I typically respond to messages within 24 hours. For urgent projects, feel free to reach out via WhatsApp.
                    </p>
                    <a 
                      href="https://wa.me/916353416521" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      WhatsApp: +91 6353416521
                      <ArrowRight className="ml-2" size={16} />
                    </a>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-2xl font-display font-semibold mb-6 text-foreground">
                    Start Your Project
                  </h3>
                  
                  <Link to="/contact">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg mb-6">
                      Open Contact Form
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                  
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Free consultation for new projects</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Custom design solutions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Fast turnaround times</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Unlimited revisions until satisfied</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
