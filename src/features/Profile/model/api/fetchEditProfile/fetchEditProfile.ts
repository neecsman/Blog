import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExtraArg } from "app/providers/StoreProvider/config/StateSchema";
import { Profile } from "entities/Profile";
import { profileActions } from "../../slice/profileSlice";

export const fetchEditProfile = createAsyncThunk<
  Profile,
  Profile,
  {
    rejectValue: string;
    extra: ThunkExtraArg;
  }
>("profile/fetchEditProfile", async (editedUserData, thunkAPI) => {
  const { dispatch, rejectWithValue, extra } = thunkAPI;

  try {
    const { data } = await extra.api.put<Profile>(
      "user/profile",
      editedUserData
    );

    if (!data) {
      throw new Error();
    }

    dispatch(profileActions.updateProfile(data));

    return data;
  } catch (e) {
    return rejectWithValue("Error");
  }
});
