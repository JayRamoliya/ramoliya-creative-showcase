
import { Mail, Instagram, Youtube } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-portfolio-dark-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gradient animate-fade-in">
            Let's Connect with Jay Ramoliya
          </h2>
          
          <p className="text-xl text-portfolio-text-secondary mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Interested in collaborating? Reach out!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-portfolio-dark-secondary border-white/20 text-portfolio-text-primary placeholder:text-portfolio-text-secondary"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-portfolio-dark-secondary border-white/20 text-portfolio-text-primary placeholder:text-portfolio-text-secondary"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-portfolio-dark-secondary border border-white/20 rounded-md text-portfolio-text-primary placeholder:text-portfolio-text-secondary focus:outline-none focus:ring-2 focus:ring-portfolio-accent"
                />
                <Button 
                  type="submit"
                  className="w-full bg-portfolio-accent hover:bg-portfolio-accent-hover text-white"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in-right" style={{ animationDelay: '0.5s' }}>
              <div className="glass-card p-8">
                <h3 className="text-2xl font-display font-semibold mb-6 text-portfolio-text-primary">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-portfolio-accent/20 rounded-full flex items-center justify-center">
                      <Mail className="text-portfolio-accent" size={20} />
                    </div>
                    <div>
                      <p className="text-portfolio-text-secondary text-sm">Email</p>
                      <p className="text-portfolio-text-primary">jay@ramoliya.design</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-portfolio-accent/20 rounded-full flex items-center justify-center">
                      <Instagram className="text-portfolio-accent" size={20} />
                    </div>
                    <div>
                      <p className="text-portfolio-text-secondary text-sm">Instagram</p>
                      <p className="text-portfolio-text-primary">@jayramoliya.design</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-portfolio-accent/20 rounded-full flex items-center justify-center">
                      <Youtube className="text-portfolio-accent" size={20} />
                    </div>
                    <div>
                      <p className="text-portfolio-text-secondary text-sm">YouTube</p>
                      <p className="text-portfolio-text-primary">Jay Ramoliya Creative</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-portfolio-text-secondary text-center">
                    Let's create something amazing together!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
