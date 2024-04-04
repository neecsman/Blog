import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Profile, ProfileSchema } from "entities/Profile/model/types/profile";
import { fetchProfileData } from "../api/fetchProfileData/fetchProfileData";
import { fetchEditProfile } from "../api/fetchEditProfile/fetchEditProfile";
import { fetchProfileDataById } from "../api/fetchProfileDataById/fetchProfileDataById";

const initialState: ProfileSchema = {
  readonly: undefined,
  isLoading: false,
  error: undefined,
  data: undefined,
  form: undefined,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.form = { ...state.data, ...action.payload };
    },
    setReadonly: (state, action) => {
      state.readonly = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      //PROFILE_DATA
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.isLoading = false;
          state.data = action.payload;
          state.form = action.payload;
        }
      )
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //PROFILE_DATA_BY_ID
      .addCase(fetchProfileDataById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchProfileDataById.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.isLoading = false;
          state.data = action.payload;
          state.readonly = true;
        }
      )
      .addCase(fetchProfileDataById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //EDIT_PROFILE_DATA
      .addCase(fetchEditProfile.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchEditProfile.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.isLoading = false;
          state.data = action.payload;
          state.form = action.payload;
        }
      )
      .addCase(fetchEditProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
