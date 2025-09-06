import { memo } from "react";


const ProgressBar = memo(({ width , color }: { width: number ; color: string;}) => {
    return(
        <>
            <div className="w-[100%] bg-[#ffffff96] rounded-full h-2.5 dark:bg-[rgba(255,255,255,0.77)]">
                <div className={`h-2.5 rounded-full`} style={{width:`${width}%`, background:`${color}`}}></div>
            </div>
        </>
    )
});

export default ProgressBar;