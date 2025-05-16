
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CourseDetail = () => {
  const { courseSlug } = useParams();
  
  // This would be replaced with actual data fetching based on the courseSlug
  const courseData = {
    title: courseSlug?.replace(/-/g, ' ').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()),
    description: "This course is currently under development. Check back soon for more details!",
    price: "$297 - $497",
    duration: "4-8 weeks",
    level: "Beginner to Advanced",
    enrollmentStatus: "Coming Soon"
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>{courseData.title} | HowAIConnects</title>
        <meta name="description" content={`Learn about ${courseData.title} with our comprehensive course designed for small and medium-sized businesses.`} />
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{courseData.title}</h1>
            
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Card className="p-6">
                  <h2 className="text-xl font-bold mb-4">Course Overview</h2>
                  <p className="text-gray-600 mb-6">{courseData.description}</p>
                  
                  <div className="bg-brand-primary/5 p-4 rounded-md">
                    <p className="text-gray-700">This course page is currently under development. Please check back later for full course details, curriculum, and enrollment options.</p>
                  </div>
                </Card>
              </div>
              
              <div>
                <Card className="p-6">
                  <h2 className="text-xl font-bold mb-4">Course Details</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Price:</span>
                      <span className="font-medium">{courseData.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-medium">{courseData.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Level:</span>
                      <span className="font-medium">{courseData.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Status:</span>
                      <span className="font-medium">{courseData.enrollmentStatus}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6">Join Waitlist</Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
