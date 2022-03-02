import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PieChartReport from '@pages/reportPage/pieChartReport';
import BarChartReport from '@pages/reportPage/barChartReport';
import NotFound from '@pages/notFound';
import Spinner from '@components/spinner';

const TestPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path={'/report/pieReport'} element={<PieChartReport />} />
        <Route path={'/report/barReport'} element={<BarChartReport />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default TestPage;
