export interface LoginUser {
  id: string;
  firstName: string;
  lastName: string;
  permissions: string[];
  roles: string[];
  token: string;
}

// USERS
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  dob: Date;
  amount: number;
  // JMBG
  uuid: string;
}

export interface UserInput {
  id: string | null;
  firstName: string;
  lastName: string;
  dob: Date;
  amount: number;
  // JMBG
  uuid: string;
}

// PROJECTS
export interface ProjectInput {
  id: string | null;
  name: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
}
