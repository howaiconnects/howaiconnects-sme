
import { ResourceItem } from "@/types/resources";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

interface ResourcesListProps {
  resources: ResourceItem[];
  isLoading: boolean;
}

const ResourcesList = ({ resources, isLoading }: ResourcesListProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <Skeleton className="h-48 w-full" />
            <CardHeader>
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6 mt-2" />
            </CardHeader>
            <CardFooter>
              <Skeleton className="h-10 w-full" />
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }

  if (resources.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium text-gray-900">No resources found</h3>
        <p className="text-gray-600 mt-2">Please try a different filter or check back later</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {resources.map((resource) => (
        <Card key={resource.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
          <div className="h-48 w-full overflow-hidden">
            <img 
              src={resource.image} 
              alt={resource.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
            />
          </div>
          <CardHeader>
            <div className="mb-2">
              <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                resource.type === 'guide' ? 'bg-blue-100 text-blue-800' : 
                resource.type === 'template' ? 'bg-green-100 text-green-800' :
                resource.type === 'tool' ? 'bg-purple-100 text-purple-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
              </span>
            </div>
            <CardTitle className="text-xl">{resource.title}</CardTitle>
            <CardDescription>{resource.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="text-sm text-gray-500 flex justify-between">
              <span>{resource.fileType}</span>
              <span>{resource.fileSize}</span>
            </div>
          </CardContent>
          <CardFooter className="pt-0 pb-4">
            <Link to={resource.downloadUrl} className="w-full">
              <Button className="w-full flex items-center justify-center">
                <Download className="mr-2 h-4 w-4" /> Download Resource
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ResourcesList;
