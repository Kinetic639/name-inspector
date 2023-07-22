import getNationality from "@/lib/getNationality";
import { GenderizeResponse, NationalizeResponse, SearchResult } from "@/types";
import getGenderData from "@/lib/getGenderData";
import CopyButton from "@/components/CopyButton";
import createSearchResult from "@/lib/createSearchResult";

type Props = {
  searchParams: { [q: string]: string };
};

const SearchResults = async ({ searchParams }: Props) => {
  const nationalityReq: Promise<NationalizeResponse> = getNationality(
    searchParams.q,
  );
  const genderReq: Promise<GenderizeResponse> = getGenderData(searchParams.q);

  const [nationalityData, genderData] = await Promise.all([
    nationalityReq,
    genderReq,
  ]);

  const result: SearchResult = {
    search: searchParams.q,
    results: {
      nationality: nationalityData,
      gender: genderData,
    },
  };

  await createSearchResult(result);

  const content = (
    <div className="block p-6">
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
        Search Result for: {nationalityData.name}
      </h5>
      <div className="flex w-full gap-16">
        <div>
          <p className="text-gray-900 whitespace-no-wrap">
            {nationalityData.country.map((country) => (
              <span key={country.country_id} className="mr-6">
                {country.country_id}{" "}
                {parseFloat((country.probability * 100).toFixed(2))}%
              </span>
            ))}
          </p>
          <p className="text-gray-900 whitespace-no-wrap">
            <span className="mr-6">
              {genderData.gender}{" "}
              {parseFloat((genderData.probability * 100).toFixed(2))}%
            </span>
          </p>
        </div>
        <div>
          <CopyButton
            name={decodeURI(searchParams.q)}
            nationalityData={nationalityData}
            genderData={genderData}
          />
        </div>
      </div>
    </div>
  );

  return <div className="flex-col space-y-14">{content}</div>;
};
export default SearchResults;
