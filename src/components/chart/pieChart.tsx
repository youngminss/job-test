import { ResponsivePie } from '@nivo/pie';
import { css, useTheme } from '@emotion/react';

const CustomPieChart = ({ data }: { data: string[] }) => {
  const theme = useTheme();

  return (
    <div css={PieChartContainer()}>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={20}
        activeInnerRadiusOffset={10}
        colors={{ scheme: 'category10' }}
        borderWidth={1}
        borderColor="#000000"
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.fontSubColor}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', 2]],
        }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
      />
    </div>
  );
};

export default CustomPieChart;

const PieChartContainer = () => css`
  width: 800px;
  height: 600px;
`;
