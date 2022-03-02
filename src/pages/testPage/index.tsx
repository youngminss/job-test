import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import TestBinary from '@pages/testPage/testBinary';
import TestMulti from '@pages/testPage/testMulti';
import NotFound from '@pages/notFound';
import Spinner from '@components/spinner';
import { TEST_PAGE_NUMBER } from '@common/constants';

const TestPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path={TEST_PAGE_NUMBER.TEST_6} element={<TestBinary />} />
        <Route path={TEST_PAGE_NUMBER.TEST_8} element={<TestMulti />} />
        <Route path={TEST_PAGE_NUMBER.TEST_9} element={<TestMulti />} />
        <Route path={TEST_PAGE_NUMBER.TEST_10} element={<TestMulti />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default TestPage;
