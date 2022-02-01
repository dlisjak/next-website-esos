import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_ID,
  dataset: "production",
  apiVersion: '2022-01-31', // use a UTC date string
  useCdn: true
});