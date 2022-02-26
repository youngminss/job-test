interface Gender {
  MALE: number;
  FEMALE: number;
}

interface TestPageNumber {
  [key: string]: string;
}

interface TestTitle {
  [key: number]: string;
}

export interface TestContent {
  queryNumber: number;
  text: string;
}

export const GENDER_TO_NUMBER: Gender = {
  MALE: 100323,
  FEMALE: 100324,
};

export const TEST_PAGE_NUMBER: TestPageNumber = {
  TEST_6: '6',
  TEST_8: '8',
  TEST_9: '9',
  TEST_10: '10',
};

export const TEST_TITLE: TestTitle = {
  6: '직업가치관검사',
  8: '진로개발준비도검사',
  9: '이공계전공적합도검사',
  10: '주요능력효능검사',
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
