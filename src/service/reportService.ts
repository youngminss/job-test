import { apiReportClient } from './root';

export const getReportResult = async (seq: string) => {
  const { data } = await apiReportClient.get<any>(`/report?seq=${seq}`);
  return data;
};
