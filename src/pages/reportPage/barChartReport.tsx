import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import Spinner from '@components/spinner';
import NotFound from '@pages/notFound';
import { CustomBarChart } from '@components/chart';
import { getReportResult } from '@service/reportService';
import { ReportUseData } from '@service/types';
import { getBarChartData } from '@src/common/reportChartDataMaker';
import { css, useTheme } from '@emotion/react';
import { Theme } from '@src/shared/style/types';

const BarChartReport = () => {
  const location = useLocation();
  const state = location?.state as ReportUseData;
  const { qestrnSeq, name, url } = state;
  const { isError, isLoading, isFetched, data } = useQuery('get-report-data', async () =>
    getReportResult(url.split('=')[1])
  );
  const [chartData, setChartData] = useState<any>();
  const theme = useTheme();

  useEffect(() => {
    if (isFetched) {
      const frequencyStrings = [data.result?.wonScore, data.result?.wonScore2];
      setChartData(getBarChartData(qestrnSeq, frequencyStrings));
    }
  }, [isFetched]);

  if (isLoading) return <Spinner />;
  if (isError) return <NotFound />;
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
      `}
    >
      <CustomBarChart data={chartData} />

      <div>
        <table css={tableStyle(theme)}>
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
                <a
                  css={css`
                    color: ${theme.fontSubColor};
                  `}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  확인하러가기 🚀
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        css={css`
          margin: 20px;
        `}
      >
        <a
          css={css`
            font-size: 1.5rem;
            color: ${theme.fontSubColor};
          `}
          href="/"
        >
          홈으로
        </a>
      </div>
    </div>
  );
};

export default BarChartReport;

const tableStyle = (theme: Theme) => css`
  & {
    border-collapse: collapse;
  }

  & thead,
  & td {
    border: 1px solid ${theme.fontSubColor};
    padding: 10px;
  }

  & tbody tr > td:nth-of-type(2) {
    text-align: center;
  }

  font-size: 1.5rem;
  color: ${theme.fontSubColor};
`;
