import { memo } from "react";
import RootLayout from "../layouts/root-layout";
import Navbar from "../components/dashboard/navbar";
import AnalyticsBadges from "../components/dashboard/analytics-badges";
import AnalyticsGraphs from "../components/dashboard/analytics-graphs";
import RecentTransactions from "../components/dashboard/recent-transactions";


const Dashboard = memo(() => {
    return(
        <>
            <RootLayout>
                <Navbar/>
                <AnalyticsBadges/>
                <AnalyticsGraphs/>
                <RecentTransactions/>
            </RootLayout>
        </>
    )
});

export default Dashboard;