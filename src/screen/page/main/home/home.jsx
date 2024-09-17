import React, { useState } from 'react';
import humanBody from "../../../../assets/image/body.png";
import humanBodyCircle from "../../../../assets/image/bodycircle.png";
import { IoSearchOutline } from "react-icons/io5";


const Home = () => {
  const data = [];

  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredData = data.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full">
      <div className="max-w-[1170px] mx-auto flex lg:flex-row flex-col-reverse justify-between text-white">
        <div className="flex flex-col text-justify justify-center px-5 mt-4 max-w-[720px]">
          <h1 className="mb-3 font-bold md:text-6xl text-3xl">
            Connecting Patients
          </h1>
          <h2 className="mb-3 font-bold md:text-6xl text-3xl">
            to Clinical Trials...
          </h2>
          <p className="md:text-sm mt-5 mb-5 text-secondary-50">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The
            point of Lorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </p>

         
          <div className="relative mt-6">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={handleChange}
              className="p-2 pl-10 rounded-full border text-gray-600 border-gray-300 w-full focus:outline-none"
            />
          
               <IoSearchOutline  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue h-8 w-8 p-2 rounded-full " />
          
          </div>
          
          
          <ul className="mt-2 list-disc pl-5">
            {filteredData.map((item, index) => (
              <li key={index} className="py-1">{item}</li>
            ))}
          </ul>
        </div>
        
     
        <div className="flex flex-col justify-center items-center lg:justify-end">
          <div className="max-w-[300px] z-10 h-[37rem]">
            <img
              src={humanBody}
              alt="Human Body"
              className="cursor-pointer mt-6 pr-6 max-h-[36rem]"
            />
          </div>
          <div>
            <img
              src={humanBodyCircle}
              alt="Human Body Circle"
              className="cursor-pointer -mt-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
