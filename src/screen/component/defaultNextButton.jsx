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
      className={`${className}`}
    >
      {label}
    </button>
  );
};

export default DefaultNextButton;
