import { createAsyncThunk } from "@reduxjs/toolkit";

import { Profile } from "../../types/profile";

import { ThunkExtraArg } from "app/providers/StoreProvider/config/StateSchema";

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  { rejectValue: string; extra: ThunkExtraArg }
>("profile/fetchProfileData", async (_, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  try {
    const { data } = await extra.api.get<Profile>("user/profile");

    return data;
  } catch (e) {
    return rejectWithValue("Error");
  }
});
