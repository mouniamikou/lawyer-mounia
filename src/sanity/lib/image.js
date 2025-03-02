import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// Create the Sanity client
const client = createClient({
  projectId: 'bfaunxy0',  
  dataset: 'production',
  useCdn: true,
  apiVersion: "2023-01-01",
});

// Create the image URL builder
const builder = imageUrlBuilder(client);

// Function to generate image URLs
export function urlForImage(source) {
  return builder.image(source);
}

// Export client in case you need it elsewhere
export { client };
