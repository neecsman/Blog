import { fetchProfileData } from "./fetchProfileData";
import { Country, Currency } from "shared/const/common";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

describe("fetchProfileData.test", () => {
  test("should return profile data", async () => {
    const data = {
      username: "jarvice",
      firstname: "Tony",
      lastname: "Stark",
      avatar: "",
      gender: "male",
      country: Country.Russia,
      currency: Currency.USD,
      city: "Москва",
      birthday: { day: "01", month: "01", year: "1985" },
    };

    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(
      Promise.resolve({
        data,
      })
    );

    const result = await thunk.callThunk();
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("should return error", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(
      Promise.resolve({
        status: 403,
      })
    );

    const result = await thunk.callThunk();
    expect(result.meta.requestStatus).toBe("rejected");
  });
});
