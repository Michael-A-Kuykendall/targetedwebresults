import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, GitFork, Github, Eye, Zap, Database, Camera, Leaf, Phone, Mail } from "lucide-react";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Shimmy",
      description: "The Privacy-First OpenAI Alternative - 5.1MB single-binary Rust inference server. Complete, live, and the Ollama alternative developers actually want. FREE forever, no asterisks.",
      icon: <Zap className="h-8 w-8" />,
      stats: {
        stars: 2434,
        forks: 165,
        language: "Rust"
      },
      tags: ["Rust", "OpenAI Compatible", "GGUF", "Zero-Config", "5MB Binary", "FREE Forever"],
      status: "Production",
      githubUrl: "https://github.com/Michael-A-Kuykendall/shimmy",
      highlights: [
        "2.4k stars in 12 days",
        "Featured on Hacker News front page",
        "Single 5MB binary",
        "OpenAI API compatible",
        "Python-free Rust implementation"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "ContextLite",
      description: "Database Freedom Platform - Live and serving retail redistributors. 27,000x faster than vector databases with SMT-powered mathematical search optimization across any database type.",
      icon: <Database className="h-8 w-8" />,
      stats: {
        stars: 4,
        forks: 2,
        language: "Go"
      },
      tags: ["Go", "SMT Solvers", "Database Agnostic", "Production", "Enterprise Clients"],
      status: "Live Production",
      githubUrl: "https://github.com/Michael-A-Kuykendall/contextlite",
      highlights: [
        "27,000x faster than vector databases",
        "Serving enterprise clients",
        "SMT-powered optimization",
        "Database agnostic",
        "One-time purchase vs recurring fees"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "CrabCamera",
      description: "Professional Desktop Camera Studio - Complete v0.3.0 Tauri plugin with MediaFoundation controls, WebRTC preview, auto-capture quality validation. The invisible infrastructure that makes camera apps just work.",
      icon: <Camera className="h-8 w-8" />,
      stats: {
        stars: 22,
        forks: 4,
        language: "HTML"
      },
      tags: ["Rust", "Tauri", "Professional Controls", "Cross-Platform", "Production Ready", "63 Tests"],
      status: "v0.3.0",
      githubUrl: "https://github.com/Michael-A-Kuykendall/crabcamera",
      highlights: [
        "Professional desktop camera controls",
        "WebRTC live preview",
        "Quality validation automation",
        "Cross-platform support",
        "63 comprehensive tests"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Botanica",
      description: "Professional botanical cultivation database with AI-powered plant insights. Advanced data modeling for agriculture, greenhouse management, and botanical research.",
      icon: <Leaf className="h-8 w-8" />,
      stats: {
        stars: 3,
        forks: 0,
        language: "Rust"
      },
      tags: ["Rust", "AI Insights", "Data Model", "Open Source", "Agriculture"],
      status: "Active Development",
      githubUrl: "https://github.com/Michael-A-Kuykendall/botanica",
      highlights: [
        "AI-powered plant insights",
        "Professional cultivation tracking",
        "Scientific nomenclature support",
        "Greenhouse management tools",
        "Botanical research platform"
      ],
      color: "from-green-500 to-emerald-500"
    }
  ];

  const otherProjects = [
    {
      title: "Tinto",
      description: "Workspace Tint: Minimal deterministic workspace color extension for VS Code",
      language: "TypeScript",
      githubUrl: "https://github.com/Michael-A-Kuykendall/tinto"
    },
    {
      title: "Punch Community",
      description: "The fastest code analysis tool built with Rust - Community Edition",
      language: "Go",
      githubUrl: "https://github.com/Michael-A-Kuykendall/punch-community"
    },
    {
      title: "Scoop Bucket",
      description: "Scoop bucket for ContextLite packages",
      language: "PowerShell",
      githubUrl: "https://github.com/Michael-A-Kuykendall/scoop-bucket"
    },
    {
      title: "Homebrew Tap",
      description: "Homebrew tap for ContextLite packages",
      language: "Ruby",
      githubUrl: "https://github.com/Michael-A-Kuykendall/homebrew-tap"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-gradient-subtle overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="relative container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
                  Featured{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Projects
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground">
                  Open source projects making a real-world impact
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="px-4 py-2">
                  🦀 Rust-First
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  🚀 Production Ready
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  🌟 High Impact
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  🔧 Developer Tools
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid gap-12">
              {featuredProjects.map((project, index) => (
                <Card key={project.title} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-r ${project.color} h-2`}></div>
                    <div className="p-8">
                      <div className="grid lg:grid-cols-3 gap-8 items-start">
                        {/* Project Info */}
                        <div className="lg:col-span-2 space-y-6">
                          <div className="flex items-start gap-4">
                            <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                              {project.icon}
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-3">
                                <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                                <Badge variant="outline">{project.status}</Badge>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Star className="h-4 w-4" />
                                  {project.stats.stars.toLocaleString()}
                                </div>
                                <div className="flex items-center gap-1">
                                  <GitFork className="h-4 w-4" />
                                  {project.stats.forks}
                                </div>
                                <div className="flex items-center gap-1">
                                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                                  {project.stats.language}
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex gap-4">
                            <Button variant="hero" className="group" asChild>
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                View on GitHub
                                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </a>
                            </Button>
                            <Button variant="outline" className="group" asChild>
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Eye className="mr-2 h-4 w-4" />
                                Live Demo
                                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </a>
                            </Button>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-foreground">Key Highlights</h4>
                          <div className="space-y-3">
                            {project.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-muted-foreground">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Other Projects */}
        <section className="relative py-20 bg-gradient-subtle overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="relative container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Other Projects
              </h2>
              <p className="text-xl text-muted-foreground">
                Additional tools and utilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherProjects.map((project) => (
                <Card key={project.title} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge variant="outline" className="w-fit text-xs">
                      {project.language}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                    <Button variant="outline" size="sm" className="w-full group" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 bg-background overflow-hidden">
          {/* Background decoration */}
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="relative container mx-auto px-6">
            <div className="text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Interested in Collaborating?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                These projects represent just a fraction of what's possible. Let's build 
                something amazing together.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg" className="group" asChild>
                  <a href="tel:+18722626499">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (872) 262-6499
                  </a>
                </Button>
                
                <Button variant="hero" size="lg" className="group" asChild>
                  <a href="mailto:michaelallenkuykendall@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                  </a>
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
      </main>
      <Footer />
    </div>
  );
};

export default Projects;