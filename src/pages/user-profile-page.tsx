import { memo } from "react";
import Navbar from "../components/reusable/navbar";
import RootLayout from "../layouts/root-layout";
import UserProfileSection from "../components/user-profile/user-profile-section";
import PersonalDetailsUpdate from "../components/user-profile/personal-details-update";


const UserProfilePage = memo(() => {
    return(
        <RootLayout>
            <Navbar/>
            <UserProfileSection/>
            <PersonalDetailsUpdate/>
        </RootLayout>
    )
});

export default UserProfilePage;