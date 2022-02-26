import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Test8 from '@pages/testPage/test8';
import Test6 from '@pages/testPage/test6';
import Test9 from '@pages/testPage/test9';
import Test10 from '@pages/testPage/test10';
import NotFound from '@pages/notFound';
import Spinner from '@components/spinner';
import { TEST_PAGE_NUMBER } from '@common/constants';

const TestPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path={TEST_PAGE_NUMBER.TEST_6} element={<Test6 />} />
        <Route path={TEST_PAGE_NUMBER.TEST_8} element={<Test8 />} />
        <Route path={TEST_PAGE_NUMBER.TEST_9} element={<Test9 />} />
        <Route path={TEST_PAGE_NUMBER.TEST_10} element={<Test10 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default TestPage;
