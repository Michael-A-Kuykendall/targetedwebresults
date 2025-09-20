import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MessageSquare, TrendingUp, Users } from "lucide-react";

const Media = () => {
  const pressItems = [
    {
      title: "Shimmy: The Rust-based OpenAI Alternative That Hit 2.4k Stars in 12 Days",
      platform: "Hacker News",
      date: "2024",
      description: "Michael's Shimmy project gained massive traction on Hacker News, becoming a front-page story and attracting thousands of developers seeking a privacy-first AI inference solution.",
      url: "https://news.ycombinator.com/item?id=39726068", // Placeholder - replace with actual URL
      type: "Discussion",
      engagement: "300+ comments",
      color: "from-orange-500 to-red-500"
    }
  ];

  const upcomingPlatforms = [
    {
      platform: "Reddit",
      description: "Planning posts about Rust development, AI infrastructure, and open source project launches",
      communities: ["r/rust", "r/programming", "r/MachineLearning", "r/opensource"],
      color: "from-red-500 to-orange-500"
    },
    {
      platform: "Dev.to",
      description: "Technical articles about Rust performance, AI tooling, and systems architecture",
      topics: ["Rust tutorials", "AI infrastructure", "Performance optimization"],
      color: "from-blue-500 to-cyan-500"
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
                  Media &{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Press
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground">
                  Coverage, discussions, and community engagement
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="px-4 py-2">
                  📰 Press Coverage
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  💬 Community Discussions
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  🚀 Project Launches
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Coverage */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Featured Coverage
              </h2>
              <p className="text-xl text-muted-foreground">
                When open source projects make waves
              </p>
            </div>

            <div className="space-y-8">
              {pressItems.map((item, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-r ${item.color} h-2`}></div>
                    <div className="p-8">
                      <div className="grid lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-2 space-y-4">
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                              <TrendingUp className="h-6 w-6" />
                            </div>
                            <div className="space-y-2">
                              <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4" />
                                  {item.date}
                                </div>
                                <div className="flex items-center gap-1">
                                  <MessageSquare className="h-4 w-4" />
                                  {item.engagement}
                                </div>
                                <Badge variant="outline" className="text-xs">
                                  {item.platform}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                          
                          <Button variant="hero" className="group" asChild>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                              View Discussion
                              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Engagement */}
        <section className="relative py-20 bg-gradient-subtle overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="relative container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Upcoming Platforms
              </h2>
              <p className="text-xl text-muted-foreground">
                Where we'll be sharing next
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {upcomingPlatforms.map((platform, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                      <Users className="h-8 w-8" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3">{platform.platform}</h3>
                    <p className="text-muted-foreground mb-4">{platform.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Focus Areas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {(platform.communities || platform.topics)?.map((item, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact for Media */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Media Inquiries
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Interested in covering our open source projects or discussing technical innovations? 
                Let's connect.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg" className="group" asChild>
                  <a href="mailto:michaelallenkuykendall@gmail.com">
                    Get in Touch
                    <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                
                <Button variant="outline" size="lg" className="group" asChild>
                  <a href="https://github.com/Michael-A-Kuykendall" target="_blank" rel="noopener noreferrer">
                    View Projects
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

export default Media;