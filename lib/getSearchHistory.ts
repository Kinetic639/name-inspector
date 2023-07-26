import dbConnect from "@/lib/dbConnect";

export default async function () {
  await dbConnect();
  const res = await fetch(`${process.env.apiBaseUrl}/api/history`, {
    cache: "no-store",
    next: { revalidate: 0 },
  });
  if (!res.ok) throw new Error("Failed to fetch search history");
  return res.json();
}
