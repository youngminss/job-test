export interface QuestionItem {
  [key: string]: string & null;
}

export interface QuestionTwoItem {
  qitemNo: number;
  question: string;
  answer01: string;
  answer02: string;
  answer03: string;
  answer04: string;
  answerScore01: string;
  answerScore02: string;
}

export interface QuestionFiveItem {
  qitemNo: number;
  question: string;
  answer01: string;
  answer02: string;
  answer03: string;
  answer04: string;
  answer05: string;
  answerScore01: string;
  answerScore02: string;
  answerScore03: string;
  answerScore04: string;
  answerScore05: string;
}
