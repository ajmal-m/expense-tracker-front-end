import { memo } from "react";
import Button from "../reusable/button";


const DeleteModal = memo(({ close, confirm }: { close : () => void , confirm: () => void}) => {
    return(
        <div className="p-6 bg-blue-900 text-white rounded">
            <p>Do u want to delete ?</p>
            <div className="flex items-center gap-2 mt-[20px]">
                <Button label="Cancel" onClick={close} color="white" bgColor="blue"/>
                <Button label="Confirm" onClick={confirm} color="white" bgColor="red"/>
            </div>
        </div>
    )
});

export default DeleteModal;