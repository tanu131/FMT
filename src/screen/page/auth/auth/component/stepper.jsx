import React, { useState, useEffect } from "react";
import Question0 from "./question0/question0";
import Question1 from "./question1/question1";
import Question2 from "./question2/question2";
import Question3 from "./question3/question3";
import Question4 from "./question4/question4";
import Question5 from "./question5/question5";
import Question6 from "./question6/question6";
import Question7 from "./question7/question7";
import DefaultNextButton from "../../../../component/defaultNextButton";
import DefaultBackButton from "../../../../component/defaultBackButton";

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentStep]);

  const steps = [
    { component: <Question0 handleButtonClick={handleNext} /> },
    { component: <Question1 onNext={handleNext} /> },
    { component: <Question2 onNext={handleNext} /> },
    { component: <Question3 onNext={handleNext} /> },
    { component: <Question4 onNext={handleNext} /> },
    { component: <Question5 onNext={handleNext} /> },
    { component: <Question6 onNext={handleNext} /> },
    { component: <Question7 /> },
  ];

  return (
    <div className="imageBg object-cover">
      {steps[currentStep].component}
      <div className="flex justify-evenly p-4">
        <DefaultBackButton
          label={"Back"}
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="bg-indigo-800 text-sm lg:text-lg hover:bg-indigo-900 py-1 px-2 lg:px-4 lg:py-2 text-white rounded-md lg:rounded-lg"
        />
        {currentStep < steps.length - 1 && (
          <DefaultNextButton
            label={"Next"}
            onClick={handleNext}
            className="bg-indigo-800 text-sm lg:text-lg hover:bg-indigo-900 py-1 px-2 lg:px-4 lg:py-2 text-white rounded-md lg:rounded-lg"
          />
        )}
      </div>
    </div>
  );
};

export default Stepper;
