import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import Spinner from '@components/spinner';
import NotFound from '@pages/notFound';
import { CustomBarChart } from '@components/chart';
import { getReportResult } from '@service/reportService';
import { ReportUseData } from '@service/types';
import { getBarChartData } from '@src/common/reportChartDataMaker';

const BarChartReport = () => {
  const location = useLocation();
  const state = location?.state as ReportUseData;
  const { qestrnSeq, name, url } = state;
  const { isError, isLoading, isFetched, data } = useQuery('get-report-data', async () =>
    getReportResult(url.split('=')[1])
  );
  const [chartData, setChartData] = useState<any>();

  useEffect(() => {
    if (isFetched) {
      const frequencyStrings = [data.result?.wonScore, data.result?.wonScore2];
      console.log(frequencyStrings);
      // setChartData(getBarChartData(state.qestrnSeq, frequencyString));
    }
  }, [isFetched]);

  if (isLoading) return <Spinner />;
  if (isError) return <NotFound />;
  return (
    <div>
      <CustomBarChart data={chartData} />

      <div>
        <table>
          <thead>
            <tr>
              <th colSpan={2}>테스트 결과</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>테스트이름</td>
              <td>{data.inspct.qestnrNm}</td>
            </tr>
            <tr>
              <td>성함</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td>검사일자</td>
              <td>{data.result.endDtm.split('T')[0]}</td>
            </tr>
            <tr>
              <td>상세정보링크</td>
              <td>
                <a href={url} target="_blank" rel="noreferrer">
                  확인하러가기 🚀
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <a href="/">홈으로</a>
      </div>
    </div>
  );
};

export default BarChartReport;
