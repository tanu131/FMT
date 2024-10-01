import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiChevronDoubleLeft } from "react-icons/hi";
import DefaultButton from "../../../../../../../component/defaultButton";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Sidebar = ({
  conditions,
  otherTerms,
  intervention,
  studyStatus,
  diseaseOptions = [],
  onInputChange,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleDiseaseClick = (disease) => {
    onInputChange({ target: { name: "conditions", value: disease } });
    setIsDropdownOpen(false);
  };

  const toggleSidebarVisibility = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  return (
    <div className={`sticky top-2 ${isSidebarVisible ? "border border-black" : ""}`}>
      {isSidebarVisible ? (
        <div className="w-96">
          <div className="border-b border-black p-4 relative">
            <h2 className="text-lg font-semibold h-12 flex items-center">
              Focus Your Search
              <span className="text-sm">(all filters optional)</span>
            </h2>
            <button 
              className="w-12 h-20 flex font-bold flex-col gap-2 bg-blue text-white justify-center items-center cursor-pointer absolute top-0 right-0" 
              onClick={toggleSidebarVisibility}
            >
              <p className="-rotate-90">Hide</p>
              <HiChevronDoubleLeft />
            </button>
          </div>
          <div className="border-b p-4 text-start border-black">
            <div className="mb-4 font-bold">
              <label className="block text-black">Conditions/Disease</label>
              <button
                className="w-full px-2 py-3 border border-black mt-1 text-gray-400 rounded flex justify-between items-start"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
              >
                {conditions || "disease..."} <IoMdArrowDropdown />
              </button>
              {isDropdownOpen && (
                <ul className="w-full mt-1 border border-black rounded p-2 max-h-40 overflow-auto bg-white">
                  {diseaseOptions.length > 0 ? (
                    diseaseOptions.map((disease, index) => (
                      <li
                        key={index}
                        className={`p-2 cursor-pointer hover:bg-gray-200 rounded ${
                          conditions === disease ? "bg-gray-300 font-semibold" : ""
                        }`}
                        onClick={() => handleDiseaseClick(disease)}
                      >
                        {disease}
                      </li>
                    ))
                  ) : (
                    <li className="p-2">No disease options available</li>
                  )}
                </ul>
              )}
            </div>

            <div className="mb-4 font-bold">
              <label className="block text-black">Other terms</label>
              <input
                type="text"
                name="otherTerms"
                value={otherTerms}
                onChange={onInputChange}
                placeholder="Other terms"
                className="w-full p-2 mt-1 border  border-black rounded outline-none focus:ring-0"
              />
            </div>

            <div className="mb-4 font-bold">
              <label className="block text-black">Intervention/Treatment</label>
              <input
                type="text"
                name="intervention"
                value={intervention}
                onChange={onInputChange}
                placeholder="Intervention/Treatment"
                className="w-full p-2 mt-1 border border-black rounded outline-none focus:ring-0"
              />
            </div>
          </div>
          <div className="border-b border-black text-start p-4 flex flex-col gap-2">
            <h2 className="font-bold text-md">Study Status</h2>
            <div className="flex flex-col">
              <h3 className="text-md font-semibold mb-2">Looking for participants</h3>
              <div className="mb-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="notRecruiting"
                    checked={studyStatus.notRecruiting}
                    onChange={onInputChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2 font-semibold">Not yet recruiting (0)</span>
                </label>
              </div>

              <div className="mb-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="recruiting"
                    checked={studyStatus.recruiting}
                    onChange={onInputChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2 font-bold">Recruiting (0)</span>
                </label>
              </div>
              <h3 className="text-md font-semibold mb-2">No longer looking for participants</h3>
              <div className="mb-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="activeNotRecruiting"
                    checked={studyStatus.activeNotRecruiting}
                    onChange={onInputChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2 font-semibold">Active, not recruiting (0)</span>
                </label>
              </div>

              <div className="mb-2 font-semibold">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="completed"
                    checked={studyStatus.completed}
                    onChange={onInputChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">Completed (0)</span>
                </label>
              </div>

              <div className="mb-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="terminated"
                    checked={studyStatus.terminated}
                    onChange={onInputChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2 font-semibold">Terminated (0)</span>
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 py-2"> 
            <DefaultButton label="Clear filters" className="border border-black px-4 rounded-md py-2"/>
            <DefaultButton label="Apply filters" className="border bg-black text-white border-black px-4 rounded-md py-2"/>
          </div>
        </div>
      ) : (
        <div className="sticky top-2">
          <button
            className="w-12 h-20 bg-blue text-white py-1 flex flex-col gap-2 items-center justify-center font-bold"
            onClick={toggleSidebarVisibility}
          >
           <p className="-rotate-90 w-auto">Show</p> 
            <MdKeyboardDoubleArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
