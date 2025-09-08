import { memo } from "react";
import emailIcon from '../../assets/email-icon.svg';
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { logout } from "../../slices/authSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const UserProfileSection = memo(() => {

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout());
        toast.success("Logout succesfully");
        navigate('/login');
    }
    return(
        <div className="mt-[24px]">
            <h2
                className="text-[36px] font-bold font-inter text-[#111827]"
            >
                Profile & Settings
            </h2>
            <div className="flex justify-between items-center mt-[24px]">
                <div className="flex items-center gap-[16px]">
                    <img 
                    className="rounded-full w-[100px] h-[100px] object-cover"
                    src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" 
                    alt="user-profile" />
                    <div>
                        <h3 className="text-[24px] font-semibold font-inter text-[#111827]">Jon Snow</h3>
                        <div className="text-[20px] text-[#6B7280] font-inter font-[400]">
                            <div className="flex items-center gap-2">
                                <img src={emailIcon} alt="email-icon"/>
                                <span className="text-[20px] text-[#6B7280] font-[400] font-inter" >jonsnow@example.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="bg-[#6B7280] w-[96px] h-[36px] rounded cursor-pointer"
                    type="button"
                    onClick={handleLogout}
                >
                    <span className="text-[12px] font-bold font-inter text-[#FFFFFF]">LOGOUT</span>
                </button>
            </div>
        </div>
    )
});

export default UserProfileSection;