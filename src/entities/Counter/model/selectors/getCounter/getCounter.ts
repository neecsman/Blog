import { StateSchema } from "app/providers/StoreProvider";

export const getCounter = (state: Partial<StateSchema>) => state.counter;
