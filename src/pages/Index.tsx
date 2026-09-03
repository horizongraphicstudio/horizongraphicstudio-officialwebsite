import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientMarquee from "@/components/ClientMarquee";
import BentoGridSection from "@/components/BentoGridSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import PinterestMasonrySection from "@/components/PinterestMasonrySection";
import ProjectEstimator from "@/components/ProjectEstimator";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white relative">
      <Navbar />
      <HeroSection />
      <ClientMarquee />
      <BentoGridSection />
      <ServicesSection />
      <PortfolioSection />
      <div id="pinterest">
        <PinterestMasonrySection />
      </div>
      <ProjectEstimator />
      <PricingSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
