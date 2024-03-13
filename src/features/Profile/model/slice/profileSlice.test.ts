import { fetchProfileData } from "../api/fetchProfileData/fetchProfileData";
import { Profile, ProfileSchema } from "entities/Profile/model/types/profile";
import { profileActions, profileReducer } from "./profileSlice";
import { Gender } from "entities/Profile/model/types/profile";
import { Country, Currency } from "shared/const/common";

describe("profileSlice.test", () => {
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
  test("test set readonly", async () => {
    const state: Partial<ProfileSchema> = { readonly: false };

    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true))
    ).toEqual({ readonly: true });
  });

  test("test update profile", async () => {
    const state: Partial<ProfileSchema> = { form: data };

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ ...data, username: "12345" })
      )
    ).toEqual({ form: { ...data, username: "12345" } });
  });

  test("test update profile service pending", async () => {
    const state: Partial<ProfileSchema> = {
      error: "error",
      isLoading: false,
    };

    expect(
      profileReducer(state as ProfileSchema, fetchProfileData.pending(""))
    ).toEqual({
      error: undefined,
      isLoading: true,
    });
  });

  test("test update profile service fulfilled", async () => {
    const state: Partial<ProfileSchema> = {
      isLoading: true,
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        fetchProfileData.fulfilled(data, "")
      )
    ).toEqual({
      readonly: undefined,
      isLoading: false,
      error: undefined,
      data: data,
      form: data,
    });
  });
});
