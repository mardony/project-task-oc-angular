export interface Student {
  id: number | string;
  name: string;
  email: string;
  phone: string;
  address: string;
  profile: StudentProfile;
  createdAt?: Date;
}

export enum StudentProfile {
  DEVELOPER = 'DEVELOPER',
  IT = 'IT',
  END_USER = 'END_USER',
  OTHER = 'OTHER'
}

export const studentColumns: string[] = [
  'id',
  'name',
  'email',
  'phone',
  'profile',
  'actions'
];