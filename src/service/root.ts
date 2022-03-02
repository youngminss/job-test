import axios from 'axios';

export const API_KEY = '8ae87adbbfc34f50eb84444700264097';
export const apiTestClient = axios.create({
  baseURL: 'https://www.career.go.kr/inspct/openapi/test',
  headers: {
    'Content-type': 'application/json',
  },
});

export const apiReportClient = axios.create({
  baseURL: 'https://inspct.career.go.kr/inspct/api/psycho',
  headers: {
    'Content-type': 'application/json',
  },
});
