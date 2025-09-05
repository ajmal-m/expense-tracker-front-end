import { memo } from "react";

type InputProps = {
    type: string; 
    value: string|number; 
    name: string; 
    updateValue: (name: string , value: string | number) => void
}

const Input = memo(({ type , value, name , updateValue } : InputProps ) => {
    return(
        <>
         <input 
            type={type} 
            name={name}
            id={name}
            className="w-[350px] sm:w-[433px] h-[48px] border border-[#6B7280] rounded-[8px] 
            focus:border-[#2563EB] focus:outline-[#2563EB] pl-[20px]" 
            value={value}
            onChange={(e) => updateValue(name ,e.target.value)}
        />
        </>
    )
});

export default Input;