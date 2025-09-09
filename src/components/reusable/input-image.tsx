import { memo } from "react";

type ImageInputProps = {
    image: string;
    value: string | number ;
    handleChange ?: (e: any) => void;
    id: string;
    disabled?:boolean,
    imageTop?: number;
    imageLeft?:number;
}

export const ImageInput = memo((
    { image  , value, handleChange , id , disabled , imageTop, imageLeft}: ImageInputProps
) => {
    return(
        <div className="relative">
            <img 
                src={image} 
                alt={id} 
                className="absolute"
                style={{
                    top: imageTop+'px',
                    left: imageLeft+'px',
                }} 
            />
            <input type="text" name="name" id="name"
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