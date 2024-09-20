import React, { useEffect, useCallback } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TbCornerDownLeft } from "react-icons/tb";
import DefaultButton from "../../../../../component/defaultButton";
import { useSurveyContext } from "../../../../../../context/surveyContext";

const Question6 = ({ onNext }) => {
  const { selectedRate, setSelectedRate } = useSurveyContext();
  const Rate = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleRateClick = (number) => {
    setSelectedRate(number);
  };

  const handleKeyPress = useCallback((event) => {
    const keyPressed = parseInt(event.key, 10);
    if (Rate.includes(keyPressed)) {
      setSelectedRate(keyPressed);
    }
    if (event.key === "Enter" && selectedRate) {
      onNext();
    }
  }, [Rate, setSelectedRate, onNext, selectedRate]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="container mx-auto lg:px-8 flex justify-center items-center text-center relative">
        <div className="flex justify-start lg:justify-center items-center text-2xl absolute left-32 top-1">
          <p>6.</p>
          <IoIosArrowRoundForward />
        </div>
        <div className="flex flex-col gap-6 justify-start items-start">
          <h1 className="text-2xl lg:text-4xl text-left">
            How much would you agree with this statement: "I have the
            <br /> resources and support I need to look after my health."
          </h1>
          <div>
            <div className="flex gap-2 lg:gap-3 flex-wrap justify lg:justify-evenly">
              {Rate.map((number) => (
                <button
                  key={number}
                  onClick={() => handleRateClick(number)}
                  className={`text-xs lg:text-xl font-semibold border border-indigo-800 py-1 px-2 lg:py-2 rounded-md lg:px-4 outline-none ${
                    selectedRate === number
                      ? "bg-indigo-800 text-white"
                      : "bg-purple-100"
                  }`}
                >
                  {number}
                </button>
              ))}
            </div>
            <div className="flex justify-between w-full text-xs lg:text-sm text-gray-500 mt-1">
              <span>Completely disagree</span>
              <span>Completely agree</span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <DefaultButton
              label="Ok ✓"
              onClick={() => {
                if (selectedRate) {
                  onNext();
                }
              }}
              className={`bg-indigo-800 text-sm lg:text-lg hover:bg-indigo-900 py-1 px-2 lg:px-4 lg:py-2 text-white rounded-md lg:rounded-lg ${
                !selectedRate ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!selectedRate} 
            />
            <p className="text-sm lg:text-lg font-light flex justify-center items-center gap-1">
              Press <span className="font-medium">Enter</span><TbCornerDownLeft/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question6;
