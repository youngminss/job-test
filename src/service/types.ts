export interface UserFormData {
  qestrnSeq: string;
  gender: string;
  trgetSe: string;
  name: string;
  email?: string;
  school?: string;
  grade?: string;
}

export interface TestPostOptionData extends UserFormData {
  apikey: string;
  startDtm: string;
  answers: string;
}

export interface ReportUseData extends UserFormData {
  inspctSeq: number;
  url: string;
}
