import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import SearchResult from "@/models/searchResult";
import { searchValidationSchema, validateSchema } from "@/lib/validator";

export async function GET() {
  try {
    await dbConnect();
    return NextResponse.json({
      message: "search result!!",
    });
  } catch (err) {
    console.error("Error occurred: ", err);
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
  } catch (err) {
    console.error("Failed to connect to the database!", err);
  }

  const data = await req.json();

  const error = validateSchema(searchValidationSchema, data);

  if (error) {
    return NextResponse.json(
      { error },
      {
        status: 400,
      },
    );
  }

  const newSearchResult = new SearchResult({ ...data });
  await newSearchResult.save();
  return NextResponse.json({ newSearchResult });
}
