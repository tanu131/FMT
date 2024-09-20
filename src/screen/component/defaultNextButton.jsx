import React from "react";

const DefaultNextButton = ({
  label,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-indigo-800 text-sm lg:text-lg hover:bg-indigo-900 py-1 px-2 lg:px-4 lg:py-2 text-white rounded-md lg:rounded-lg
     ${className}`}
    >
      {label}
    </button>
  );
};

export default DefaultNextButton;
