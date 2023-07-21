export default async function (searchName: string) {
  const res = await fetch(`https://api.nationalize.io?name=${searchName}`);
  if (!res.ok) throw new Error("Failed to fetch nationality");
  return res.json();
}
