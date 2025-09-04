import { memo } from "react";
import AuthLayout from "../layouts/auth-layout";
import LogoImage from '../assets/LogoSmall.svg';

const LoginPage = memo(() => {
    return(
        <>
         <AuthLayout>
            <div className="flex flex-col items-center py-[24px]">
                <img src={LogoImage} alt="logo" className="w-[100px] h-[100px]"/>
                <h2 className="text-[24px] font-inter text-[#000000] font-[400] mt-[24px]">Join FinSight Today</h2>
                <form>
                    <div className="flex flex-col gap-[6px] mt-[24px]">
                        <label htmlFor="">Name</label>
                        <input 
                            type="text" 
                            className="w-[433px] h-[48px] border border-[#6B7280] rounded-[8px] 
                            focus:border-[#2563EB] focus:outline-[#2563EB] pl-[20px]" 
                        />
                    </div>
                    <div className="flex flex-col gap-[6px] mt-[24px]">
                        <label htmlFor="">Email Address</label>
                        <input 
                            type="text" 
                            className="w-[433px] h-[48px] border border-[#6B7280] rounded-[8px] 
                            focus:border-[#2563EB] focus:outline-[#2563EB] pl-[20px]" 
                        />
                    </div>
                    <div className="flex flex-col gap-[6px] mt-[24px]">
                        <label htmlFor="">Password</label>
                        <input 
                            type="text" 
                            className="w-[433px] h-[48px] border border-[#6B7280] rounded-[8px] 
                            focus:border-[#2563EB] focus:outline-[#2563EB] pl-[20px]" 
                        />
                    </div>
                    <div className="flex flex-col gap-[6px] mt-[24px]">
                        <label htmlFor="">Confirm Password</label>
                        <input 
                            type="text" 
                            className="w-[433px] h-[48px] border border-[#6B7280] rounded-[8px] 
                            focus:border-[#2563EB] focus:outline-[#2563EB] pl-[20px]" 
                        />
                    </div>
                    <div className="mt-[24px]">
                        <button
                            className="
                            w-[433px] h-[38px] bg-[#2563EB] rounded-[8px] 
                            flex items-center justify-center text-[#FFFFFF]
                            text-[16px] font-bold font-inter cursor-pointer
                            "
                        >
                            CREATE ACCOUNT
                        </button>
                    </div>
                </form>
            </div>
         </AuthLayout>
        </>
    )
});

export default LoginPage;