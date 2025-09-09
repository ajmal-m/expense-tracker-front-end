import { memo } from "react";

type SelectPropsType = {
    image ?: string;
    name: string;
    updateChange: (e: any) => void;
    value: string | number ;
    list : {name:string;value:string|number}[]
}

const Select = memo(({ image, name, updateChange, value, list} : SelectPropsType) => {
    return(
        <div className="relative">
            {
                image && (
                     <img src={image} alt={`${name}-icon`} className="absolute top-[22px] left-[15px]" />
                )
            }
            <select 
                name={name} id={name}
                className="w-[584px] h-[60px] border border-[#6B7280] rounded-[8px] pl-[40px]
                    text-[20px] font-inter font-[400] text-[#6B7280]"
                onChange={updateChange}
                value={value}
            >
                {
                    list.map((item, index) => (
                        <option value={item.name} key={index}>
                            {item.value} - {item.name}
                        </option>
                    ))
                }
            </select>
        </div>
    )
});

export default Select;