import { memo } from "react";

type ButtonProps = {
    onClick ?: () => void,
    label: string;
    bgColor:string;
    color:string;
    width?:number
}

const Button = memo((
    { onClick, label, color, bgColor , width} : ButtonProps
) => {
    return(
        <button onClick={onClick} 
            className={`
                p-[4px] rounded font-inter 
                font-bold cursor-pointer py-[10px]`
            }

            style={{
                background:bgColor,
                color:color,
                width:width+"px"
            }}

        >
            {label}
        </button>
    )
});

export default Button;