import { memo, type ReactNode } from "react";

const BadgeLayout = memo(({ children }: { children : ReactNode}) => {
    return(
        <>
            <div 
                className="
                    flex items-center w-[379px] h-[107px] 
                    rounded-[12px] bg-[#E5E7EB] 
                    shadow-[1px_2px_6px_1px_rgba(0,0,0,1)]
                "
            >
                {children}
            </div>
        </>
    )
});

export default BadgeLayout;