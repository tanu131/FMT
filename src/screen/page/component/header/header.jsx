import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import HeaderLogo from "../../../../assets/image/headerLogo.png";
import Logo from "../../../../assets/image/logofull.png";
import DefaultButton from "../../../component/defaultButton";
const Header = ({ color = "white",isAuthenticated,handleLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "What We Do?", link: "/whatWeDo" },
    { name: "Ongoing Trials", link: "/ongoingTrials" },
    { name: "Contact", link: "/contact" },
    // { name: "Login", link: "/login" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div
      className="container mx-0 lg:mx-auto flex justify-between items-center lg:pt-8 relative text-black"
    >
      <Link to="/">
        <img src={location.pathname === "/" ? HeaderLogo : Logo} alt="logo" />
      </Link>
      <div className="hidden lg:flex gap-10 items-center">
        <div className="flex gap-10 items-center">
        {menuItems.map((item, index) => (
          <Link to={item.link} key={index} style={{ color }}>
            {item.name}
          </Link>
        ))} 
        </div>
        {isAuthenticated ? (
          <span onClick={handleLogout} className={`font-normal cursor-pointer`}>
            Logout
          </span>
        ) : (
      <Link to={'/login'} className="text-white">login</Link>
 )}
 {isAuthenticated && (
   <DefaultButton
     classNames={"text-white"}
     anchor
     onPress={"/dashboard"}
   >
     GP Dashboard
   </DefaultButton>
 )}
      </div>


      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-2xl" style={{ color }}>
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-10 bg-white p-4 w-auto flex flex-col items-center lg:hidden z-10">
          {menuItems.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="py-2"
              style={{ color }}
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
