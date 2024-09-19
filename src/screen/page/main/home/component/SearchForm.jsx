import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchForm = ({
  genderOptions,
  ageOptions,
  diseaseOptions,
  locationOptions,
  onSearch,
}) => {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [disease, setDisease] = useState("");
  const [location, setLocation] = useState("");

  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [isAgeOpen, setIsAgeOpen] = useState(false);
  const [isDiseaseOpen, setIsDiseaseOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  const handleSearch = () => {
    onSearch({ gender, age, disease, location });
  };
  return (
    <div className="flex gap bg-white rounded-full shadow-md justify-between items-center px-2">
    
        <div className="relative border-r hover:bg-gray-50 rounded-full p-2">
          <label className="text-gray-700 text-sm font-medium">Gender</label>
          <div
            className="bg-transparent text-gray-400 text-sm w-32 cursor-pointer"
            onClick={() => setIsGenderOpen(!isGenderOpen)}
          >
            {gender || "Select Gender"}
          </div>
          {isGenderOpen && (
            <ul className="absolute mt-5 w-40 bg-white shadow-lg rounded-lg z-10 max-h-40 overflow-y-scroll">
              {genderOptions.map((option, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setGender(option);
                    setIsGenderOpen(false);
                  }}
                  className="py-2 px-4 cursor-pointer text-black hover:bg-gray-200"
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="relative border-r hover:bg-gray-50 rounded-full p-2">
          <label className="text-gray-700 text-sm font-medium">Age</label>
          <div
            className="bg-transparent text-sm text-gray-400 w-32 cursor-pointer"
            onClick={() => setIsAgeOpen(!isAgeOpen)}
          >
            {age || "Select Age"}
          </div>
          {isAgeOpen && (
            <ul className="absolute mt-5 w-40 bg-white shadow-lg rounded-lg z-10 max-h-40 overflow-y-scroll">
              {ageOptions.map((option, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setAge(option);
                    setIsAgeOpen(false);
                  }}
                  className="py-2 px-4 cursor-pointer text-black hover:bg-gray-200"
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="relative border-r hover:bg-gray-50  rounded-full p-2">
          <label className="text-gray-700 text-sm font-medium">Disease</label>
          <div
            className="bg-transparent text-sm text-gray-400 w-32 cursor-pointer"
            onClick={() => setIsDiseaseOpen(!isDiseaseOpen)}
          >
            {disease || "Select Disease"}
          </div>
          {isDiseaseOpen && (
            <ul className="absolute mt-5 w-96 bg-white shadow-lg rounded-lg z-10 max-h-40 overflow-y-scroll">
              {diseaseOptions.map((option, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setDisease(option);
                    setIsDiseaseOpen(false);
                  }}
                  className="py-2 px-4 cursor-pointer text-black hover:bg-gray-200"
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="relative border-r hover:bg-gray-50 rounded-full p-2">
          <label className="text-gray-700 text-sm font-medium">Location</label>
          <div
            className="bg-transparent text-sm text-gray-400 w-32 cursor-pointer"
            onClick={() => setIsLocationOpen(!isLocationOpen)}
          >
            {location || "Select Location"}
          </div>
          {isLocationOpen && (
            <ul className="absolute mt-5 w-40  bg-white shadow-lg rounded-lg z-10 max-h-40 overflow-y-scroll">
              {locationOptions.map((option, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setLocation(option);
                    setIsLocationOpen(false);
                  }}
                  className="py-2 px-4 cursor-pointer text-black hover:bg-gray-200"
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      
      
        <button
          onClick={handleSearch}
          className="bg-blue text-white rounded-full h-12 w-12 flex justify-center items-center"
        >
          <FiSearch />
        </button>
    
    </div>
  );
};

export default SearchForm;
