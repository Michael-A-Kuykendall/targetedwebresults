import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ComingSoonSection from "@/components/ComingSoonSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <div id="products">
          <ComingSoonSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
