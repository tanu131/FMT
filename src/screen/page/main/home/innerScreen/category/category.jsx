import React from "react";
import { useNavigate } from "react-router-dom"; 
import DefaultCheckButton from "../../../../../component/defaultCheckButton";
import DefaultNextButton from "../../../../../component/defaultNextButton";
import DefaultBreadcrumb from "../../../../../component/breadCrumbs/defaultBreadCrumbs"; 

const Category = () => {
  const navigate = useNavigate();

  const breadcrumbsItems = [
    { label: 'Home', url: '/' }, 
    { label: 'Conditions', url: '/category' }, 
  ];

  const handleNextClick = () => {
    navigate('/category/result'); 
  };

  return (
    <div className='border-t border-black mt-4'>
    <div className="container mx-auto flex flex-col gap-2">
      <DefaultBreadcrumb breadcrumbs={breadcrumbsItems} /> 
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-3xl font-bold">Conditions</h1>
        <p className="text-lg">
          Viewing 10 conditions | <span className="text-green-500 underline">+ Synonyms of conditions or disease</span>
        </p>
      </div>
      <DefaultCheckButton />
      <div className="flex justify-center items-center">
        <DefaultNextButton
          label="Next"
          className="py-2 px-10 rounded-md border text-black border-black bg-white w-28"
          onClick={handleNextClick} 
        />
      </div>
      <p className="bg-light-color py-4 px-14 text-sm rounded-md w-full">
        "Can't find a trial for your condition? No worries! We're on the hunt for you. Register here, and we'll keep you posted on potential trials that could help."
        <br /> <span className="text-blue">Your interest matters to us.</span>
      </p>
      <p className="font-bold">
        For better help and services.
        <span className="text-blue">Contact Us</span>
      </p>
    </div>
    </div>
  );
};

export default Category;
