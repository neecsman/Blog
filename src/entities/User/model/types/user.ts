export interface User {
  id: number;
  username: string;
  email: string;
  firstname: string;
  lastname: string;
}

export interface UserSchema {
  authData?: User;
}
