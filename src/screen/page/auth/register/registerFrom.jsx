import React, { useState } from 'react';
import DefaultButton from '../../../component/defaultButton';
import { Link } from 'react-router-dom';
import SubmittedForm from '../register/submittedForm'; 

const RegisterForm = ({ userType, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    fname: "",
    lname: "",
    age: "",
    gender: "",
    ethnicity: "",
    phone: "",
    address: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false); 
  };

  return (
    <div className="m-3">
      {isSubmitted ? (
        <SubmittedForm onClose={handleClose} /> 
      ) : (
        <>
          <h3 className="text-2xl font-semibold">
            Create an account as a {userType}
          </h3>
          <p className="text-xs">
            Already have an account?
            <Link to="/login" className="text-blue underline">
              Login
            </Link>
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                name="fname"
                value={formData.fname}
                onChange={handleInputChange}
                className="w-full border-b border-gray-600 text-gray-500 p-0 h-12 bg-white !focus:outline-0 focus:ring-0 outline-none rounded-none !bg-transparent"
                placeholder="Full Name"
                required
              />
              <input
                type="text"
                name="lname"
                value={formData.lname}
                onChange={handleInputChange}
                className="w-full border-b border-gray-600 text-gray-500 p-0 h-12 bg-white !focus:outline-0 focus:ring-0 outline-none rounded-none !bg-transparent"
                placeholder="Last Name"
                required
              />
              <input
                type="number"
                name="age"
                min="0"
                max="120"
                step="1"
                value={formData.age}
                onChange={handleInputChange}
                className="w-full border-b border-gray-600 text-gray-500 p-0 h-12 bg-white !focus:outline-0 focus:ring-0 outline-none rounded-none !bg-transparent"
                placeholder="Age"
                required
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full border-b border-gray-600 text-gray-500 p-0 h-12 bg-white !focus:outline-0 focus:ring-0 outline-none rounded-none !bg-transparent"
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="text"
                name="ethnicity"
                value={formData.ethnicity}
                onChange={handleInputChange}
                className="w-full border-b border-gray-600 text-gray-500 p-0 h-12 bg-white !focus:outline-0 focus:ring-0 outline-none rounded-none !bg-transparent"
                placeholder="Ethnicity"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full border-b border-gray-600 text-gray-500 p-0 h-12 bg-white !focus:outline-0 focus:ring-0 outline-none rounded-none !bg-transparent"
                placeholder="Phone No:"
              />
            </div>
            <div className="grid">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-auto border-b border-gray-600 text-gray-500 p-0 h-12 bg-white !focus:outline-0 focus:ring-0 outline-none rounded-none !bg-transparent"
                placeholder="Email"
                required
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-auto border-b border-gray-600 text-gray-500 p-0 h-12 bg-white !focus:outline-0 focus:ring-0 outline-none rounded-none !bg-transparent"
                placeholder="Address"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-600 text-gray-500 p-0 h-12 bg-white !focus:outline-0 focus:ring-0 outline-none rounded-none !bg-transparent"
                  placeholder="Password"
                  required
                />
                <label htmlFor="password" className="text-sm text-gray-700 mt-4">
                  Use 8 or more characters with a mix of letters, numbers, and symbols.
                </label>
              </div>
              <input
                type="password"
                name="rePassword"
                className="w-full border-b border-gray-600 text-gray-500 p-0 h-12 bg-white !focus:outline-0 focus:ring-0 outline-none rounded-none !bg-transparent"
                placeholder="Re-enter Password"
                required
              />
            </div>
            <div className="flex gap-2 text-md">
              <input type="checkbox" name="agree" required />
              <p>
                By creating an account, I agree to Terms of use and
                <span className="text-blue underline">
                  <a href="" target="_blank">
                    Privacy Policy.
                  </a>
                </span>
              </p>
            </div>

            <DefaultButton
              label="Create an account"
              className="w-40 text-sm font-semibold bg-blue text-white py-2 px-4 rounded-md"
              onClick={handleSubmit} 
            />
          </form>
        </>
      )}
    </div>
  );
};

export default RegisterForm;
