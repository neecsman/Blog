import { StateSchema } from "app/providers/StoreProvider";
import { getProfileFormData } from "./getProfileFormData";
import { Country, Currency } from "shared/const/common";
import { Profile } from "entities/Profile";
import { Gender } from "entities/Profile/model/types/profile";

describe("getProfileFormData.test", () => {
  test("should return Profile", () => {
    const data: Profile = {
      username: "jarvice",
      firstname: "Tony",
      lastname: "Stark",
      avatar: "",
      gender: Gender.MALE,
      country: Country.Russia,
      currency: Currency.USD,
      city: "Москва",
      birthday: { day: "01", month: "01", year: "1985" },
    };
    const state: Partial<StateSchema> = {
      profile: {
        form: data,
        isLoading: false,
      },
    };

    expect(getProfileFormData(state as StateSchema)).toEqual(data);
  });

  test("should work with empty state", () => {
    const state: Partial<StateSchema> = {};
    expect(getProfileFormData(state as StateSchema)).toEqual(undefined);
  });
});
