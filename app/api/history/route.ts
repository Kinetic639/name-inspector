import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";

export async function GET() {
  try {
    await dbConnect();
    return NextResponse.json({
      message: "It's time to Code!!",
    });
  } catch (err) {
    console.error("Error occurred: ", err);
  }
}
