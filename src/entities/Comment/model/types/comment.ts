import { User } from "entities/User";

export interface Comment {
  id: number;
  text: string;
  created_at: Date;
  updated_at: Date;
  user: User;
}
