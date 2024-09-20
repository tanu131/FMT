import React from "react";
import { RxCross2 } from "react-icons/rx";
import { RiCheckDoubleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const SubmittedForm = ({ onClose }) => {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate("/auth");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative p-6 rounded-lg shadow-lg w-auto bg-purple-50">
        <button
          className="absolute top-2 right-2 text-white bg-blue rounded-full p-1 text-2xl"
          onClick={onClose}
        >
          <RxCross2 />
        </button>
        <div className="flex flex-col justify-center items-center gap-4 m-10">
          <RiCheckDoubleLine className="text-white bg-blue rounded-full p-3 h-14 w-14" />
          <h3 className="text-lg text-stone-600 font-bold">Great!</h3>
          <h4 className="text-center text-base text-stone-500">
            Your account has been successfully created.
            <br />
            Back to
            <button
              onClick={handleBackToLogin}
              className="text-blue underline bg-transparent border-none cursor-pointer"
            >
              Login
            </button>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SubmittedForm;