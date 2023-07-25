import { SearchResult } from "@/types";

export const formatSearchHistory = (searches: any[]): SearchResult[] => {
  return searches.map((search) => ({
    search: search.search,
    createdAt: search.createdAt,
    results: {
      nationality: {
        count: search.nationality.count,
        name: search.nationality.name,
        country: search.nationality.country.map((country: any) => ({
          country_id: country.country_id,
          probability: country.probability,
        })),
      },
      gender: {
        count: search.gender.count,
        name: search.gender.name,
        gender: search.gender.gender,
        probability: search.gender.probability,
      },
    },
  }));
};
