export interface Inscription {
  id: number | string;
  studentId: number | string;
  courseId: number | string;
  inscriptionDate: Date;
  userId: number | string;
  studentName?: string;
  courseTitle?: string;
  userName?: string;
}

export interface InscriptionDetail extends Inscription {
  student?: any;
  course?: any;
  user?: any;
}

export const inscriptionColumns: string[] = [
  'id',
  'studentName',
  'courseTitle',
  'inscriptionDate',
  'userName',
  'actions'
];