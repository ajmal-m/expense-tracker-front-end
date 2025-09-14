import { memo, useEffect, useState } from "react"
import LineChart from "../charts/line-chart"
import PieChart from "../charts/pie-chart"
import { getCurrentYearMonthlyData , getMonthlyCategoriesExpense } from "../../api/analytics-service";

const AnalyticsGraphs = memo ( () => {

    const [labels, setLabels] = useState<string[]>([]);
    const [values, setValues] = useState<number[]>([]);

    const [pieLabels, setPieLabels] = useState<string[]>([]);
    const [pieValues, setPieValues] = useState<number[]>([]);

    useEffect(() => {
        const fetchMonthlyAnalyticsData = async() => {
            try {
                const data = await getCurrentYearMonthlyData();
                setLabels([ ...Object.keys(data)]);
                setValues([ ...Object.values(data) as number[] ]);
            } catch (error) {
                console.log(error);
            }
        };

        const fetchMonthlyCategoryExpense = async() => {
            try {
                const data = await getMonthlyCategoriesExpense();
                setPieLabels(data.categoryNames);
                setPieValues(data.expenses);
            } catch (error) {
                console.log(error);
            }
        };

        fetchMonthlyAnalyticsData();
        fetchMonthlyCategoryExpense();
    }, [])
    return(
        <>
        
        <div className="flex items-center justify-between mt-[24px] border-t border-[#6B7280] pt-[8px]">
            <LineChart labels={labels} values={values}/>
            <PieChart labels={pieLabels} values={pieValues}/>
        </div>
        </>
    )
});

export default AnalyticsGraphs;