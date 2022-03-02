import { CART_DATAS } from '@common/constants';

export const getPieChartData = (qestrnSeq: string, frequencyString: string) => {
  const convertedFrequencys = frequencyString.trim().split(' ');
  const chartData = convertedFrequencys.map((convertedFrequency) => {
    const [valueNo, frequency] = convertedFrequency.split('=');
    const label = CART_DATAS[qestrnSeq][valueNo];

    return {
      id: label,
      label: label,
      value: frequency,
      color: `hsl(${Number(valueNo) + 1}, 70%, 50%)`,
    };
  });
  return chartData;
};

export const getBarChartData = (quetrnSeq: string, frequencyStrings: string[]) => {
  console.log(frequencyStrings);
};
