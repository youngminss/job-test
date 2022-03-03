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
  const convertedFrequencys = frequencyStrings.map((frequencyString) => frequencyString.split(',').slice(0, -1));
  const chartData = convertedFrequencys[0].map((_: any, i: number) => {
    const label = CART_DATAS[quetrnSeq][i + 1];

    return {
      subject: label,
      전공효능감: Number(convertedFrequencys[0][i]),
      majorEfficacyColor: `hsl(1, 70%, 50%)`,
      전공직업흥미도: Number(convertedFrequencys[1][i]),
      majorInterestColor: `hsl(1, 70%, 50%)`,
    };
  });

  return chartData;
};
