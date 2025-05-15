
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#06b6d4,transparent 70%)] opacity-10" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Get in Touch</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have a question or want to work together? Feel free to reach out using the form below and I'll get back to you as soon as possible.
            </p>
          </div>
          
          <Card className="border border-border/50 bg-secondary/5 backdrop-blur-sm">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="What is this regarding?" 
                    className="bg-background/50 border-border/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message" 
                    rows={6}
                    className="bg-background/50 border-border/50"
                  />
                </div>
                
                <Button type="submit" className="w-full sm:w-auto">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            <Card className="border border-border/50 bg-secondary/5 backdrop-blur-sm">
              <CardContent className="flex items-center p-6 space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-muted-foreground">contact@example.com</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50 bg-secondary/5 backdrop-blur-sm">
              <CardContent className="flex items-center p-6 space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Social</h3>
                  <div className="flex space-x-3 mt-1">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
