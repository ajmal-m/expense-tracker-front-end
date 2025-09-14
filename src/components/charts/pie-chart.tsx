import { memo } from "react";
import Chart from "react-apexcharts";

const PieChart = memo( ({ labels , values} : {
    labels:string[],
    values:number[]
}) => {
  const chartData = {
    series: values,
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: labels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="pie"
        width={380}
      />
  );
});

export default PieChart;
