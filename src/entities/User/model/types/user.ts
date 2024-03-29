export interface User {
  id: number;
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  avatar: string;
}

export interface UserSchema {
  authData?: User;

  _inited?: boolean;
}
