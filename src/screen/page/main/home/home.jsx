import React, { useState } from "react";
import humanBody from "../../../../assets/image/body.png";
import humanBodyCircle from "../../../../assets/image/bodycircle.png";
import Dropdown from "./component/DropDown";

const Home = () => {
  const data = []; 

  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto flex flex-col-reverse lg:flex-row justify-center items-center text-white h-screen ">
      <div className="flex flex-col w-full lg:w-3/5 text-justify justify-center mt-0 lg:mt-4">
        <h1 className="mb-3 font-bold md:text-6xl text-4xl">Connecting Patients</h1>
        <h2 className="mb-3 font-bold md:text-6xl text-4xl">to Clinical Trials...</h2>
        <p className="md:text-sm mt-5 mb-5 text-secondary-50 text-base">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </p>

        <div className="relative mt-6">
          <Dropdown />
        </div>

        <ul className="mt-2 list-disc pl-5">
          {filteredData.map((item, index) => (
            <li key={index} className="py-1">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col w-full lg:w-2/5 justify-center items-center lg:mt-16 mt-0 lg:justify-end">
        <div className="z-10 h-[37rem]">
          <img
            src={humanBody}
            alt="Human Body"
            className="cursor-pointer pr-6 mt-60 lg:mt-4 max-h-[28rem] lg:max-h-[36rem] w-full object-contain"
          />
        </div>
        <div className="w-full flex justify-center">
          <img
            src={humanBodyCircle}
            alt="Human Body Circle"
            className="cursor-pointer mt-6 lg:-mt-24 max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
