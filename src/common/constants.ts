interface Gender {
  MALE: number;
  FEMALE: number;
}

export interface TestContent {
  queryNumber: number;
  text: string;
}

export const GENDER_TO_NUMBER: Gender = {
  MALE: 100323,
  FEMALE: 100324,
};

export const TEST_CONTENTS: TestContent[] = [
  {
    queryNumber: 6,
    text: '직업적성검사 - 일반 & 대학생용',
  },
  {
    queryNumber: 8,
    text: '진로개발준비도검사',
  },
  {
    queryNumber: 9,
    text: '이공계전공적합도검사',
  },
  {
    queryNumber: 10,
    text: '주요능력효능감검사',
  },
];
