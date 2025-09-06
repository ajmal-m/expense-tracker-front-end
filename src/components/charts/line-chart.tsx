
import Chart from "react-apexcharts";

const LineChart = () => {
    const chartData  = {
        series: [{
            name: "Expenses",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        options: {
            chart: {
                width:500,
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: 'Expenses per Month',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
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

