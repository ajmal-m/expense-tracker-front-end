import { memo } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";


const Dashboard = memo(() => {
    const user = useSelector((store : RootState) => store.auth.user);
    return(
        <>
        <div>
            <h1>Dashboard</h1>
            <h2>{user?.name}</h2>
            <h3>{user?.email}</h3>
        </div>
        </>
    )
});

export default Dashboard;