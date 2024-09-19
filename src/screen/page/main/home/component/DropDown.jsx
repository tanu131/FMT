import React from "react";
import SearchForm from "./SearchForm";

const Dropdown = () => {
  const handleSearch = (searchParams) => {
    console.log("Search parameters:", searchParams);
  };

  return (
    <div>
      <SearchForm
        genderOptions={["Male", "Female", "Other"]}
        ageOptions={["1-5", "5-10", "10-15", "15-20", "20-25", "25-30", "30-35", "35-40", "40-45", "45-50", "50-55", "55-60", "60-65", "65-70", "70-75", "75-80", "80-85", "85-90", "90-95", "95-100"]}
        diseaseOptions={["Asthma", "Cystic Fibrosis","Fragile","Rett Syndrome","Colon Cancer","Lung Cancer","Breast Cancer","Chronic Obstructive Rulmonary Disease (COPD)","Prostate Cancer","Rheumatoid Arthritis"]}
        locationOptions={["New York", "Los Angeles", "Chicago","Houston","Phoenix"]}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default Dropdown;
