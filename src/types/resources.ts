
export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  type: string; // guide, template, tool, checklist, etc.
  image: string;
  downloadUrl: string;
  fileSize: string;
  fileType: string;
}

export interface AirtableResource {
  id: string;
  fields: {
    resourceName: string;
    shortDescription: string;
    resourceType: string;
    featuredImage: Array<{url: string}>;
    fileSize: string;
    fileType: string;
    urlSlug: string;
  };
}
