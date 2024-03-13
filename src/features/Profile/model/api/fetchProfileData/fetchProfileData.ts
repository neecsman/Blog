import { createAsyncThunk } from "@reduxjs/toolkit";

import { Profile } from "entities/Profile";
import { ThunkExtraArg } from "app/providers/StoreProvider/config/StateSchema";

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  { rejectValue: string; extra: ThunkExtraArg }
>("profile/fetchProfileData", async (_, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  try {
    const { data } = await extra.api.get<Profile>("user/profile");

    if (!data) {
      throw new Error();
    }

    return data;
  } catch (e) {
    return rejectWithValue("Error");
  }
});
