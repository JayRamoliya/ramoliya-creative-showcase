
import { Mail, Instagram, Youtube } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields before sending.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create WhatsApp message
      const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Message:* ${encodeURIComponent(formData.message)}%0A%0ASent from Jay Ramoliya Portfolio`;
      
      // WhatsApp API URL
      const whatsappURL = `https://wa.me/916353416521?text=${whatsappMessage}`;
      
      // Open WhatsApp in new window
      window.open(whatsappURL, '_blank');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      toast({
        title: "Success!",
        description: "Your message has been prepared for WhatsApp. The WhatsApp chat window should open shortly.",
      });

    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "There was an error preparing your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gradient animate-fade-in">
            Let's Connect with Jay Ramoliya
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Interested in collaborating? Reach out via WhatsApp!
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
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                  required
                />
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Preparing WhatsApp Message...' : 'Send via WhatsApp'}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in-right" style={{ animationDelay: '0.5s' }}>
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-2xl font-display font-semibold mb-6 text-foreground">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">Email</p>
                      <p className="text-foreground">jay@ramoliya.design</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Instagram className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">Instagram</p>
                      <p className="text-foreground">@jayramoliya.design</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Youtube className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">YouTube</p>
                      <p className="text-foreground">Jay Ramoliya Creative</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-muted-foreground text-center">
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
