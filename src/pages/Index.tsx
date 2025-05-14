
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import ServicesShowcase from "@/components/ServicesShowcase";
import SuccessStories from "@/components/SuccessStories";
import EducationalOfferings from "@/components/EducationalOfferings";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProblemSolution />
        <ServicesShowcase />
        <SuccessStories />
        <EducationalOfferings />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
