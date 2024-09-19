import React from "react";
const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center py-4 text-center text-white border-t border-gray-200 font-semibold">
        <p className="text-sm">
          &copy; 2023 Find My Trials. All rights reserved.
        </p>
        <p className="text-sm">Downtown St. 129/04, Light City, London.</p>
        <p className="text-sm">info@findmytrials.com | +00 (123) 456 7890</p>
      </div>
    </div>
  );
};

export default Footer;
