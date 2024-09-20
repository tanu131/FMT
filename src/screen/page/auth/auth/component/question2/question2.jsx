import React, { useEffect, useState } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import DefaultButton from "../../../../../component/defaultButton";
import { useSurveyContext } from "../../../../../../context/surveyContext";

const Question2 = ({ onNext }) => {
  const { selectedRate, setSelectedRate } = useSurveyContext();
  const Rate = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(selectedRate !== null); 
  }, [selectedRate]);

  const handleRateClick = (number) => {
    setSelectedRate(number);
  };

  const handleKeyDown = (event) => {
    const keyPressed = parseInt(event.key, 10);
    if (Rate.includes(keyPressed)) {
      setSelectedRate(keyPressed);
    }
    if (event.key === "Enter" && isValid) {
      onNext();
    }
  };

  useEffect(() => {
    const handleKeyDownWrapper = (event) => handleKeyDown(event);

    window.addEventListener("keydown", handleKeyDownWrapper);
    return () => {
      window.removeEventListener("keydown", handleKeyDownWrapper);
    };
  }, [isValid, onNext]);

  return (
    <div className="w-full h-screen flex justify-center items-center" onKeyDown={handleKeyDown} tabIndex="0">
      <div className="container mx-auto lg:px-8 flex justify-center items-center text-center relative">
        <div className="flex justify-start lg:justify-center items-center text-2xl absolute top-1 left-72">
          <p>2.</p>
          <IoIosArrowRoundForward />
        </div>
        <div className="flex flex-col gap-6 justify-start items-start">
          <h1 className="text-2xl lg:text-4xl text-left">
            How would you rate your overall health?
          </h1>
          <div>
            <div className="flex gap-2 lg:gap-3 flex-wrap justify lg:justify-evenly">
              {Rate.map((number) => (
                <button
                  key={number}
                  onClick={() => handleRateClick(number)}
                  className={`text-xs lg:text-xl font-semibold border outline-none border-indigo-800 py-1 px-2 lg:py-2 rounded-md lg:px-4 ${
                    selectedRate === number
                      ? "bg-indigo-800 text-white outline-none"
                      : "bg-purple-100"
                  }`}
                >
                  {number}
                </button>
              ))}
            </div>
            <div className="flex justify-between w-full text-xs lg:text-sm text-gray-500 mt-2">
              <span>Poor</span>
              <span>Some issues</span>
              <span>Great</span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <DefaultButton
              label="Ok ✓"
              onClick={isValid ? onNext : null}
              className="bg-indigo-800 text-sm lg:text-lg hover:bg-indigo-900 py-1 px-2 lg:px-4 lg:py-2 text-white rounded-md lg:rounded-lg"
              disabled={!isValid} 
            />
            <p className="text-sm lg:text-lg font-light">
              Press <span className="font-medium">Enter</span> ↵
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question2;
