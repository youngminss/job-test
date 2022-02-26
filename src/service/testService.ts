import axios from 'axios';

const API_KEY = '8ae87adbbfc34f50eb84444700264097';
const apiClient = axios.create({
  baseURL: 'https://www.career.go.kr/inspct/openapi/test',
  headers: {
    'Content-type': 'application/json',
  },
});

export const getTest = async (queryNumber: string) => {
  const { data } = await apiClient.get<any>(`/questions?apikey=${API_KEY}&q=${queryNumber}`);
  return data;
};

export const postTest = async (queryNumber: string) => {
  const { data } = await apiClient.post<any>(`/report?apikey=${API_KEY}&qestrnSeq=${queryNumber}`);
  return data;
};
