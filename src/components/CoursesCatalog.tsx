
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const CoursesCatalog = () => {
  const courses = [
    {
      title: "AI for SME Essentials",
      description: "A comprehensive introduction to AI technologies and their applications for small businesses",
      level: "Beginner",
      duration: "4 weeks",
      modules: 5,
      price: "$297",
      popular: true,
      link: "/courses/ai-for-sme-essentials"
    },
    {
      title: "Marketing Automation Masterclass",
      description: "Learn how to implement AI-driven marketing automation for your small business",
      level: "Intermediate",
      duration: "6 weeks",
      modules: 8,
      price: "$397",
      popular: false,
      link: "/courses/marketing-automation-masterclass"
    },
    {
      title: "AI Implementation Workshop",
      description: "Hands-on workshop series with guided implementation of AI solutions for your business",
      level: "Advanced",
      duration: "8 weeks",
      modules: 10,
      price: "$497",
      popular: false,
      link: "/courses/ai-implementation-workshop"
    },
    {
      title: "Customer Service AI Systems",
      description: "Set up and manage AI-powered customer service solutions for your business",
      level: "Intermediate",
      duration: "5 weeks",
      modules: 6,
      price: "$347",
      popular: false,
      link: "/courses/customer-service-ai-systems"
    },
    {
      title: "Data Analytics for SMEs",
      description: "Learn how to leverage AI for business intelligence and data-driven decision making",
      level: "Intermediate",
      duration: "6 weeks",
      modules: 7,
      price: "$397",
      popular: false,
      link: "/courses/data-analytics-for-smes"
    },
    {
      title: "AI Tools Quick Start",
      description: "Fast-track introduction to the most useful AI tools for small business owners",
      level: "Beginner",
      duration: "2 weeks",
      modules: 4,
      price: "$197",
      popular: false,
      link: "/courses/ai-tools-quick-start"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl gradient-text">
            Platform Engineering Curriculum
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Advanced technical training for building next-generation AI orchestration platforms
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <Card key={index} className="relative shadow-lg hover:shadow-xl transition-shadow duration-300">
              {course.popular && (
                <div className="absolute -top-4 -right-4">
                  <Badge className="bg-brand-primary font-medium">Most Popular</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Level:</span>
                    <span className="text-sm font-medium">{course.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Duration:</span>
                    <span className="text-sm font-medium">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Modules:</span>
                    <span className="text-sm font-medium">{course.modules}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-2xl font-bold text-brand-primary">{course.price}</span>
                <Link to={course.link}>
                  <Button variant="outline">View Course</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesCatalog;
