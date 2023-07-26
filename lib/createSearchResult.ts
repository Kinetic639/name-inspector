import { SearchResult } from "@/types";

export default async function (searchResult: SearchResult) {
  console.log("create search result: ", searchResult);
  const res = await fetch(`${process.env.apiBaseUrl}/api/search-result`, {
    method: "POST",
    body: JSON.stringify(searchResult),
  });
  if (!res.ok) throw new Error("Failed to save results to the database");
  return res.json();
}
