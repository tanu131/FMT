import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo_purple from '../../../../assets/image/logo_purple.png';
import Logo from '../../../../assets/image/logo.png';
import { FaAnglesRight } from 'react-icons/fa6';
import DefaultButton from '../../../component/defaultButton';
import Register from '../register/register'; 

const Login = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    setIsRegisterOpen(true);
  };

  const handleCloseRegister = () => {
    setIsRegisterOpen(false);
  };

  const handleLogin = (e) => {
    e.preventDefault(); 
    navigate("/"); 
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-2/3 BgImage px-10 text-justify">
        <Link to={"/"}>
          <div className="flex gap-1 py-10">
            <img src={Logo_purple} alt="Logo Purple" className="h-6 w-auto" />
            <img src={Logo} alt="Logo" className="h-6 w-auto" />
          </div>
        </Link>
        <div className="py-20 mt-6">
          <h1 className="font-bold text-4xl">Welcome</h1>
          <h2 className="text-4xl mt-2">Register for an account here</h2>
          <p className="text-lg mt-7">
            It is a long-established fact that a reader will be distracted by the
            readable content of a <br /> page when looking at its layout. The point of
            using lorem ipsum is that it has a <br /> distribution.
          </p>
        </div>
        <DefaultButton
          label="Register here"
          className="bg-blue text-white py-2 px-4 rounded-md"
          onClick={handleRegisterClick}
        />
        {isRegisterOpen && <Register onClose={handleCloseRegister} />}
      </div>
      <div className="bg-blue w-1/3 text-white LoginBgImage px-10 flex flex-col justify-center relative">
        <Link to={"/"}>
          <div className="flex justify-end items-center absolute right-10 top-10">
            <p>Skip</p>
            <FaAnglesRight />
          </div>
        </Link>
        <h4 className="text-3xl mb-6 text-justify">Or login to your account</h4>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            className="w-full border-b-2 border-gray-200 p-0 h-12 text-white bg-white !focus:outline-0 focus:ring-0 outline-none rounded-none !bg-transparent"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
          <input
            type="password"
            name="password"
            className="w-full border-b-2 border-gray-200 p-0 h-12 text-white bg-white !focus:outline-0 focus:ring-0 outline-none rounded-none !bg-transparent"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
          <h6 className="text-right mt-2">
            <Link to="/forgot-password" className="text-white hover:underline">
              Forgot Password?
            </Link>
          </h6>
          <DefaultButton
            label="Login"
            className="bg-white text-black w-24 font-semibold p-2 rounded-md mt-10"
            type="submit" 
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
