import { memo } from "react";


const DeleteModal = memo(({ close, confirm }: { close : () => void , confirm: () => void}) => {
    return(
        <div className="p-2 bg-blue-900 text-white rounded">
            <p>Do u want to delete</p>
            <button onClick={close}>cancel</button>
            <button onClick={confirm}> Confirm</button>
        </div>
    )
});

export default DeleteModal;