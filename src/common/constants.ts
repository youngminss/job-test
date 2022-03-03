import { Gender, TestContent, TargetSerial } from '@common/types';

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
  testContent: '테스트 유형을 선택해주세요. ☝',
  name: '이름을 입력해주세요. ☝',
  gender: '성별을 선택해주세요. ☝',
  targetSe: '본인 소속을 선택해주세요. ☝',
};

export const CART_DATAS: { [key: string]: { [key: string]: string } } = {
  '6': {
    '1': '능력발휘',
    '2': '자율성',
    '3': '보수',
    '4': '안정성',
    '5': '사회적 인정',
    '6': '사회봉사',
    '7': '자기계발',
    '8': '창의성',
  },
  '8': {
    '1': '자기이해',
    '2': '전공 직업지식',
    '3': '진로결정확신도',
    '4': '의사결정자신감',
    '5': '관계활용자신감',
    '6': '구직준비도',
  },
  '9': {
    '1': '수학',
    '2': '물리',
    '3': '생명',
    '4': '지구',
    '5': '건축토목',
    '6': '기계',
    '7': '재료금속',
    '8': '전기전자',
    '9': '컴퓨터',
    '10': '화학(공학)',
    '11': '산업공학',
  },
  '10': {
    '1': '신체 & 운동능력',
    '2': '공간 & 지각능력',
    '3': '음악능력',
    '4': '창의력',
    '5': '언어능력',
    '6': '수리 & 논리능력',
    '7': '자기성찰능력',
    '8': '대인관계능력',
    '9': '자연친화능력',
  },
};
