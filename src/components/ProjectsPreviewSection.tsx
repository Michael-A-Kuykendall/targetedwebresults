import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, GitFork, Github, ExternalLink, Zap, Database, Camera, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsPreviewSection = () => {
  const featuredProjects = [
    {
      title: "Shimmy",
      description: "Privacy-first OpenAI alternative. 5.1MB Rust inference server with 3.5k+ stars.",
      icon: <Zap className="h-6 w-6" />,
      stats: {
        stars: 3534,
        forks: 262,
        language: "Rust"
      },
      status: "Production",
      color: "from-orange-500 to-red-500",
      githubUrl: "https://github.com/Michael-A-Kuykendall/shimmy"
    },
    {
      title: "Rustchain Community",
      description: "Production-ready AI agent framework. 97% faster than Python with DAG-based workflows.",
      icon: <Zap className="h-6 w-6" />,
      stats: {
        stars: 17,
        forks: 3,
        language: "Rust"
      },
      status: "Production Ready",
      color: "from-amber-500 to-orange-500",
      githubUrl: "https://github.com/Michael-A-Kuykendall/rustchain-community"
    },
    {
      title: "Auxide",
      description: "Real-time-safe audio graph kernel. Zero allocations in processing paths, deterministic output.",
      icon: <Zap className="h-6 w-6" />,
      stats: {
        stars: 9,
        forks: 1,
        language: "Rust"
      },
      status: "Production Ready",
      color: "from-purple-500 to-indigo-500",
      githubUrl: "https://github.com/Michael-A-Kuykendall/auxide"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Github className="h-4 w-4" />
            Open Source Projects
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Featured
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Production-ready tools and systems built with Rust, Go, and modern technologies. 
            These projects are actively maintained and used by developers worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <Card key={project.title} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className={`bg-gradient-to-r ${project.color} h-2`}></div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                      {project.icon}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {project.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {project.stats.stars.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="h-3 w-3" />
                        {project.stats.forks}
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        {project.stats.language}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1 group" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Projects Teaser */}
        <div className="text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              Plus Many More Projects
            </h3>
            <p className="text-muted-foreground">
              From VS Code extensions to botanical databases, explore the complete portfolio 
              of tools, utilities, and production systems.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" className="group" asChild>
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="group" asChild>
              <a href="https://github.com/Michael-A-Kuykendall" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                Follow on GitHub
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreviewSection;