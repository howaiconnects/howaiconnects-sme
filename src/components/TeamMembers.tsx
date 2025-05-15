
import { Card, CardContent } from "@/components/ui/card";

const TeamMembers = () => {
  const team = [
    {
      name: "Sarah Johnson",
      position: "Founder & CEO",
      bio: "Former AI implementation consultant with 15+ years experience helping businesses adopt new technologies.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    },
    {
      name: "Michael Chen",
      position: "Head of AI Solutions",
      bio: "AI engineer with expertise in developing practical automation solutions for non-technical businesses.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    },
    {
      name: "Leila Patel",
      position: "Director of Education",
      bio: "Former business professor specializing in technology adoption and digital transformation for SMEs.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    },
    {
      name: "David Rodriguez",
      position: "Client Success Manager",
      bio: "Experienced in helping businesses implement and optimize new technology solutions.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Meet Our Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            AI experts with a passion for helping small businesses succeed
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <Card key={index} className="shadow-lg overflow-hidden">
              <div className="aspect-w-3 aspect-h-4 bg-gray-200">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover" 
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl">{member.name}</h3>
                <p className="text-brand-primary font-medium mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
