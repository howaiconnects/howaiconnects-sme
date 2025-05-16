
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>AI for SMEs Blog | HowAIConnects</title>
        <meta name="description" content="Read the latest articles, tips, and insights about AI implementation for small and medium-sized businesses." />
        <meta name="keywords" content="AI blog, SME technology blog, AI implementation tips, small business AI" />
        <link rel="canonical" href="https://howaiconnects.com/resources/blog" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "AI for SMEs Blog",
              "description": "Articles and insights on AI implementation for small and medium-sized businesses",
              "publisher": {
                "@type": "Organization",
                "name": "HowAIConnects"
              }
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        {/* Page content will go here */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                AI for SMEs Blog
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Coming soon! This page is under development.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
