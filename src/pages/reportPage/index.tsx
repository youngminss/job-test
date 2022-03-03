import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PieChartReport from '@pages/reportPage/pieChartReport';
import BarChartReport from '@pages/reportPage/barChartReport';
import NotFound from '@pages/notFound';
import Spinner from '@components/spinner';

const ReportPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path={'/pieReport'} element={<PieChartReport />} />
        <Route path={'/barReport'} element={<BarChartReport />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default ReportPage;
