import { memo } from "react";
import AuthLayout from "../layouts/auth-layout";
import LogoImage from '../assets/LogoSmall.svg';
import GoogleIcon from '../assets/google_icon.svg';

const LoginPage = memo(() => {
    return(
        <>
         <AuthLayout>
            <div className="flex flex-col items-center py-[24px]">
                <img src={LogoImage} alt="logo" className="w-[100px] h-[100px]"/>
                <h2 className="text-[24px] font-inter text-[#000000] font-[400] mt-[24px]">Join FinSight Today</h2>
                <form>
                    <div className="flex flex-col gap-[6px] mt-[24px]">
                        <label htmlFor="" className="text-[12px] text-[#111827] font-inter font-[400]">Name</label>
                        <input 
                            type="text" 
                            className="w-[433px] h-[48px] border border-[#6B7280] rounded-[8px] 
                            focus:border-[#2563EB] focus:outline-[#2563EB] pl-[20px]" 
                        />
                    </div>
                    <div className="flex flex-col gap-[6px] mt-[24px]">
                        <label htmlFor="" className="text-[12px] text-[#111827] font-inter font-[400]">Email Address</label>
                        <input 
                            type="text" 
                            className="w-[433px] h-[48px] border border-[#6B7280] rounded-[8px] 
                            focus:border-[#2563EB] focus:outline-[#2563EB] pl-[20px]" 
                        />
                    </div>
                    <div className="flex flex-col gap-[6px] mt-[24px]">
                        <label htmlFor="" className="text-[12px] text-[#111827] font-inter font-[400]">Password</label>
                        <input 
                            type="text" 
                            className="w-[433px] h-[48px] border border-[#6B7280] rounded-[8px] 
                            focus:border-[#2563EB] focus:outline-[#2563EB] pl-[20px]" 
                        />
                    </div>
                    <div className="flex flex-col gap-[6px] mt-[24px]">
                        <label htmlFor="" className="text-[12px] text-[#111827] font-inter font-[400]">Confirm Password</label>
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
                    <div className="flex items-center justify-center mt-[12px]">
                        <span className="text-[12px] font-[400] font-inter text-[#111827]">
                            OR
                        </span>
                    </div>
                    <div className="mt-[12px]">
                        <button
                            className="
                                w-[433px] h-[38px] flex justify-center
                                items-center gap-[6px]
                                border-[2px] border-[#2563EB] rounded-[8px]
                                cursor-pointer
                            "
                        >
                            <img src={GoogleIcon} alt="google-icon" />
                            <p
                                className="
                                    text-[16px] font-bold font-inter
                                    text-[#2563EB] tracking-[0%]
                                "
                            >Continue with Google</p>
                        </button>
                    </div>
                    <div className="mt-[12px]">
                        <p
                            className="
                                text-[12px] text-[#111827] italic font-inter text-center

                            "
                        >
                            Already have an account? <span className="text-[#2563EB]">Login</span>
                        </p>
                        <p className="mt-[12px] text-[#111827] text-[12px] italic font-inter text-center">
                            🔒 Your data is encrypted and never shared without your consent.
                        </p>
                    </div>
                </form>
            </div>
         </AuthLayout>
        </>
    )
});

export default LoginPage;