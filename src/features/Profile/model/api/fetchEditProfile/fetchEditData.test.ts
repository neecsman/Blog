import { Gender } from "entities/Profile/model/types/profile";
import { fetchEditProfile } from "./fetchEditProfile";

import { Country, Currency } from "shared/const/common";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

describe("fetchEditData.test", () => {
  const data = {
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

  test("should return updated profile data", async () => {
    const thunk = new TestAsyncThunk(fetchEditProfile);
    thunk.api.put.mockReturnValue(
      Promise.resolve({
        data,
      })
    );

    const result = await thunk.callThunk(data);
    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("should return error", async () => {
    const thunk = new TestAsyncThunk(fetchEditProfile);
    thunk.api.put.mockReturnValue(
      Promise.resolve({
        status: 403,
      })
    );

    const result = await thunk.callThunk(data);
    expect(result.meta.requestStatus).toBe("rejected");
  });
});
