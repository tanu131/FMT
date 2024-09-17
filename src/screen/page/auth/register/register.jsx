import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import Deal from '../../../../assets/image/deal.png';
import Doctor from '../../../../assets/image/doctor.png';
import Patient from '../../../../assets/image/patient.png';
import RegisterForm from './registerFrom';
import DefaultNextButton from '../../../component/defaultNextButton';

const Register = ({ onClose }) => {
  const [step, setStep] = useState('selection');
  const [selectedUserType, setSelectedUserType] = useState(null);

  const handleUserTypeClick = (userType) => {
    setSelectedUserType(userType);
  };

  const handleNextClick = () => {
    if (selectedUserType) {
      setStep('form');
    }
  };

  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', selectedUserType, formData);
    setStep('selection'); 
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative p-6 rounded-lg shadow-lg w-auto bg-purple-50">
        <button
          className="absolute top-2 right-2 text-white rounded-full bg-blue p-1 text-2xl"
          onClick={onClose}
        >
          <RxCross2 />
        </button>
        {step === 'selection' && (
          <div className="flex flex-col justify-center">
            <div className="text-justify">
              <h2 className="text-xl font-semibold">Select User Type</h2>
              <p className="text-sm">
                Please select the type of user you want to continue for creating your account.
              </p>
            </div>
            <div className="flex justify-evenly gap-4 my-8">
              <div
                className={`lg:h-48 h-36 flex flex-col items-center justify-center border-8 gap-2 ${selectedUserType === 'Sponsor' ? 'border-blue' : 'border-white'} p-20 cursor-pointer`}
                onClick={() => handleUserTypeClick('Sponsor')}
              >
                <img src={Deal} alt="Deal" className="h-20 w-20 mb-2" />
                <p className="text-gray-700">Sponsor</p>
              </div>
              <div
                className={`lg:h-48 h-36 flex flex-col items-center justify-center border-8 gap-2 ${selectedUserType === 'General Practitioner' ? 'border-blue' : 'border-white'} p-20 cursor-pointer`}
                onClick={() => handleUserTypeClick('General Practitioner')}
              >
                <img src={Doctor} alt="Doctor" className="h-20 w-20 mb-2" />
                <p className="text-gray-700">General Practitioner</p>
              </div>
              <div
                className={`lg:h-48 h-36 flex flex-col items-center justify-center border-8 gap-2 ${selectedUserType === 'Patient' ? 'border-blue' : 'border-white'} p-20 cursor-pointer`}
                onClick={() => handleUserTypeClick('Patient')}
              >
                <img src={Patient} alt="Patient" className="h-20 w-20 mb-2" />
                <p className="text-gray-700">Patient</p>
              </div>
            </div>
            <div className="flex justify-center">
              <DefaultNextButton
              label="Next"
                className={`bg-blue py-2 px-5 rounded-md text-center text-white ${!selectedUserType ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleNextClick}
                disabled={!selectedUserType}
              
              />
            </div>
          </div>
        )}
        {step === 'form' && selectedUserType && (
          <RegisterForm
            userType={selectedUserType}
            onSubmit={handleFormSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default Register;
