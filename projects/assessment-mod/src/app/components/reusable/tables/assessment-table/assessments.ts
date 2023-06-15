export interface Assessments {
  id: number;
  name: string;
  link: string;
  createdBy: string;
  status: string;
  released: string;
  lastUpdated: string;
  nextDue: string;
  [key: string]: string | number;
}
