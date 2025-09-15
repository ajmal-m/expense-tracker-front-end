
import Chart from "react-apexcharts";

const LineChart = ({ labels , values} : {
    labels:string[],
    values:number[]
}) => {
    const chartData  = {
        series: [{
            name: "Expenses",
            data: values
        }],
        options: {
            chart: {
                width:500,
                height: 350,
                type: "line" as const,
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "straight" as "straight"
            },
            title: {
                text: 'Expenses per Month',
                align: "left" as "left"
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'],
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: labels,
            }
        },
        
        
    };


    return (
        <Chart
            options={chartData.options}
            series={chartData.series}
            type="line"
            height={350}
            width={500}
        />
    );
}

export default LineChart;

