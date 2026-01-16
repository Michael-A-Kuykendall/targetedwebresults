import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Layers } from "lucide-react";
import { Link } from "react-router-dom";
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
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Targeted
                </span>
                <br />
                Web Results
                <span className="text-primary">.</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-medium">
                Cutting-edge open source projects
                <br />
                <span className="text-primary font-semibold">built with Rust</span>
              </p>
            </div>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Production-ready systems and tools that developers love. From AI infrastructure 
              to developer utilities, explore high-performance solutions built with modern technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group" asChild>
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">
                  About the Founder
                </Link>
              </Button>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-border">
              <div className="text-center space-y-2">
                <div className="text-xl sm:text-2xl font-bold text-primary">3.5k+</div>
                <p className="text-xs sm:text-sm font-medium text-muted-foreground">GitHub Stars</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-xl sm:text-2xl font-bold text-primary">Live</div>
                <p className="text-xs sm:text-sm font-medium text-muted-foreground">Production Systems</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-xl sm:text-2xl font-bold text-primary">20+</div>
                <p className="text-xs sm:text-sm font-medium text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
          
          {/* Code Terminal Mockup */}
          <div className="relative lg:order-last">
            <div className="relative animate-float">
              <div className="bg-gray-900 rounded-2xl shadow-elegant overflow-hidden">
                {/* Terminal Header */}
                <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-400 text-sm ml-4">~/projects</div>
                </div>
                
                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm space-y-2">
                  <div className="text-green-400">$ cargo build --release</div>
                  <div className="text-gray-400">   Compiling shimmy v0.3.0</div>
                  <div className="text-blue-400">   Finished release [optimized] target(s)</div>
                  <div className="text-gray-500 mt-4"></div>
                  <div className="text-green-400">$ ./shimmy --version</div>
                  <div className="text-white">shimmy 0.3.0 - OpenAI Compatible Inference</div>
                  <div className="text-gray-500 mt-4"></div>
                  <div className="text-green-400">$ git log --oneline -3</div>
                  <div className="text-yellow-300">a1b2c3d feat: 3.5k+ stars milestone</div>
                  <div className="text-yellow-300">d4e5f6g fix: performance optimizations</div>
                  <div className="text-yellow-300">g7h8i9j docs: production deployment guide</div>
                  <div className="text-gray-500 mt-4"></div>
                  <div className="text-green-400 animate-pulse">$ ▊</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
            </div>
            
            {/* Floating code elements */}
            <div className="absolute -top-4 -left-4 bg-blue-500/20 text-blue-400 px-3 py-1 rounded text-xs font-mono animate-pulse">
              🦀 Rust
            </div>
            <div className="absolute -bottom-4 -right-4 bg-green-500/20 text-green-400 px-3 py-1 rounded text-xs font-mono animate-pulse delay-1000">
              Production Ready
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;