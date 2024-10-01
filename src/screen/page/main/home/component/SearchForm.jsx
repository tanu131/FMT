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
  const [errorMessage, setErrorMessage] = useState("");

  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [isAgeOpen, setIsAgeOpen] = useState(false);
  const [isDiseaseOpen, setIsDiseaseOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  const closeAllDropdowns = () => {
    setIsGenderOpen(false);
    setIsAgeOpen(false);
    setIsDiseaseOpen(false);
    setIsLocationOpen(false);
  };

  const toggleGenderDropdown = () => {
    closeAllDropdowns();
    setIsGenderOpen(!isGenderOpen);
  };

  const toggleAgeDropdown = () => {
    closeAllDropdowns();
    setIsAgeOpen(!isAgeOpen);
  };

  const toggleDiseaseDropdown = () => {
    closeAllDropdowns();
    setIsDiseaseOpen(!isDiseaseOpen);
  };

  const toggleLocationDropdown = () => {
    closeAllDropdowns();
    setIsLocationOpen(!isLocationOpen);
  };

  const handleGenderSelect = (option) => {
    setGender(option);
    setIsGenderOpen(false);
    setIsAgeOpen(true);
  };

  const handleAgeSelect = (option) => {
    setAge(option);
    setIsAgeOpen(false);
    setIsDiseaseOpen(true);
  };

  const handleDiseaseSelect = (option) => {
    setDisease(option);
    setIsDiseaseOpen(false);
    setIsLocationOpen(true);
  };

  const handleSearch = () => {
    const filters = { gender, age, disease, location };
    const missingFields = [];

    if (!age) missingFields.push("age");
    if (!disease) missingFields.push("disease");
    if (!location) missingFields.push("location");

    if (missingFields.length > 0) {
      setErrorMessage(`Please select the ${missingFields.join(", ")} fields!`);
    } else {
      setErrorMessage("");
      onSearch(filters);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-2 px-2 flex-wrap bg-white lg:rounded-full shadow-md justify-between lg:items-center relative">
      <div className="flex-grow border-r hover:bg-gray-50 rounded-full p-2">
        <label className="text-gray-700 text-sm font-medium">Gender</label>
        <div className="bg-transparent text-gray-400 text-sm w-32 cursor-pointer" onClick={toggleGenderDropdown}>
          {gender || "Select Gender"}
        </div>
        {isGenderOpen && (
           <ul className="absolute mt-5 w-32 bg-white shadow-lg rounded-lg z-10 max-h-40 overflow-y-scroll">
            {genderOptions.map((option, index) => (
              <li key={index} onClick={() => handleGenderSelect(option)} className="py-2 px-4 cursor-pointer text-black hover:bg-gray-200">
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="relative flex-grow border-r hover:bg-gray-50 rounded-full p-2">
        <label className="text-gray-700 text-sm font-medium">Age</label>
        <div className="bg-transparent text-sm text-gray-400 w-32 cursor-pointer" onClick={toggleAgeDropdown}>
          {age || "Select Age"}
        </div>
        {isAgeOpen && (
          <ul className="absolute mt-5 w-32 bg-white shadow-lg rounded-lg z-10 max-h-40 overflow-y-scroll">
            {ageOptions.map((option, index) => (
              <li key={index} onClick={() => handleAgeSelect(option)} className="py-2 px-4 cursor-pointer text-black hover:bg-gray-200">
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="relative flex-grow border-r hover:bg-gray-50 rounded-full p-2">
        <label className="text-gray-700 text-sm font-medium">Disease</label>
        <div className="bg-transparent text-sm text-gray-400 w-32 cursor-pointer" onClick={toggleDiseaseDropdown}>
          {disease || "Select Disease"}
        </div>
        {isDiseaseOpen && (
          <ul className="absolute mt-5 w-72 bg-white shadow-lg rounded-lg z-10 max-h-40 overflow-y-scroll">
            {diseaseOptions.map((option, index) => (
              <li key={index} onClick={() => handleDiseaseSelect(option)} className="py-2 px-4 cursor-pointer text-black hover:bg-gray-200">
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="relative flex-grow border-r hover:bg-gray-50 rounded-full p-2">
        <label className="text-gray-700 text-sm font-medium">Location</label>
        <div className="bg-transparent text-sm text-gray-400 w-32 cursor-pointer" onClick={toggleLocationDropdown}>
          {location || "Select Location"}
        </div>
        {isLocationOpen && (
          <ul className="absolute mt-5 w-f40 bg-white shadow-lg rounded-lg z-10 max-h-40 overflow-y-scroll">
            {locationOptions.map((option, index) => (
              <li key={index} onClick={() => { setLocation(option); setIsLocationOpen(false); }} className="py-2 px-4 cursor-pointer text-black hover:bg-gray-200">
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button onClick={handleSearch} className="bg-blue text-white lg:rounded-full h-12 lg:w-12 w-full flex gap-1 justify-center items-center hover:bg-blue-600">
        <FiSearch /> <p className="lg:hidden">Find Trials</p>
      </button>

      {errorMessage && (
        <p className="bg-white text-black absolute right-2 top-16 p-2 rounded-md shadow-md">{errorMessage}</p>
      )}
    </div>
  );
};

export default SearchForm;
