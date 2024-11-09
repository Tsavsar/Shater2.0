import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Don't render the modal if it’s closed

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close the modal when clicking outside of the content area
      document.body.style.overflow = '';
    }
  };

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }

//     // Cleanup to reset overflow when component unmounts
//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [isOpen]);

  return ReactDOM.createPortal(
    <div role="dialog" aria-modal="true"
      className="fixed inset-0 hidden min-[375px]:flex items-center justify-center bg-black bg-opacity-90 z-50"
      onClick={handleBackgroundClick}
    >
        {/* bg-white rounded-lg shadow-lg */}
      <div className="">
        <div>{children}</div>
      </div>
    </div>,
    document.body // Attach to document.body to avoid any parent constraints
  );
};

export default Modal;
