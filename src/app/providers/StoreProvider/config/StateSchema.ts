import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";

export default interface StateSchema {
  counter: CounterSchema;
  user?: UserSchema;
  loginForm?: LoginSchema;
}
