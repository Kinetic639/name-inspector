import { SearchResult } from "@/types";
import dbConnect from "@/lib/dbConnect";

export default async function (searchResult: SearchResult) {
  await dbConnect();
  const res = await fetch(`http://localhost:3000/api/search-result`, {
    method: "POST",
    body: JSON.stringify(searchResult),
  });
  if (!res.ok) throw new Error("Failed to save results to the database");
  return res.json();
}
