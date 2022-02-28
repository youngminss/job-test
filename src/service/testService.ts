import { API_KEY, apiClient } from './root';
import { TestPostOptionData } from './types';

export const getTest = async (queryNumber: string) => {
  const { data } = await apiClient.get<any>(`/questions?apikey=${API_KEY}&q=${queryNumber}`);
  return data;
};

export const postTest = async (queryNumber: string, postData: TestPostOptionData) => {
  const { data } = await apiClient.post<any>(`/report`, JSON.stringify(postData));
  return data;
};
