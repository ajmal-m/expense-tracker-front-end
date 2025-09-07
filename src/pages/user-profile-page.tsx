import { memo } from "react";
import Navbar from "../components/reusable/navbar";
import RootLayout from "../layouts/root-layout";


const UserProfilePage = memo(() => {
    return(
        <RootLayout>
            <Navbar/>
        </RootLayout>
    )
});

export default UserProfilePage;