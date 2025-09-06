import { memo } from "react";

const Footer = memo(() => {
    const currentYear = new Date().getFullYear();
    return(
       <div className="w-full h-[80px] bg-[#E5E7EB] flex items-center justify-center mt-6">
        <p className="text-[#111827] text-[14px] font-[400] font-inter">Copyright © {currentYear} FinSight. All rights reserved.</p>
       </div>
    )
});

export default Footer;