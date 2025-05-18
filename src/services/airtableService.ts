
import { AirtableResource, ResourceItem } from "@/types/resources";

const AIRTABLE_API_KEY = "YOUR_AIRTABLE_API_KEY"; // In production, this should be in environment variables
const AIRTABLE_BASE_ID = "YOUR_AIRTABLE_BASE_ID";
const AIRTABLE_RESOURCES_TABLE = "Resources";

// Convert Airtable resource format to our app's format
const formatResource = (airtableResource: AirtableResource): ResourceItem => {
  const { id, fields } = airtableResource;
  
  return {
    id,
    title: fields.resourceName,
    description: fields.shortDescription,
    type: fields.resourceType.toLowerCase(),
    image: fields.featuredImage?.[0]?.url || "/placeholder.svg",
    downloadUrl: `/resources/downloads/${fields.urlSlug}`,
    fileSize: fields.fileSize || "Unknown",
    fileType: fields.fileType || "PDF"
  };
};

export const fetchResources = async (): Promise<ResourceItem[]> => {
  try {
    const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_RESOURCES_TABLE}`, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Airtable API error: ${response.status}`);
    }

    const data = await response.json();
    return data.records.map((record: AirtableResource) => formatResource(record));
  } catch (error) {
    console.error("Error fetching resources from Airtable:", error);
    throw error;
  }
};

export const fetchResourceBySlug = async (slug: string): Promise<ResourceItem | null> => {
  try {
    const formula = encodeURIComponent(`urlSlug = "${slug}"`);
    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_RESOURCES_TABLE}?filterByFormula=${formula}`,
      {
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Airtable API error: ${response.status}`);
    }

    const data = await response.json();
    if (data.records.length === 0) {
      return null;
    }
    
    return formatResource(data.records[0]);
  } catch (error) {
    console.error(`Error fetching resource with slug ${slug}:`, error);
    throw error;
  }
};
