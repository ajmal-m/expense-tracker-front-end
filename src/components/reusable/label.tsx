import { memo } from "react";

type LabelProps = {
   name: string;
   label: string;
   size?:number;
   color?:string;
   weight?:number
}

const defaultValues = {
    color:"#111827",
    weight:400
}

const Label = memo(({  name  , label , size, color , weight } : LabelProps ) => {
    return(
        <>
         <label 
            htmlFor={name} 
            className="font-inter"
            style={{ 
                fontSize: size+"px",
                color:color ? color : defaultValues['color'] ,
                fontWeight:weight ? weight : defaultValues['weight']
            }}
        >
            {label}
         </label>
        </>
    )
});

export default Label;