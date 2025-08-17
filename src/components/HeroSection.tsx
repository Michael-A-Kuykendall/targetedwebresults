import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Layers } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-subtle overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Targeted
                </span>
                <br />
                Web Results
                <span className="text-primary">.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Cutting-edge software extensions
                <br />
                <span className="text-primary font-semibold">coming soon</span>
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              We're building the next generation of powerful browser extensions and development tools. 
              Stay tuned for revolutionary solutions that will transform your workflow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Get Notified
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            
            {/* Features preview */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Extensions</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Performance</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Integration</p>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative lg:order-last">
            <div className="relative animate-float">
              <img
                src={heroImage}
                alt="Cutting-edge software development visualization"
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;