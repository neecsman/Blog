import { StateSchema } from "app/providers/StoreProvider";
import { getProfileData } from "./getProfileData";
import { Country, Currency } from "shared/const/common";
import { Profile } from "entities/Profile";
import { Gender } from "entities/Profile/model/types/profile";

describe("getProfileData.test", () => {
  test("should return Data", () => {
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
        data: data,
        isLoading: false,
      },
    };

    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test("should work with empty state", () => {
    const state: Partial<StateSchema> = {};

    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
