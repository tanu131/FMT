import React, { createContext, useState, useContext } from 'react';

const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
  const [date, setDate] = useState('');
  const [selectedRate, setSelectedRate] = useState({});
  const [checkedConditions, setCheckedConditions] = useState({});
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <SurveyContext.Provider
      value={{
        date,
        setDate,
        selectedRate,
        setSelectedRate,
        checkedConditions,
        setCheckedConditions,
        selectedValue,
        setSelectedValue,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
};

export const useSurveyContext = () => useContext(SurveyContext);
