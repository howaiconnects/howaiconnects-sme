
import { Card, CardContent } from "@/components/ui/card";

const CompanyValues = () => {
  const values = [
    {
      title: "Accessibility",
      description: "We believe AI should be accessible to businesses of all sizes, not just large enterprises with technical teams."
    },
    {
      title: "Practicality",
      description: "We focus on practical, high-impact implementations that deliver real business value quickly."
    },
    {
      title: "Education",
      description: "We empower business owners with the knowledge to make informed decisions about AI implementation."
    },
    {
      title: "Partnership",
      description: "We build lasting relationships with our clients, focusing on their long-term success."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Our Values
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            The principles that guide everything we do
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;
