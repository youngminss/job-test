import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainPage, TestPage, ResultPage, NotFound } from '@src/pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/main" />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
