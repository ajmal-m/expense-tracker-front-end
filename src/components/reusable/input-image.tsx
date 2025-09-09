import { memo } from "react";

type ImageInputProps = {
    image: string;
    value: string | number ;
    handleChange ?: (e: any) => void;
    id: string;
    disabled?:boolean
}

export const ImageInput = memo((
    { image  , value, handleChange , id , disabled}: ImageInputProps
) => {
    return(
        <div className="relative">
            <img src={image} alt={id} className="absolute top-[19px] left-[15px]" />
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