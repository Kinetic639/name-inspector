import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import SearchResult from "@/models/searchResult";
import { searchValidationSchema, validateSchema } from "@/lib/validator";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  await dbConnect();

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
  revalidatePath("/history");
  return NextResponse.json({ newSearchResult });
}
