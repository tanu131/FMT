import React from "react";
import DefaultButton from "../../../../../../../component/defaultButton";
import { FaHandHoldingMedical, FaAmbulance } from "react-icons/fa";
import { PiClockCountdownFill } from "react-icons/pi";
import { useLocation } from "react-router-dom";
import { VscCircleFilled } from "react-icons/vsc";

const Content = () => {
  const location = useLocation();
  const { trial } = location.state || {};

  if (!trial) {
    return <p>No trial data available.</p>;
  }

  const {
    title,
    description,
    drugName,
    timeInTrial,
    hospitalVisits,
    inclusion = [],
    exclusion = [],
  } = trial;

  return (
    <div className="flex flex-col gap-4 text-start p-4">
      <div className="flex p-2 justify-between items-center bg-gray-100">
        <h4 className="font-bold">Study Overview</h4>
        <DefaultButton
          label="Refer Me"
          className="px-4 py-2 rounded-md sticky top-0 text-white bg-blue"
        />
      </div>

      <div className="p-2 overflow-scroll">
        <div className="w-full h-screen">
          <div className="mt-4 flex flex-col justify-center items-start">
            <div className="flex flex-col gap-1">
              <h4 className="font-medium text-lg text-black">Official Title</h4>
              <p className="font-normal text-gray-700">{title}</p>
            </div>
            <div className="flex flex-col gap-1 mt-4">
              <h4 className="font-medium text-lg text-black">
                Treatment/Procedure Details:
              </h4>
              <p className="font-normal text-gray-700">{description}</p>
            </div>
            <div className="flex flex-col gap-1 mt-4">
              <h4 className="font-medium text-lg text-black">
                Therapy/Area
              </h4>
              <p className="font-normal text-gray-700">{threapy}</p>
            </div>

            <ul className="flex flex-col gap-2 my-4">
              <li className="flex gap-2 items-start text-md text-gray-900">
                <PiClockCountdownFill className="mt-1 text-black" />
                <span className="flex flex-col">
                  <strong className="font-semibold text-black">
                    Total Time in Trials:
                  </strong>
                  <span className="text-gray-700">{timeInTrial}</span>
                </span>
              </li>
              <li className="flex gap-2 items-start text-md text-gray-900">
                <FaAmbulance className="text-black mt-1" />
                <span className="flex flex-col">
                  <strong className="font-semibold text-black">
                    Number of Visits to Hospitals:
                  </strong>
                  <span className="text-gray-700">{hospitalVisits}</span>
                </span>
              </li>
              <li className="flex gap-2 items-start text-md text-gray-900">
                <FaHandHoldingMedical className="mt-1 text-black" />
                <span className="flex flex-col">
                  <strong className="font-semibold text-black">
                    Intervention/Treatment Name:
                  </strong>
                  <span className="text-gray-700 flex">
                    <span className="text-black flex justify-center items-center mr-1 font-semibold">
                      <VscCircleFilled /> Drug:
                    </span>
                    {drugName}
                  </span>
                </span>
              </li>
            </ul>
          </div>
          <div className="border w-auto p-2 ">
            <h4 className="font-medium text-lg text-black">Inclusion</h4>

            <ul className="list-disc mx-10 ">
              {inclusion.map((item, index) => (
                <li key={index} className="p-2 font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border w-auto p-2 mt-4">
            <h4 className="font-medium text-lg text-black">Exclusion</h4>

            <ul className="list-disc mx-10 ">
              {exclusion.map((item, index) => (
                <li key={index} className="p-2 font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <div className="rounded-md flex flex-col p-2 bg-gray-100">
              <span className="font-semibold text-black">
                Contacts and Locations
              </span>
              <span className="font-normal">
                For general information about clinical research, read Learn
                About criteria. Some examples of these criteria are a person’s
                general health condition or prior treatments.
              </span>
            </div>

            <div className="rounded-md flex flex-col p-2 bg-gray-100">
              <span className="font-semibold text-black">
                Participation Criteria
              </span>
              <span className="font-normal">
                Researchers look for people who fit a certain description,
                called eligibility criteria. Some examples of these criteria are
                a person’s general health condition or prior treatments.
                <br />
                For general information about clinical research, read Learn
                About Studies.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
