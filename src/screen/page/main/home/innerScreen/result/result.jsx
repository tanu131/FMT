import React from 'react';
import { useState } from 'react';
import DefaultBreadcrumb from "../../../../../component/breadCrumbs/defaultBreadCrumbs"; 
import BookMark from "../../../../../../assets/icons/bookmark.png";
import DownLoad from "../../../../../../assets/icons/download.png";
import Share from "../../../../../../assets/icons/share.png";
import Sidebar from './component/sideBaar/sideBar';
import TrialList from './component/trialsList/trialsList';


const Result = () => {
  const breadcrumbsItems = [
    { label: 'Home', url: '/' }, 
    { label: 'Conditions', url: '/category' },
    { label: 'Results', url: '/category/result' } 
  ];
  const [formData, setFormData] = useState({
    conditions: '',
    otherTerms: '',
    intervention: '',
    studyStatus: {
      notRecruiting: false,
      recruiting: false,
      activeNotRecruiting: false,
      completed: false,
      terminated: false,
    },
  });

  const diseaseOptions = [
    "Asthma", "Cystic Fibrosis", "Fragile", "Rett Syndrome", "Colon Cancer",
    "Lung Cancer", "Breast Cancer", "Chronic Obstructive Pulmonary Disease (COPD)", 
    "Prostate Cancer", "Rheumatoid Arthritis"
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        studyStatus: {
          ...prevState.studyStatus,
          [name]: checked,
        },
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  return (
    <div className='border-t border-black mt-4'>
    <div className="container mx-auto flex flex-col gap-4">
      <DefaultBreadcrumb breadcrumbs={breadcrumbsItems} />
      <h1 className="text-3xl font-bold text-start">Results</h1>
      <div className='flex justify-between items-center border-b border-black pb-4 '> 
        <p className="text-lg">
          Viewing 1-7 out of 26 studies | <span className="text-green-500 underline">+ Synonyms of conditions or disease</span>
        </p>

        <div className="flex justify-center items-center gap-2">
          <div className='bg-sky-400 p-2 rounded-md'>
          <img 
            src={DownLoad} 
            alt="Download" 
            className="h-4 w-4 transition duration-200 cursor-pointer"
          />
          </div>
          <div className=' bg-indigo-500 p-2 rounded-md'>
          <img 
            src={BookMark} 
            alt="Bookmark" 
            className="h-4 w-4 transition duration-200 cursor-pointer" 
          />
          </div>
          <div className=' bg-red-500 p-2 rounded-md'>
          <img 
            src={Share} 
            alt="Share" 
            className="h-4 w-4 transition duration-200 cursor-pointer" 
          />
          </div>
        </div>
      </div>
      <div className='flex gap-4'>
      <div className=''>
      <Sidebar 
    conditions={formData.conditions}
    otherTerms={formData.otherTerms}
    intervention={formData.intervention}
    studyStatus={formData.studyStatus}
    onInputChange={handleInputChange}
    diseaseOptions={diseaseOptions} 
  />
        </div>
      <div className=''><TrialList/></div>
      </div> 
    </div>
    </div>
  );
};

export default Result;
