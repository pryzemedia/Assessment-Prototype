export interface Assessments {
  id: number;
  name: string;
  node: string;
  link: string;
  createdBy: string;
  status: string;
  released: string;
  lastUpdated: string;
  nextDue: string;
  [key: string]: string | number;
}
