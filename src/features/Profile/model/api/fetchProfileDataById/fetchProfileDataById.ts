import { createAsyncThunk } from "@reduxjs/toolkit";

import { Profile } from "entities/Profile";
import { ThunkExtraArg } from "app/providers/StoreProvider/config/StateSchema";

export const fetchProfileDataById = createAsyncThunk<
  Profile,
  string,
  { rejectValue: string; extra: ThunkExtraArg }
>("profile/fetchProfileDataById", async (userId, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  try {
    const { data } = await extra.api.get<Profile>("user", {
      params: { userId },
    });

    if (!data) {
      throw new Error();
    }

    return data;
  } catch (e) {
    return rejectWithValue("Error");
  }
});
