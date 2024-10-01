import React from "react";
import { FaAmbulance, FaHandHoldingMedical } from "react-icons/fa";
import { PiClockCountdownFill } from "react-icons/pi";
import DefaultButton from "../../../../../../../component/defaultButton";

const ResultCard = ({
  trialId,
  title,
  drugName,
  timeInTrial,
  hospitalVisits,
  description,
  onMoreInfoClick,
}) => {
  return (
    <div className="border border-black rounded-lg p-6 shadow-md mb-6 flex flex-col justify-center items-start bg-light-color">
      <h3 className="text-base font-bold text-black">
        Trial ID: <span className="font-semibold text-gray-900">#{trialId}</span>
      </h3>
      <p className="mt-4 font-bold text-lg text-start text-indigo-900">{title}</p>
      <div className="w-full">
        <div className="mt-4 flex flex-col justify-center items-start">
          <h4 className="font-bold text-black">Treatment/Procedure Details:</h4>
          <p className="text-md text-start text-black my-2">{description}</p>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center text-md text-gray-900">
              <FaHandHoldingMedical className="mr-2 text-black" />
              <strong className="font-bold text-black">Drug/Treatment Name:</strong>
              <span className="ml-1 font-semibold">{drugName}</span>
            </li>
          </ul>
          <div className="flex justify-between items-end w-full">
            <ul>
              <li className="flex items-center text-md py-2 text-gray-900">
                <PiClockCountdownFill className="mr-2 text-black" />
                <strong className="font-bold text-black">Total Time in Trials:</strong>
                <span className="ml-1">{timeInTrial}</span>
              </li>
              <li className="flex items-center text-md text-gray-900">
                <FaAmbulance className="mr-2 text-black" />
                <strong className="font-bold text-black">Number of visits to Hospitals:</strong>
                <span className="ml-1">{hospitalVisits}</span>
              </li>
            </ul>
            <DefaultButton
              label="More Information"
              className="bg-blue text-white px-4 py-2 w-44 font-semibold rounded-md"
              onClick={() => onMoreInfoClick(trialId)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
