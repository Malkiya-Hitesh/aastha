import { client } from "./sanity";

export async function sanityFetch(query, params = {}) {
  return await client.fetch(query, params, {
    next: { revalidate: 60}, // ISR caching
  });
}