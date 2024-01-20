export interface User {
  id: string;
  firstName: string;
  lastName: string;
  permissions: string[];
  roles: string[];
  token: string;
}
