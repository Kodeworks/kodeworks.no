import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "zkl0178p",
  dataset: "production",
  apiVersion: "2023-02-06", 
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, 
  useCdn: true, 
});

const builder = imageUrlBuilder(client);

interface Image {
    _key: string;
    _type: string;
    asset: Asset;
  }
  
interface Asset {
    _ref: string;
    _type: string;
  }

export const urlFor = (source: Image) => {
  return builder.image(source);
};
