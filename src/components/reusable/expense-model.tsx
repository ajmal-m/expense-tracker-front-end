import { memo, useState, type ReactNode } from "react";



const  DefaultModal = memo( ({ icon, model } : { icon : string; model: (handleClose: () => void) => ReactNode } ) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="cursor-pointer"
      >
        <img src={icon} alt="add-icon"/>
      </button>

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
