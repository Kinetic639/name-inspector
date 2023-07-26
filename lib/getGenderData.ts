export default async function (searchName: string) {
  const res = await fetch(`https://api.genderize.io/?name=${searchName}`);
  if (!res.ok) throw new Error("Failed to fetch gender information!");
  return res.json();
}
