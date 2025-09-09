import { memo } from "react";

type HeadingTypes = {
    label: string;
}

const MainHeading = memo((
    { label } : HeadingTypes
) => {
    return(
         <h2 className="text-[24px] text-[#111827] font-bold font-inter">
            {label}
         </h2>
    )
});

export default MainHeading;