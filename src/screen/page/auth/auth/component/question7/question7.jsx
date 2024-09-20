import React from "react";
import DefaultButton from "../../../../../component/defaultButton";
import LogoIcon from "../../../../../../assets/image/logo_purple.png";
import Logo from "../../../../../../assets/image/logo.png";

const Question7 = ({ onContinue }) => {
  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <div className="text-center flex flex-col gap-8">
        <div className="flex flex-col justify-center items-center">
          <img src={LogoIcon} alt="logo-icon" />
          <img src={Logo} alt="logo" />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl lg:text-4xl font-medium">
            Thank you for your time and honesty,
            <br /> we will find the best <span className="text-indigo-800">trails</span> for you
          </h1>
          <h3 className="text-base lg:text-lg font-light">
            If you're willing to help, we're just going to ask you a few
            questions.
            <br /> Please note that this survey is completely anonymous.
          </h3>
        </div>
        <div className="flex gap-2 justify-center items-center text-xs">
          <DefaultButton
            label="Go to Find My Trails"
            className="bg-indigo-800 text-sm lg:text-md text-white px-6 py-3 font-semibold rounded-lg"
            onClick={onContinue} 
            aria-label="Go to Find My Trails" 
          />
          <p className="text-sm lg:text-md font-light">
            Press <span className="font-medium">Enter</span> ↵
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question7;
