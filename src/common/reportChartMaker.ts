import { NUMBER_TO_VALUES } from '@common/constants';

export const getChartData = (frequencyString: string) => {
  const convertedFrequencys = frequencyString.trim().split(' ');
  const chartData = convertedFrequencys.map((convertedFrequency) => {
    const [valueNo, frequency] = convertedFrequency.split('=');
    const label = NUMBER_TO_VALUES[valueNo];

    return {
      id: label,
      label: label,
      value: frequency,
      color: `hsl(${Number(valueNo) + 1}, 70%, 50%)`,
    };
  });

  return chartData;
};
