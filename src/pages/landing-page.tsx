import { memo } from "react";
import Logo from '../../public/Logo.svg';

const LandingPage = memo(() => {
    return(
        <>
            <div 
                className="
                    h-screen w-full flex items-center 
                    justify-center flex-col
                "
            >
                <img src={Logo} alt="logo-landing-page"/>
                <h1 className="text-[32px] font-bold text-[#2563EB] leading-[auto] tracking-[15%]">FinSight</h1>
                <p className="text-[#111827] text-[36px] leading-[auto] font-semibold text-center">
                    Start Tracking Smarter.
                    <br/>
                    Take control of your money with AI-powered insights.
                </p>
                <p className="text-[#6B7280] text-[24px] italic">
                    Track expenses, set budgets, and get real-time financial advice — all in one place.
                </p>
                <div className="flex items-center gap-[32px] mt-[32px]">
                    <button className="cursor-pointer bg-[#2563EB] text-[#FFFFFF] rounded-[50px] w-[124px] h-[45px] font-semibold text-[24px]">
                        SIGNUP
                    </button>
                    <button className="cursor-pointer border border-[#2563EB] bg-[#FFFFFF] text-[#2563EB] rounded-[50px] w-[106px] h-[45px] font-semibold text-[24px]">
                        LOGIN
                    </button>
                </div>
            </div>
        </>
    )
});

export default LandingPage;