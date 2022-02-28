import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import Spinner from '@components/spinner';
import NotFound from '@pages/notFound';
import CustomPieChart from '@components/pieChart';
import { getReportResult } from '@service/reportService';
import { ReportUseData } from '@service/types';
import { getChartData } from '@common/reportChartMaker';
import Button from '@shared/components/button';

const ReportPage = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const state = location?.state as ReportUseData;
  const { name, url } = state;
  const { isError, isLoading, isFetched, data } = useQuery('get-report-data', async () =>
    getReportResult(url.split('=')[1])
  );
  const [chartData, setChartData] = useState<any>();

  useEffect(() => {
    if (isFetched) {
      const frequencyString = data.result?.wonScore;
      setChartData(getChartData(frequencyString));
    }
  }, [isFetched]);

  if (isLoading) return <Spinner />;
  if (isError) return <NotFound />;
  return (
    <div>
      <CustomPieChart data={chartData} />

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
        <Button type="button" clickHandler={() => navigation('/', { replace: true })}>
          홈으로
        </Button>
      </div>
    </div>
  );
};

export default ReportPage;
