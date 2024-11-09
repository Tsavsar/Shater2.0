import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  if (!isOpen) return null; 

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div role="dialog" aria-modal="true"
      className="fixed inset-0 hidden min-[375px]:flex items-center justify-center bg-black bg-opacity-95 z-50"
      onClick={handleBackgroundClick}
    >
        {/* bg-white rounded-lg shadow-lg */}
      <div className="" onClick={(e) => e.stopPropagation()}>
        <div>{children}</div>
      </div>
    </div>,
    document.body 
  );
};

export default Modal;
