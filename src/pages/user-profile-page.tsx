import { memo } from "react";
import Navbar from "../components/reusable/navbar";
import RootLayout from "../layouts/root-layout";
import UserProfileSection from "../components/user-profile/user-profile-section";


const UserProfilePage = memo(() => {
    return(
        <RootLayout>
            <Navbar/>
            <UserProfileSection/>
        </RootLayout>
    )
});

export default UserProfilePage;