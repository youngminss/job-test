interface Gender {
  MALE: number;
  FEMALE: number;
}

export interface TestContent {
  queryNumber: number;
  text: string;
}

export interface TargetSerial {
  targetSerial: number;
  text: string;
}

export const GENDER_TO_NUMBER: Gender = {
  MALE: 100323,
  FEMALE: 100324,
};

export const TEST_PAGE_NUMBER: { [key: string]: string } = {
  TEST_6: '6',
  TEST_8: '8',
  TEST_9: '9',
  TEST_10: '10',
};

export const TEST_TITLE: { [key: string]: string } = {
  '6': '직업가치관검사',
  '8': '진로개발준비도검사',
  '9': '이공계전공적합도검사',
  '10': '주요능력효능검사',
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

export const TARGET_SERIAL_NUMBER: TargetSerial[] = [
  { targetSerial: 100208, text: '대학생' },
  { targetSerial: 100209, text: '일반' },
  { targetSerial: 100210, text: '일반(학부모)' },
  { targetSerial: 100214, text: '대학생(교사)' },
  { targetSerial: 100215, text: '교사(상담)' },
];

export const ERROR_MESSAGES: { [key: string]: string } = {
  testContent: '테스트 유형을 선택해주세요.',
  name: '이름을 입력해주세요.',
  gender: '성별을 선택해주세요.',
  targetSe: '본인 소속을 선택해주세요.',
};

export const NUMBER_TO_VALUES: { [key: string]: string } = {
  '1': '능력발휘',
  '2': '자율성',
  '3': '보수',
  '4': '안정성',
  '5': '사회적 인정',
  '6': '사회봉사',
  '7': '자기계발',
  '8': '창의성',
};
