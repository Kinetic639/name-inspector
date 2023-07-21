import getNationality from "@/lib/getNationality";
import { GenderizeResponse, NationalizeResponse } from "@/types";
import getGenderData from "@/lib/getGenderData";

type Props = {
  searchParams: { [q: string]: string };
};

const SearchResults = async ({ searchParams }: Props) => {
  const nationalityReq: Promise<NationalizeResponse> = getNationality(
    searchParams.q,
  );
  const genderReq: Promise<GenderizeResponse> = getGenderData(searchParams.q);

  const nationalityData = await nationalityReq;
  const genderData = await genderReq;

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
          <button className="inline-flex items-center py-2.5 px-3 text-sm font-medium text-white bg-gray-700 rounded-lg border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  return <div className="flex-col space-y-14">{content}</div>;
};
export default SearchResults;
