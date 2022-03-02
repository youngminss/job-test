import { API_KEY, apiTestClient } from './root';
import { TestPostOptionData } from './types';

export const getTest = async (queryNumber: string) => {
  const { data } = await apiTestClient.get<any>(`/questions?apikey=${API_KEY}&q=${queryNumber}`);
  return data;
};

export const postTest = async (queryNumber: string, postData: TestPostOptionData) => {
  const { data } = await apiTestClient.post<any>(`/report`, JSON.stringify(postData));
  return data;
};
