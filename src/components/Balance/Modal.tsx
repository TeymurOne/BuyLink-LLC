import React from 'react';

interface ModalProps {
  isOpen: boolean;
  imageSrc: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, imageSrc, onClose }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  return isOpen ? (
    <div
      className={`fixed inset-0 z-999999 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      <div
        className="relative scale-95 transform transition-transform duration-300"
        style={{ transform: isVisible ? 'scale(1)' : 'scale(0.95)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-0 top-0 p-2 text-lg text-white"
          onClick={onClose}
        >
          &times;
        </button>
        <img src={imageSrc} alt="Bill" className="w-60 rounded md:w-75" />
      </div>
    </div>
  ) : null;
};

export default Modal;
