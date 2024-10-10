import React, { useEffect, useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";

const Modal = ({ show, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Use useEffect to add/remove the class to prevent body scroll
  useEffect(() => {
    if (show) {
      document.body.classList.add("overflow-hidden");
      // Delay setting the modal as visible to trigger the transition
      setTimeout(() => setIsVisible(true), 10); // small delay to allow transition
    } else {
      setIsVisible(false);
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [show]);

  if (!show && !isVisible) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center cursor-pointer transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleOverlayClick}
    >
      <div
        className={`bg-white rounded-lg shadow-lg w-[665px] cursor-default transition-transform duration-700 ease-in-out transform ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className=" hover:text-gray-700 absolute text-5xl -top-[0.8rem] -right-12 text-white"
        >
          <HiOutlineXMark />
        </button>
        {/* Render any content or form passed as children */}
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
