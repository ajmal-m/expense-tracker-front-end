import { memo, useState, type ReactNode } from "react";



const  DefaultModal = memo( ({  model, trigger } : {  model: (handleClose: () => void) => ReactNode, trigger:  (handleClose: () => void) => ReactNode } ) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);


  return (
    <>
      {
        trigger(handleOpen)
      }

      {isOpen && (
        <div
          tabIndex={-1}
          aria-hidden="true"
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto 
                     overflow-x-hidden bg-gray-900/50 dark:bg-gray-900/80"
        >
          {model(handleClose)}
        </div>
      )}
    </>
  );
});

export default DefaultModal;
