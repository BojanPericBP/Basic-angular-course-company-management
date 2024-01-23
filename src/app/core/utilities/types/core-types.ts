export interface LoginUser {
  id: string;
  firstName: string;
  lastName: string;
  permissions: string[];
  roles: string[];
  token: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  dob: Date;
  amoun: number;
  uuid: string;
}
