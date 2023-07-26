import dbConnect from "@/lib/dbConnect";

export default async function () {
  await dbConnect();
  const res = await fetch(`${process.env.apiBaseUrl}/api/history`);
  if (!res.ok) throw new Error("Failed to fetch results from db");
  return res.json();
}
