import dbConnect from "@/lib/dbConnect";
import SearchResult from "@/models/searchResult";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  try {
    const searchHistory = await SearchResult.find();
    return NextResponse.json({ searchHistory });
  } catch (e) {
    console.error("Error while fetching search history: ", e);
  }
}
