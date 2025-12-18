export interface User {
  id: number | string;
  username: string;
  email: string;
  password: string;
  role: Role;
  fullName?: string;
  phone?: string;
  address?: string;
  createdAt?: Date;
}

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

export const userColumns: string[] = [
  'id',
  'username',
  'email',
  'fullName',
  'role',
  'actions'
];