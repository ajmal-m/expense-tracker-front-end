import { memo } from "react";
import RootLayout from "../layouts/root-layout";
import Navbar from "../components/reusable/navbar";
import AnalyticsBadges from "../components/dashboard/analytics-badges";
import AnalyticsGraphs from "../components/dashboard/analytics-graphs";
import RecentTransactions from "../components/dashboard/recent-transactions";
import Footer from "../components/dashboard/footer";


const Dashboard = memo(() => {
    return(
        <>
            <RootLayout>
                <Navbar/>
                <AnalyticsBadges/>
                <AnalyticsGraphs/>
                <RecentTransactions/>
                <Footer/>
            </RootLayout>
        </>
    )
});

export default Dashboard;