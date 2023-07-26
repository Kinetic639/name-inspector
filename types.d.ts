import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

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

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      role: string;
    } & DefaultSession;
  }

  interface User extends DefaultUser {
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: string;
  }
}
