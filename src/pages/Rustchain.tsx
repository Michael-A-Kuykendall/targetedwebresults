import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Zap, Shield, Clock, Code, Users, Layers, ArrowRight, Bot, Workflow, Gauge } from "lucide-react";

const Rustchain = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-gradient-subtle overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="relative container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <div className="flex justify-center">
                  <Badge variant="secondary" className="px-4 py-2 mb-4">
                    🦀 Built with Rust
                  </Badge>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Rustchain
                  </span>
                  <br />
                  Community
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground">
                  Production-ready AI agent framework delivering 10-100x performance improvements
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="px-4 py-2">
                  <Bot className="h-4 w-4 mr-2" />
                  AI Agent Framework
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Gauge className="h-4 w-4 mr-2" />
                  97% Faster
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Workflow className="h-4 w-4 mr-2" />
                  DAG-Based Engine
                </Badge>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg" className="group" asChild>
                  <a href="https://github.com/Michael-A-Kuykendall/rustchain-community" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    View on GitHub
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="group" asChild>
                  <a href="https://github.com/Michael-A-Kuykendall/rustchain-community/blob/main/README.md" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Documentation
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                  Why Rustchain Community?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Enterprise AI workflows demand speed, reliability, and compliance.
                  Rustchain Community delivers through production-ready Rust architecture.
                </p>
              </div>

              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  In the competitive AI automation landscape, Python frameworks often hit performance
                  walls when scaling to enterprise requirements. Rustchain Community shatters these
                  limitations by leveraging Rust's memory safety, zero-cost abstractions, and fearless
                  concurrency to deliver 10-100x performance improvements over traditional solutions.
                </p>

                <p>
                  Built from the ground up for mission-critical workflows, Rustchain Community provides
                  a DAG-based mission engine, universal workflow transpilation, and comprehensive
                  compliance validation that makes enterprise AI automation both accessible and
                  audit-ready without compromising on performance or security.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="relative py-20 bg-gradient-subtle overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
          <div className="relative container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Core Features
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Enterprise-grade blockchain infrastructure built for performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center text-white mb-4">
                    <Workflow className="h-6 w-6" />
                  </div>
                  <CardTitle>DAG-Based Mission Engine</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Advanced workflow engine supporting 12+ step types with parallel execution,
                    dynamic parameter resolution, and sub-second mission completion (1ms average).
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white mb-4">
                    <Bot className="h-6 w-6" />
                  </div>
                  <CardTitle>Universal AI Agent Framework</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Bidirectional workflow transpilation across platforms like LangChain, Airflow,
                    and Kubernetes with extensible plugin system and 748 comprehensive tests.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white mb-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <CardTitle>Enterprise Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Built-in compliance validation for SOX, GDPR, and HIPAA with comprehensive
                    audit trails, role-based access control, and secure policy enforcement.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white mb-4">
                    <Gauge className="h-6 w-6" />
                  </div>
                  <CardTitle>Extreme Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    97% faster than Python frameworks with minimal memory usage (2.8MB),
                    zero error rate in benchmarks, and sub-second execution times.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center text-white mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <CardTitle>Developer Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comprehensive CLI tools, extensive documentation, and intuitive APIs that
                    reduce AI workflow complexity without sacrificing performance or flexibility.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white mb-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <CardTitle>Production Ready</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Battle-tested components, comprehensive monitoring, and enterprise-grade
                    operational tools designed for mission-critical AI workflow deployments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technical Deep Dive */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                  Technical Architecture
                </h2>
                <p className="text-lg text-muted-foreground">
                  A deep dive into the engineering principles that power Rustchain
                </p>
              </div>

              <div className="space-y-8">
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-xl">Consensus Layer</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Rustchain implements a hybrid consensus mechanism combining the security of
                      Byzantine Fault Tolerance with the efficiency of Delegated Proof of Stake.
                      The consensus layer is designed for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Sub-second block finality for enterprise applications</li>
                      <li>Automatic validator selection and rotation</li>
                      <li>Economic incentive alignment through staking mechanisms</li>
                      <li>Fork resolution with mathematically provable guarantees</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-xl">Execution Environment</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Smart contracts in Rustchain execute within a sandboxed WebAssembly runtime,
                      providing near-native performance while maintaining security isolation:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>WebAssembly compilation with built-in gas metering</li>
                      <li>Formal verification integration for critical contracts</li>
                      <li>Multi-language support (Rust, AssemblyScript, C++)</li>
                      <li>Deterministic execution across all network nodes</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-xl">Network Layer</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      The networking stack is built on libp2p with custom optimizations for
                      blockchain-specific communication patterns:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Gossip protocols optimized for block propagation</li>
                      <li>Adaptive peer discovery and connection management</li>
                      <li>Built-in DDoS protection and rate limiting</li>
                      <li>Support for both public and permissioned network topologies</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="relative py-20 bg-gradient-subtle overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
          <div className="relative container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Enterprise Applications
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Real-world use cases where Rustchain excels
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle>Supply Chain Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Track products from manufacturing to consumer with immutable audit trails,
                    automated compliance checking, and real-time visibility across complex
                    multi-party supply chains.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Traceability</Badge>
                    <Badge variant="outline" className="text-xs">Compliance</Badge>
                    <Badge variant="outline" className="text-xs">Transparency</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle>Digital Identity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Self-sovereign identity solutions with privacy-preserving credential
                    verification, decentralized authentication, and seamless integration
                    with existing enterprise systems.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Privacy</Badge>
                    <Badge variant="outline" className="text-xs">Decentralized</Badge>
                    <Badge variant="outline" className="text-xs">Interoperable</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle>Financial Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    High-frequency trading, cross-border payments, and automated market making
                    with the performance and regulatory compliance required for institutional
                    financial applications.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">High Performance</Badge>
                    <Badge variant="outline" className="text-xs">Regulatory</Badge>
                    <Badge variant="outline" className="text-xs">Institutional</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle>IoT & Edge Computing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Secure device communication, automated micropayments, and distributed
                    computing coordination for Internet of Things deployments requiring
                    blockchain-level security guarantees.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">IoT</Badge>
                    <Badge variant="outline" className="text-xs">Micropayments</Badge>
                    <Badge variant="outline" className="text-xs">Edge Computing</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 bg-background overflow-hidden">
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="relative container mx-auto px-6">
            <div className="text-center space-y-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                Ready to Build with Rustchain?
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Join the growing ecosystem of developers building the next generation of
                blockchain applications with production-grade infrastructure.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg" className="group" asChild>
                  <a href="https://github.com/Michael-A-Kuykendall/rustchain-community" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>

                <Button variant="outline" size="lg" className="group" asChild>
                  <a href="https://github.com/Michael-A-Kuykendall/rustchain-community" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    View Source
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

export default Rustchain;