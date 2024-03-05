import { Country, Currency } from "shared/const/common";

export type Birthday = {
  day: string;
  month: string;
  year: string;
};

export interface Profile {
  username: string;
  firstname: string;
  lastname: string;
  gender: "male" | "female";
  birthday: Birthday;
  currency: Currency;
  country: Country;
  city: string;
  avatar: string;
}

export interface ProfileSchema {
  data?: Profile;
  isLoading: boolean;
  error?: string;
  readonly?: boolean;
}
