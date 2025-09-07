import { memo } from "react";
import LogoSmall from '../../assets/LogoSmall.svg';
import HomeIcon from '../../assets/Home.svg';
import AddIcon from '../../assets/add.svg';
import listIcon from '../../assets/list.svg';
import analyticsIcon from '../../assets/analytics.png';
import contactIcon from '../../assets/contact.png';
import notificationIcon from '../../assets/notification.svg';

const Navbar = memo(() => {
    return(
        <>
        <div className="w-full h-[100px] bg-[#FFFFFF] flex justify-between items-center">
            <div className="flex items-center">
                <img src={LogoSmall} alt="logo-small" className="w-[80px] h-[80px]"/>
                <p className="text-[32px] text-[#2563EB] font-semibold font-lora">FinSight</p>
            </div>

            <div className="flex items-center gap-[40px]">
                <button className="cursor-pointer">
                    <img src={HomeIcon} alt="home-icon"/>
                </button>
                <button className="cursor-pointer">
                    <img src={AddIcon} alt="add-icon"/>
                </button>
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
                <button className="cursor-pointer">
                    <img src={contactIcon} alt="contact-icon"/>
                </button>
            </div>
        </div>
        </>
    )
});

export default Navbar;