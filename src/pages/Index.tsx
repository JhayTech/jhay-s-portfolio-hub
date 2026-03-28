import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="gradient-bg min-h-screen">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <ExperienceSection />
    <ProjectsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
