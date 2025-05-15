
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BlogPosts = () => {
  const posts = [
    {
      title: "5 AI Tools Every Small Business Should Be Using in 2025",
      excerpt: "Discover the most impactful and cost-effective AI tools that are transforming small business operations.",
      category: "Tools & Resources",
      date: "May 10, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "/resources/blog/ai-tools-small-business-2025"
    },
    {
      title: "How to Implement AI Customer Service Without Losing the Human Touch",
      excerpt: "Learn how to balance automation with personalization in your customer support channels.",
      category: "Customer Service",
      date: "April 28, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "/resources/blog/ai-customer-service-human-touch"
    },
    {
      title: "The ROI of AI: Calculating the True Value for Your Business",
      excerpt: "A practical guide to measuring the return on investment for AI implementation in small businesses.",
      category: "Business Strategy",
      date: "April 15, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "/resources/blog/roi-ai-small-business"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Latest on the Blog
            </h2>
            <p className="mt-2 text-lg text-gray-500">
              Practical advice and insights on AI for small businesses
            </p>
          </div>
          <Button variant="outline" className="hidden sm:flex items-center">
            View All Posts <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
              <div className="py-4 px-6">
                <span className="inline-block bg-brand-primary/10 rounded-full px-3 py-1 text-sm font-semibold text-brand-primary mb-2">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 sm:hidden text-center">
          <Button variant="outline" className="w-full">
            View All Posts <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
