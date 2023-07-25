export default async function () {
  const res = await fetch(`${process.env.apiBaseUrl}/api/history`);
  if (!res.ok) throw new Error("Failed to save results to the database");
  return res.json();
}
