import { memo } from "react";
import LogoSmall from '../../assets/LogoSmall.svg';
import HomeIcon from '../../assets/Home.svg';
import AddIcon from '../../assets/add.svg';
import listIcon from '../../assets/list.svg';
import analyticsIcon from '../../assets/analytics.png';
import profileIcon from '../../assets/contact.png';
import notificationIcon from '../../assets/notification.svg';
import DefaultModal from "./model";
import AddExpenseModel from "../models/add-expenses";
import { useNavigate } from "react-router-dom";

const Navbar = memo(() => {

    const navigate = useNavigate();
    const gotToProfile = () => navigate('/user-profile');
    const gotToDashboard = () => navigate('/dashboard');
    return(
        <>
        <div className="w-full h-[100px] bg-[#FFFFFF] flex justify-between items-center">
            <div className="flex items-center">
                <img src={LogoSmall} alt="logo-small" className="w-[80px] h-[80px] cursor-pointer" onClick={gotToDashboard}/>
                <p className="text-[32px] text-[#2563EB] font-semibold font-lora">FinSight</p>
            </div>

            <div className="flex items-center gap-[40px]">
                <button className="cursor-pointer"  onClick={gotToDashboard}>
                    <img src={HomeIcon} alt="home-icon"/>
                </button>
                <DefaultModal 
                    icon={AddIcon}
                    model={(close) => (
                        <AddExpenseModel close={close}/>
                    )}
                />
                <button className="cursor-pointer">
                    <img src={listIcon} alt="list-icon"/>
                </button>
                 <button className="cursor-pointer">
                    <img src={analyticsIcon} alt="analytics-icon"/>
                </button>
            </div>

            <div className="flex items-center gap-[24px]">
                <button className="cursor-pointer"> 
                    <img src={notificationIcon} alt="notification-icon"/>
                </button>
                <button className="cursor-pointer" onClick={gotToProfile}>
                    <img src={profileIcon} alt="contact-icon"/>
                </button>
            </div>
        </div>
        </>
    )
});

export default Navbar;