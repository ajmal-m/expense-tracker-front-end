import { memo } from "react"
import LineChart from "../charts/line-chart"
import PieChart from "../charts/pie-chart"

const AnalyticsGraphs = memo ( () => {
    return(
        <>
        
        <div className="flex items-center justify-between mt-[24px] border-t border-[#6B7280] pt-[8px]">
            <LineChart/>
            <PieChart/>
        </div>
        </>
    )
});

export default AnalyticsGraphs;