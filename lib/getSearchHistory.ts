import dbConnect from "@/lib/dbConnect";

export default async function () {
  await dbConnect();
  const res = await fetch(`${process.env.apiBaseUrl}/api/history`, {
    next: { revalidate: 1 },
  });
  if (!res.ok) throw new Error("Failed to fetch search history");
  return res.json();
}
