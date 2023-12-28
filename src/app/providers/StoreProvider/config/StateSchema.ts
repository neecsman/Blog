import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";

export default interface StateSchema {
  counter: CounterSchema;
  user?: UserSchema;
}
