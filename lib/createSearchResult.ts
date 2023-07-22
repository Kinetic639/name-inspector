import { SearchResult } from "@/types";

export default async function (searchResult: SearchResult) {
  const res = await fetch(
    `https://name-inspector-kinetic639.vercel.app/api/search-result`,
    {
      method: "POST",
      body: JSON.stringify(searchResult),
    },
  );
  if (!res.ok) throw new Error("Failed to save results to the databe");
  return res.json();
}
