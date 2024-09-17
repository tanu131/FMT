import React, { useEffect } from 'react';
import { TbCornerDownLeft } from "react-icons/tb";
import { IoIosArrowRoundForward } from "react-icons/io";
import DefaultButton from "../../../../../component/defaultButton";
import { useSurveyContext } from "../../../../../../context/surveyContext";

const Question4 = ({ onNext }) => {
  const { selectedValue, setSelectedValue } = useSurveyContext();

  const handleOptionChange = (value) => {
    console.log("Option Changed:", value); // Debugging
    setSelectedValue(value);
  };

  const handleNextClick = () => {
    console.log("Next Clicked - Selected Value:", selectedValue); // Debugging
    onNext(); // Proceed to the next step without validation
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleNextClick();
      }

      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        const options = document.querySelectorAll('input[name="option"]');
        const currentIndex = Array.from(options).indexOf(document.activeElement);
        const nextIndex = (currentIndex + (event.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length;
        options[nextIndex].focus();
      }

      const keyToValueMap = {
        'Y': 'Yes',
        'N': 'No'
      };

      const value = keyToValueMap[event.key.toUpperCase()];
      if (value) {
        event.preventDefault();
        console.log("Key Pressed - Value:", value); // Debugging
        handleOptionChange(value);
        document.querySelector(`input[value="${value}"]`).focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedValue]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="container mx-auto lg:px-8 flex justify-center items-center text-center relative">
        <div className="flex justify-start lg:justify-center items-center text-2xl absolute top-1 left-44">
          <p>4.</p>
          <p><IoIosArrowRoundForward /></p>
        </div>
        <div className="flex flex-col gap-6 justify-start items-start">
          <h1 className="text-2xl lg:text-4xl text-left">
            Have you faced any mental health challenges recently?
          </h1>
          <div className="flex flex-col gap-4 lg:gap-6">
            <label
              className={`flex items-center gap-2 border w-56 border-indigo-800 font-semibold text-xs lg:text-lg p-1 lg:p-2 rounded-md cursor-pointer transition-colors ${
                selectedValue === "Yes" ? "bg-indigo-800 text-white" : "bg-purple-100"
              }`}
              htmlFor="yesOption"
            >
              <input
                type="radio"
                name="option"
                value="Yes"
                checked={selectedValue === "Yes"}
                onChange={() => handleOptionChange("Yes")}
                className="hidden"
                tabIndex={0}
              />
              <span
                className={`w-6 h-6 border border-gray-500 rounded-md flex items-center justify-center text-xs lg:text-sm ${
                  selectedValue === "Yes" ? "bg-indigo-800 text-white" : "bg-purple-100"
                }`}
              >
                Y
              </span>
              <span>Yes</span>
            </label>
            <label
              className={`flex items-center gap-2 border border-indigo-800 font-semibold text-xs lg:text-lg p-1 lg:p-2 rounded-md cursor-pointer transition-colors ${
                selectedValue === "No" ? "bg-indigo-800 text-white" : "bg-purple-100"
              }`}
              htmlFor="noOption"
            >
              <input
                type="radio"
                name="option"
                value="No"
                checked={selectedValue === "No"}
                onChange={() => handleOptionChange("No")}
                className="hidden"
                tabIndex={0}
              />
              <span
                className={`w-6 h-6 border border-gray-500 rounded-md flex items-center justify-center text-xs lg:text-sm ${
                  selectedValue === "No" ? "bg-indigo-800 text-white" : "bg-purple-100"
                }`}
              >
                N
              </span>
              <span>No</span>
            </label>
          </div>
          <div className="flex justify-center items-center gap-2">
            <DefaultButton
              label="Ok ✓"
              onClick={handleNextClick}
              className="bg-indigo-800 text-sm lg:text-lg hover:bg-indigo-900 py-1 px-2 lg:px-4 lg:py-2 text-white rounded-md lg:rounded-lg"
            />
            <p className="text-sm lg:text-lg font-light flex justify-center items-center gap-1">
              Press <span className="font-medium">Enter</span> <TbCornerDownLeft/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question4;
