import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IntroPage, TestPage, ReportPage, NotFound } from '@src/pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/app" element={<TestPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
