import { Country, Currency } from "shared/const/common";

export interface Profile {
  username: string;
  firstname: string;
  lastname: string;
  age: number;
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
