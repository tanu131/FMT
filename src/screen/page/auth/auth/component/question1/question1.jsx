import React from 'react';
import { TbCornerDownLeft } from "react-icons/tb";
import { IoIosArrowRoundForward } from 'react-icons/io';
import DefaultButton from "../../../../../component/defaultButton";
import { useSurveyContext } from "../../../../../../context/surveyContext";

const Question1 = ({ onNext }) => {
  const { date, setDate } = useSurveyContext();

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setDate(newDate);
  };

  const handleNextClick = () => {
    if (date) {
      onNext();
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="container mx-auto lg:px-8 flex justify-center items-center text-center relative">
        <div className="flex justify-start lg:justify-center items-center text-2xl absolute top-1 left-80">
          <p>1.</p>
          <p>
            <IoIosArrowRoundForward />
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:gap-6 justify-start items-start">
          <h1 className="text-2xl lg:text-4xl">
            Let's start with your date of birth.
          </h1>
          <div className="text-xl lg:text-3xl text-gray-500">
            <input
              type="date"
              className="outline-none"
              value={date}
              onChange={handleDateChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleNextClick();
                }
              }}
            />
          </div>
          <div className="flex justify-center items-center gap-2">
            <DefaultButton
              label="Ok ✓"
              onClick={handleNextClick}
              disabled={!date}
              className="bg-indigo-800 text-sm lg:text-lg hover:bg-indigo-900 py-1 px-2 lg:px-4 lg:py-2 text-white rounded-md lg:rounded-lg"
            />
            <p className="text-sm lg:text-lg font-light flex justify-center items-center gap-1">
              Press <span className="font-medium">Enter</span><TbCornerDownLeft />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question1;
