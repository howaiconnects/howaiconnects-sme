
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoursesBanner from "@/components/CoursesBanner";
import CoursesCatalog from "@/components/CoursesCatalog";
import EnrollmentCTA from "@/components/EnrollmentCTA";

const Courses = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>AI Education & Training Courses for SMEs | HowAIConnects</title>
        <meta name="description" content="Learn how to implement AI in your small business with our practical, jargon-free courses designed for non-technical business owners." />
        <meta name="keywords" content="AI courses for SMEs, AI training, business automation courses, SME AI education, online AI courses" />
        <link rel="canonical" href="https://howaiconnects.com/courses" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "AI Education & Training for SMEs",
              "description": "Comprehensive educational AI courses designed specifically for small and medium-sized business owners and managers.",
              "provider": {
                "@type": "Organization",
                "name": "HowAIConnects"
              }
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        <CoursesBanner />
        <CoursesCatalog />
        <EnrollmentCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
