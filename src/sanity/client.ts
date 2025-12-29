import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "6ekqyttp",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  // apiHost: "l48sntq11d2dy6k19b4uldjh"
})