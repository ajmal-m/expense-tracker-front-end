import { memo } from "react";

type LabelProps = {
   name: string;
   label: string;
}

const Label = memo(({  name  , label } : LabelProps ) => {
    return(
        <>
         <label htmlFor={name} className="text-[12px] text-[#111827] font-inter font-[400]">
            {label}
         </label>
        </>
    )
});

export default Label;