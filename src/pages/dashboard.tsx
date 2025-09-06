import { memo } from "react";
import RootLayout from "../layouts/root-layout";
import Navbar from "../components/dashboard/navbar";
import AnalyticsBadges from "../components/dashboard/analytics-badges";
import AnalyticsGraphs from "../components/dashboard/analytics-graphs";


const Dashboard = memo(() => {
    return(
        <>
            <RootLayout>
                <Navbar/>
                <AnalyticsBadges/>
                <AnalyticsGraphs/>
            </RootLayout>
        </>
    )
});

export default Dashboard;