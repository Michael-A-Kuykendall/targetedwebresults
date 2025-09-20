import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Code, Zap, Users, Mail, Linkedin, Twitter, Phone } from "lucide-react";

const About = () => {
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
                  About the{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Founder
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground">
                  Meet Michael A. Kuykendall
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="px-4 py-2">
                  🦀 Rustacean
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  🎖️ USAF Veteran
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  🚀 AI Infrastructure
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  🏗️ Systems Architect
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-16 items-start">
              {/* Profile Picture */}
              <div className="lg:col-span-1 flex justify-center">
                <div className="relative">
                  <img
                    src="https://github.com/Michael-A-Kuykendall.png"
                    alt="Michael A. Kuykendall"
                    className="w-80 h-80 rounded-2xl object-cover shadow-elegant"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="lg:col-span-1 space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Senior Full Stack Software Engineer
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    With over 20 years of experience as a software engineer, Michael A. Kuykendall 
                    has built a reputation for creating high-performance, production-ready systems 
                    that solve real-world problems at scale.
                  </p>
                  <p>
                    A proud United States Air Force veteran who served with distinction as a Staff Sergeant during 
                    the 9/11 era, Michael completed his military service with an honorable discharge. 
                    He brings military precision and discipline to software engineering, where his unique 
                    combination of service experience and technical expertise has shaped his approach 
                    to building reliable, secure systems.
                  </p>
                  <p>
                    A graduate of the University of Maryland College Park (2000-2003), Michael 
                    now operates from the Kansas City Metropolitan Area, combining formal education 
                    with practical military and industry experience. As a devoted husband and father, 
                    he balances his passion for cutting-edge technology with family life, bringing 
                    the same dedication to both his personal relationships and professional projects.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-1 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Current Roles</h3>
                    <p className="text-muted-foreground mb-4">
                      Lead Drupal Developer at NIS (Lenexa, KS) while simultaneously building 
                      the next generation of Rust-based AI tooling and infrastructure through 
                      Targeted Web Results LLC.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Code className="h-4 w-4 text-primary" />
                        <span className="text-sm">Lead Drupal Developer at NIS</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-primary" />
                        <span className="text-sm">Shimmy Console (In Development)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Code className="h-4 w-4 text-primary" />
                        <span className="text-sm">Secret Rust LLM Toolchain</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Specializations</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="text-sm">Rust Development</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Code className="h-4 w-4 text-primary" />
                        <span className="text-sm">Go Programming</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-primary" />
                        <span className="text-sm">AI Infrastructure</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm">Systems Architecture</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="relative py-20 bg-gradient-subtle overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="relative container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Notable Achievements
              </h2>
              <p className="text-xl text-muted-foreground">
                Building impactful software that developers love
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">2.4k+</div>
                  <div className="text-lg font-semibold mb-2">GitHub Stars</div>
                  <div className="text-sm text-muted-foreground">
                    Shimmy gained 2,400+ stars in just 12 days
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">542</div>
                  <div className="text-lg font-semibold mb-2">Commits This Year</div>
                  <div className="text-sm text-muted-foreground">
                    Active open source development with 15-day streak
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-lg font-semibold mb-2">Years Experience</div>
                  <div className="text-sm text-muted-foreground">
                    Two decades of software engineering excellence
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">Live</div>
                  <div className="text-lg font-semibold mb-2">Production Systems</div>
                  <div className="text-sm text-muted-foreground">
                    ContextLite serving enterprise clients
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Technology Expertise
              </h2>
              <p className="text-xl text-muted-foreground">
                Building with modern, performance-focused technologies
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Core Languages</h3>
                <div className="space-y-2">
                  <Badge variant="outline">🦀 Rust</Badge>
                  <Badge variant="outline">Go</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">PHP</Badge>
                  <Badge variant="outline">C++</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Web Development</h3>
                <div className="space-y-2">
                  <Badge variant="outline">Drupal</Badge>
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">HTML/CSS</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">REST APIs</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">AI & Performance</h3>
                <div className="space-y-2">
                  <Badge variant="outline">GGUF</Badge>
                  <Badge variant="outline">LLaMA</Badge>
                  <Badge variant="outline">OpenAI API</Badge>
                  <Badge variant="outline">SMT Solvers</Badge>
                  <Badge variant="outline">HuggingFace</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Infrastructure</h3>
                <div className="space-y-2">
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">AWS</Badge>
                  <Badge variant="outline">Linux</Badge>
                  <Badge variant="outline">GitHub Actions</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">MySQL</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="relative py-20 bg-gradient-subtle overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="relative container mx-auto px-6">
            <div className="text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Let's Connect
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Interested in collaborating on cutting-edge projects or discussing AI infrastructure? 
                Let's connect and build the future together.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg" className="group" asChild>
                  <a href="mailto:michaelallenkuykendall@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Mail className="mr-2 h-5 w-5" />
                    Email
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                
                <Button variant="hero" size="lg" className="group" asChild>
                  <a href="tel:+18722626499">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (872) 262-6499
                  </a>
                </Button>
                
                <Button variant="outline" size="lg" className="group" asChild>
                  <a href="https://www.linkedin.com/in/makuykendall/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                
                <Button variant="outline" size="lg" className="group" asChild>
                  <a href="https://x.com/_MikeKuykendall" target="_blank" rel="noopener noreferrer">
                    <Twitter className="mr-2 h-5 w-5" />
                    Twitter
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

export default About;