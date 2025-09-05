import { memo } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import RootLayout from "../layouts/root-layout";


const Dashboard = memo(() => {
    const user = useSelector((store : RootState) => store.auth.user);
    return(
        <>
        <RootLayout>
             <div>
                <h1>Dashboard</h1>
                <h2>{user?.name}</h2>
                <h3>{user?.email}</h3>
            </div>
        </RootLayout>
        </>
    )
});

export default Dashboard;