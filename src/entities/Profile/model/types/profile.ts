import { Country, Currency } from "shared/const/common";

export type Birthday = {
  day: string;
  month: string;
  year: string;
};

export enum Gender {
  MALE = "male",
  FEMALE = "female",
}

export interface Profile {
  username: string;
  firstname: string;
  lastname: string;
  gender: Gender;
  birthday: Birthday;
  currency: Currency;
  country: Country;
  city: string;
  avatar: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly?: boolean;
}
