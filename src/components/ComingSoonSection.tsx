import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Star, Users, Rocket } from "lucide-react";

const ComingSoonSection = () => {
  const products = [
    {
      title: "Developer Tools Extension",
      description: "Advanced debugging and development utilities for modern web development.",
      icon: <Clock className="h-8 w-8" />,
      status: "In Development",
      eta: "Q2 2024"
    },
    {
      title: "Performance Optimizer",
      description: "Real-time website performance analysis and optimization suggestions.",
      icon: <Star className="h-8 w-8" />,
      status: "Planning",
      eta: "Q3 2024"
    },
    {
      title: "Team Collaboration Suite",
      description: "Seamless browser-based collaboration tools for development teams.",
      icon: <Users className="h-8 w-8" />,
      status: "Research",
      eta: "Q4 2024"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Rocket className="h-4 w-4" />
            Coming Soon
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Revolutionary Extensions
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              In the Pipeline
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're working on cutting-edge solutions that will transform how you develop, 
            optimize, and collaborate on web projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {product.icon}
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
                
                <div className="space-y-3 pt-4 border-t border-border/50">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-primary">
                      {product.status}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      ETA: {product.eta}
                    </span>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Get Updates
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="glow" size="lg" className="shadow-lg">
            Join Our Beta Program
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;