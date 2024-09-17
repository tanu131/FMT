import React, { useEffect } from "react";
import DefaultButton from "../../../../../component/defaultButton";
import LogoIcon from "../../../../../../assets/image/logo_purple.png";
import Logo from "../../../../../../assets/image/logo.png";

const Question0 = ({ handleButtonClick }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        if (typeof handleButtonClick === 'function') {
          handleButtonClick();
        } else {
          console.error("handleButtonClick is not a function");
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleButtonClick]);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center p-4">
      <div className="text-center flex flex-col gap-6">
        <div className="flex flex-col justify-center items-center gap-2">
          <img src={LogoIcon} alt="logo-icon" />
          <img src={Logo} alt="logo" />
        </div>
        <div className="flex flex-col gap-4 px-4 lg:mt-20">
          <h1 className="text-2xl md:text-4xl font-medium leading-tight">
            We're trying to get a clearer picture of the
            <br /> health of our citizens
          </h1>
          <h3 className="text-base md:text-lg font-light">
            If you're willing to help, we're just going to ask you a few
            questions.
            <br /> Please note that this survey is completely anonymous.
          </h3>
        </div>
        <div className="flex gap-4 justify-center items-center px-4">
          <DefaultButton
            label="Okay, I'm ready"
            onClick={handleButtonClick}
            className="bg-indigo-800 text-sm lg:text-md text-white px-6 py-2 font-semibold rounded-lg"
          />
          <p className="text-sm lg:text-md font-light">
            Press <span className="font-medium">Enter</span> ↵
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question0;
