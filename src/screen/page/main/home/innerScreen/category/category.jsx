import React from "react";
import DefaultCheckButton from "../../../../../component/defaultCheckButton";
import DefaultNextButton from "../../../../../component/defaultNextButton"
const Category = () => {
  return (
    <div className="container mx-auto flex flex-col gap-2">
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-3xl font-bold">Conditions</h1>
        <p className="text-lg">
          Viewing 10 conditions |  <span className="text-green-500 underline">
             + Synonoyms of conditions or disease
          </span>
        </p>
      </div>
      <DefaultCheckButton />
      <div className="flex justify-center items-center">
        <DefaultNextButton
          label="Next"
          className="py-2 px-10 rounded-md border border-black bg-white w-28 "
        />
      </div>
      <p className="bg-purple-200 py-4 px-14 text-sm rounded-md w-full">
        "Can't find a trial for your condition? No worries! We're on the hunt
        for you. Register here, and we'll keep you posted on potential trials
        that could help."
        <br /> <span className="text-blue">Your interest matters to us.</span>
      </p>
      <p className="font-bold">
        For better help and services.
        <span className="text-blue">Contact Us</span>
      </p>
    </div>
  );
};

export default Category;
