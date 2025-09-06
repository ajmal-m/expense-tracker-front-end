import { memo } from "react";
import RootLayout from "../layouts/root-layout";
import Navbar from "../components/dashboard/navbar";
import AnalyticsBadges from "../components/dashboard/analytics-badges";


const Dashboard = memo(() => {
    return(
        <>
            <RootLayout>
                <Navbar/>
                <AnalyticsBadges/>
            </RootLayout>
        </>
    )
});

export default Dashboard;