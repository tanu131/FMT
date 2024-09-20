import React, { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TbCornerDownLeft } from "react-icons/tb";
import DefaultButton from "../../../../../component/defaultButton";
import { useSurveyContext } from "../../../../../../context/surveyContext";

const Question5 = ({ onNext }) => {
  const { checkedConditions, setCheckedConditions } = useSurveyContext();
  const [isValid, setIsValid] = useState(false);

  const conditions = [
    { label: "Anxiety" },
    { label: "Depression" },
    { label: "Sleep Problems" },
    { label: "Stress" },
    { label: "Burnout" },
    { label: "Other" },
  ];

  useEffect(() => {
    // Check if at least one condition is checked
    setIsValid(Object.values(checkedConditions).some(Boolean));
  }, [checkedConditions]);

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckedConditions((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  const handleNextClick = () => {
    if (isValid) {
      console.log("Next Clicked - Checked Conditions:", checkedConditions);
      onNext();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter" && isValid) {
        event.preventDefault();
        handleNextClick();
      }
      
      const key = event.key.toUpperCase();
      const index = key.charCodeAt(0) - 65; 
      
      if (index >= 0 && index < conditions.length) {
        const conditionId = `condition-${conditions[index].label}`;
        const checkbox = document.getElementById(conditionId);
        if (checkbox) {
          event.preventDefault();
          checkbox.click();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isValid]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="container mx-auto lg:px-8 flex justify-start lg:justify-center items-center text-center">
        <div className="flex justify-start lg:justify-center items-center text-2xl lg:text-4xl relative -top-96 lg:-top-56">
          <p>5.</p>
          <p>
            <IoIosArrowRoundForward />
          </p>
        </div>
        <div className="flex flex-col gap-2 lg:gap-6 justify-start items-start">
          <h1 className="text-2xl lg:text-4xl text-justify">
            What are you struggling with?
          </h1>
          <div className="grid grid-cols-1 w-full lg:grid-cols-3 gap-2 lg:gap-4">
            {conditions.map((item, index) => {
              const letter = String.fromCharCode(65 + index);
              const conditionId = `condition-${item.label}`;

              return (
                <label
                  key={conditionId}
                  className={`flex items-center gap-2 border border-indigo-800 font-semibold text-xs lg:text-lg p-1 lg:p-2 rounded-md cursor-pointer transition-colors ${
                    checkedConditions[conditionId] ? "bg-indigo-800 text-white" : "bg-purple-100"
                  }`}
                  htmlFor={conditionId}
                >
                  <input
                    type="checkbox"
                    id={conditionId}
                    checked={checkedConditions[conditionId] || false}
                    onChange={handleCheckboxChange}
                    className="hidden"
                  />
                  <span
                    className={`w-6 h-6 border border-gray-500 rounded-md flex items-center justify-center text-xs lg:text-sm ${
                      checkedConditions[conditionId] ? "bg-indigo-800 text-white" : "bg-purple-100"
                    }`}
                  >
                    {letter}
                  </span>
                  <span>{item.label}</span>
                </label>
              );
            })}
          </div>
          <div className="flex justify-center items-center gap-2">
            <DefaultButton
              label="Ok ✓"
              onClick={handleNextClick}
              className="bg-indigo-800 text-sm lg:text-lg hover:bg-indigo-900 py-1 px-2 lg:px-4 lg:py-2 text-white rounded-md lg:rounded-lg"
              disabled={!isValid} 
            />
            <p className="text-sm lg:text-lg font-light flex justify-center items-center gap-1">
              Press <span className="font-medium">Enter</span> <TbCornerDownLeft />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question5;
