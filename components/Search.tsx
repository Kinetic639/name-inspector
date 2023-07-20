import React from "react";

const searchResult = {
  search: "Michał",
  results: {
    nationality: {
      count: 44789,
      name: "Michał",
      country: [
        {
          country_id: "PL",
          probability: 0.917,
        },
        {
          country_id: "MQ",
          probability: 0.011,
        },
        {
          country_id: "IE",
          probability: 0.01,
        },
        {
          country_id: "GB",
          probability: 0.006,
        },
        {
          country_id: "DK",
          probability: 0.004,
        },
      ],
    },
    gender: {
      count: 927,
      name: "Michał",
      gender: "male",
      probability: 1.0,
    },
  },
};

const mockedSearchHistory = [
  {
    search: "Michał",
    date: new Date(),
    results: {
      nationality: {
        count: 44789,
        name: "Michał",
        country: [
          {
            country_id: "PL",
            probability: 0.917,
          },
          {
            country_id: "MQ",
            probability: 0.011,
          },
          {
            country_id: "IE",
            probability: 0.01,
          },
          {
            country_id: "GB",
            probability: 0.006,
          },
          {
            country_id: "DK",
            probability: 0.004,
          },
        ],
      },
      gender: {
        count: 927,
        name: "Michał",
        gender: "male",
        probability: 1.0,
      },
    },
  },
  {
    search: "Eberardo",
    date: new Date(),
    results: {
      nationality: {
        count: 132,
        name: "Eberardo",
        country: [
          {
            country_id: "MX",
            probability: 0.264,
          },
          {
            country_id: "PE",
            probability: 0.157,
          },
          {
            country_id: "CL",
            probability: 0.128,
          },
          {
            country_id: "IT",
            probability: 0.12,
          },
          {
            country_id: "CR",
            probability: 0.084,
          },
        ],
      },
      gender: {
        count: 130,
        name: "Eberardo",
        gender: "male",
        probability: 0.99,
      },
    },
  },
  {
    search: "Thomas",
    date: new Date(),
    results: {
      nationality: {
        count: 1332583,
        name: "Thomas",
        country: [
          {
            country_id: "AT",
            probability: 0.093,
          },
          {
            country_id: "DE",
            probability: 0.079,
          },
          {
            country_id: "DK",
            probability: 0.078,
          },
          {
            country_id: "CH",
            probability: 0.051,
          },
          {
            country_id: "MQ",
            probability: 0.042,
          },
        ],
      },
      gender: {
        count: 967094,
        name: "Thomas",
        gender: "male",
        probability: 1.0,
      },
    },
  },
  {
    search: "Rambert",
    date: new Date(),
    results: {
      nationality: {
        count: 861,
        name: "Rambert",
        country: [
          {
            country_id: "TT",
            probability: 0.165,
          },
          {
            country_id: "FR",
            probability: 0.147,
          },
          {
            country_id: "VE",
            probability: 0.09,
          },
          {
            country_id: "MY",
            probability: 0.073,
          },
          {
            country_id: "CH",
            probability: 0.07,
          },
        ],
      },
      gender: {
        count: 37,
        name: "Rambert",
        gender: "male",
        probability: 0.84,
      },
    },
  },
  {
    search: "Denise",
    date: new Date(),
    results: {
      nationality: {
        count: 325039,
        name: "Denise",
        country: [
          {
            country_id: "IE",
            probability: 0.066,
          },
          {
            country_id: "US",
            probability: 0.062,
          },
          {
            country_id: "BR",
            probability: 0.057,
          },
          {
            country_id: "CA",
            probability: 0.051,
          },
          {
            country_id: "NZ",
            probability: 0.047,
          },
        ],
      },
      gender: {
        count: 331195,
        name: "Denise",
        gender: "female",
        probability: 1.0,
      },
    },
  },
  {
    search: "Zelda",
    date: new Date(),
    results: {
      nationality: {
        count: 6334,
        name: "Zelda",
        country: [
          {
            country_id: "ZA",
            probability: 0.429,
          },
          {
            country_id: "NA",
            probability: 0.062,
          },
          {
            country_id: "NZ",
            probability: 0.048,
          },
          {
            country_id: "AU",
            probability: 0.022,
          },
          {
            country_id: "IL",
            probability: 0.02,
          },
        ],
      },
      gender: {
        count: 6164,
        name: "Zelda",
        gender: "female",
        probability: 0.99,
      },
    },
  },
  {
    search: "Darin",
    date: new Date(),
    results: {
      nationality: {
        count: 18168,
        name: "Darin",
        country: [
          {
            country_id: "US",
            probability: 0.107,
          },
          {
            country_id: "TH",
            probability: 0.076,
          },
          {
            country_id: "CA",
            probability: 0.073,
          },
          {
            country_id: "BG",
            probability: 0.059,
          },
          {
            country_id: "NZ",
            probability: 0.058,
          },
        ],
      },
      gender: {
        count: 17350,
        name: "darin",
        gender: "male",
        probability: 0.98,
      },
    },
  },
  {
    search: "Motya",
    date: new Date(),
    results: {
      nationality: {
        count: 75,
        name: "Motya",
        country: [
          {
            country_id: "MA",
            probability: 0.343,
          },
          {
            country_id: "RU",
            probability: 0.129,
          },
          {
            country_id: "BY",
            probability: 0.12,
          },
          {
            country_id: "KZ",
            probability: 0.12,
          },
          {
            country_id: "UA",
            probability: 0.105,
          },
        ],
      },
      gender: {
        count: 16,
        name: "Motya",
        gender: "female",
        probability: 0.56,
      },
    },
  },
  {
    search: "Alexander",
    date: new Date(),
    results: {
      nationality: {
        count: 520745,
        name: "Alexander",
        country: [
          {
            country_id: "RU",
            probability: 0.093,
          },
          {
            country_id: "UA",
            probability: 0.068,
          },
          {
            country_id: "AT",
            probability: 0.066,
          },
          {
            country_id: "DE",
            probability: 0.059,
          },
          {
            country_id: "CO",
            probability: 0.037,
          },
        ],
      },
      gender: {
        count: 444831,
        name: "Alexander",
        gender: "male",
        probability: 1.0,
      },
    },
  },
  {
    search: "Gabriella",
    date: new Date(),
    results: {
      nationality: {
        count: 77918,
        name: "Gabriella",
        country: [
          {
            country_id: "HU",
            probability: 0.455,
          },
          {
            country_id: "IT",
            probability: 0.089,
          },
          {
            country_id: "SE",
            probability: 0.052,
          },
          {
            country_id: "BR",
            probability: 0.034,
          },
          {
            country_id: "RO",
            probability: 0.027,
          },
        ],
      },
      gender: {
        count: 82292,
        name: "Gabriella",
        gender: "female",
        probability: 1.0,
      },
    },
  },
  {
    search: "Noah",
    date: new Date(),
    results: {
      nationality: {
        count: 54484,
        name: "Noah",
        country: [
          {
            country_id: "CM",
            probability: 0.096,
          },
          {
            country_id: "KE",
            probability: 0.075,
          },
          {
            country_id: "GH",
            probability: 0.059,
          },
          {
            country_id: "US",
            probability: 0.052,
          },
          {
            country_id: "UG",
            probability: 0.051,
          },
        ],
      },
      gender: {
        count: 51765,
        name: "Noah",
        gender: "male",
        probability: 0.99,
      },
    },
  },
  {
    search: "Akua",
    date: new Date(),
    results: {
      nationality: {
        count: 54484,
        name: "Noah",
        country: [
          {
            country_id: "CM",
            probability: 0.096,
          },
          {
            country_id: "KE",
            probability: 0.075,
          },
          {
            country_id: "GH",
            probability: 0.059,
          },
          {
            country_id: "US",
            probability: 0.052,
          },
          {
            country_id: "UG",
            probability: 0.051,
          },
        ],
      },
      gender: {
        count: 2414,
        name: "Akua",
        gender: "female",
        probability: 0.99,
      },
    },
  },
];

