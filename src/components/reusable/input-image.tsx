import { memo } from "react";

type ImageInputProps = {
    image?: string;
    value: string | number ;
    handleChange ?: (e: any) => void;
    id: string;
    disabled?:boolean,
    imageTop?: number;
    imageLeft?:number;
    type?:string;
}

export const ImageInput = memo((
    { image  , value, handleChange , id , disabled , imageTop, imageLeft, type}: ImageInputProps
) => {
    return(
        <div className="relative">
            {
                image && (
                    <img 
                        src={image} 
                        alt={id} 
                        className="absolute"
                        style={{
                            top: imageTop+'px',
                            left: imageLeft+'px',
                        }} 
                    />
                )
            }
            <input 
                type={type ? type : "text"}
                name={id} id={id}
                className="w-[584px] h-[60px] border border-[#6B7280] rounded-[8px] pl-[40px]
                    text-[20px] font-inter font-[400] text-[#6B7280]
                "
                value={value}
                onChange={handleChange}
                disabled={disabled}
            />
        </div>
    )
});

export default ImageInput;