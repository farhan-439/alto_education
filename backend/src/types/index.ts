export interface Student {
  id: string;
  name: string;
  email: string;
  counselor_id: string;
  progress: number;
}

export interface Counselor {
  id: string;
  name: string;
  email: string;
  students: string[];
}