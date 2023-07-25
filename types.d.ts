export type NationalityCountry = {
  country_id: string;
  probability: number;
};

export type NationalizeResponse = {
  count: number;
  name: string;
  country: NationalityCountry[];
};

export type GenderizeResponse = {
  count: number;
  name: string;
  gender: string;
  probability: number;
};

export type SearchResult = {
  search: string;
  createdAt?: Date;
  results: {
    nationality: NationalizeResponse;
    gender: GenderizeResponse;
  };
};
