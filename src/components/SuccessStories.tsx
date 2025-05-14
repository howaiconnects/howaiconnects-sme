
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SuccessStories = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Owner",
      company: "Sunrise Bakery",
      location: "Portland, OR",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      quote: "The AI marketing automation system increased our online orders by 37% in just two months. I never thought AI was accessible for a small bakery like ours!",
      metrics: {
        before: "15-20 hours per week on marketing",
        after: "2-3 hours per week oversight",
        result: "37% increase in online orders"
      }
    },
    {
      name: "Michael Chen",
      position: "Managing Partner",
      company: "Chen & Associates Law",
      location: "Chicago, IL",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      quote: "The document automation system has transformed how we process client intake forms. What used to take hours now happens in minutes with far fewer errors.",
      metrics: {
        before: "4-5 hours per client onboarding",
        after: "20-30 minutes per client",
        result: "86% reduction in processing time"
      }
    },
    {
      name: "Leila Patel",
      position: "CEO",
      company: "Boutique Bliss",
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      quote: "Our AI chatbot now handles 70% of customer service inquiries automatically. My team can focus on complex issues while routine questions get instant responses 24/7.",
      metrics: {
        before: "8 hour response time (average)",
        after: "Immediate for common questions",
        result: "92% customer satisfaction rating"
      }
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            SME Success Stories
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Real businesses achieving real results with AI automation
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-12 w-12">
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">
                        {testimonial.position}, {testimonial.company}
                      </p>
                      <p className="text-xs text-gray-400">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  </div>
                </div>
                
                <div className="bg-brand-primary/10 p-6">
                  <h4 className="font-medium text-brand-primary mb-3">The Results:</h4>
                  <div className="space-y-2">
                    <div className="flex">
                      <span className="font-medium text-sm w-24">Before:</span>
                      <span className="text-sm">{testimonial.metrics.before}</span>
                    </div>
                    <div className="flex">
                      <span className="font-medium text-sm w-24">After:</span>
                      <span className="text-sm">{testimonial.metrics.after}</span>
                    </div>
                    <div className="flex text-brand-primary">
                      <span className="font-medium text-sm w-24">Impact:</span>
                      <span className="text-sm font-medium">{testimonial.metrics.result}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button className="inline-flex items-center">
            View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
