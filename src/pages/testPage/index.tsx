import { useLocation } from 'react-router-dom';

interface LocationState {
  testName: string;
  queryNumber: string;
}
const TestPage = () => {
  const location = useLocation();
  const state = location.state as LocationState;
  const { testName, queryNumber } = state;

  return (
    <div>
      <h1>
        {testName} {queryNumber}
      </h1>
    </div>
  );
};

export default TestPage;
