import { StateSchema } from "app/providers/StoreProvider";

export const getProfileIsLoadiong = (state: StateSchema) =>
  state.profile?.isLoading;