const Search = () => {
  return (
    <div className="flex-col space-y-14">
      <form className="flex max-w-lg mx-auto items-center">
        <label htmlFor="search-input" className="sr-only">
          Search
        </label>
        <input
          type="text"
          id="search-input"
          className="border flex-1 bg-gray-100 border-gray-400 focus:bg-white text-sm rounded-lg focus:border-gray-500 block p-2.5 focus:outline-gray-400 focus:ring-gray-300"
          placeholder="Search Name..."
          required
        />
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-gray-700 rounded-lg border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          Search
        </button>
      </form>
      {searchResult && (
        <div className="block p-6">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
            Search Result for: {searchResult.search}
          </h5>
          <div className="flex w-full gap-16">
            <div>
              <p className="text-gray-900 whitespace-no-wrap">
                {searchResult.results.nationality.country.map((country) => (
                  <span key={country.country_id} className="mr-6">
                    {country.country_id}{" "}
                    {parseFloat((country.probability * 100).toFixed(2))}%
                  </span>
                ))}
              </p>
              <p className="text-gray-900 whitespace-no-wrap">
                <span className="mr-6">
                  {searchResult.results.gender.gender}{" "}
                  {parseFloat(
                    (searchResult.results.gender.probability * 100).toFixed(2),
                  )}
                  %
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
      )}

      <table className="w-full table-auto ">
        <thead>
          <tr>
            <th
              scope="col"
              className="px-5 flex-grow-0 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
            >
              Date
            </th>
            <th
              scope="col"
              className="px-5 font-semibold py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-5  py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
            >
              Nationality
            </th>
            <th
              scope="col"
              className="px-5  py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
            >
              Gender
            </th>
            <th
              scope="col"
              className="px-5 w-1 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {mockedSearchHistory.map((item, index) => (
            <tr key={index}>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p className="text-gray-900 whitespace-no-wrap">
                  {item.date.toLocaleString("pl-PL")}
                </p>
              </td>
              <td className="px-5 py-5 font-semibold text-sm bg-white border-b border-gray-200">
                <p className="text-gray-900 whitespace-no-wrap">
                  {item.search}
                </p>
              </td>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p className="text-gray-900 whitespace-no-wrap">
                  {item.results.nationality.country.map((country) => (
                    <span key={country.country_id} className="mr-6">
                      {country.country_id}{" "}
                      {parseFloat((country.probability * 100).toFixed(2))}%
                    </span>
                  ))}
                </p>
              </td>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p className="text-gray-900 whitespace-no-wrap">
                  <span className="mr-6">
                    {item.results.gender.gender}{" "}
                    {parseFloat(
                      (item.results.gender.probability * 100).toFixed(2),
                    )}
                    %
                  </span>
                </p>
              </td>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Search;
