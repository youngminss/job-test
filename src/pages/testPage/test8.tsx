import { useQuery } from 'react-query';
import { getTest } from '@service/testService';
import { storage } from '@utils/storage';

const Test8 = () => {
  const queryNumber = storage.getItem('test-number');
  const { isLoading, isError, data } = useQuery(`test=${queryNumber}`, async () => await getTest(queryNumber));

  console.log(isLoading, isError, data);

  return <div>Test 8</div>;
};

export default Test8;
