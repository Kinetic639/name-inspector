import { GenderizeResponse, NationalizeResponse, SearchResult } from "@/types";
import getNationality from "@/lib/getNationality";
import getGenderData from "@/lib/getGenderData";

export default async function (searchName: string) {
  const nationalityReq: Promise<NationalizeResponse> =
    getNationality(searchName);
  const genderReq: Promise<GenderizeResponse> = getGenderData(searchName);

  const [nationalityData, genderData] = await Promise.all([
    nationalityReq,
    genderReq,
  ]);

  const result: SearchResult = {
    search: searchName,
    results: {
      nationality: nationalityData,
      gender: genderData,
    },
  };

  return result;
}
