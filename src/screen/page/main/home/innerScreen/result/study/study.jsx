import React from 'react';
import { IoShareSocialOutline } from "react-icons/io5";
import DefaultButton from "../../../../../../component/defaultButton.jsx";
import DefaultBreadcrumb from "../../../../../../component/breadCrumbs/defaultBreadCrumbs.jsx";
import Content from './content/content.jsx';

function Study() {
   
    const breadcrumbs = [
        { label: "Home", url: "/" },
        { label: "Conditions", url: "/category" },
        { label: "Results", url: "/category/result" },
        { label: "Study", url: "/category/result/study" },
    ];

    return (
        <div className="w-full border-t border-black">
            <div className="container mx-auto">
                
                <DefaultBreadcrumb breadcrumbs={breadcrumbs} />
            
                <div className="flex gap-2 justify-start items-center mt-4">
                    <DefaultButton 
                        label="Refer me"
                        className="px-6 py-2 rounded-md bg-green-600 text-white"
                    />
                    <span className="flex items-center justify-center rounded-md bg-red-500 text-white p-2">
                        <IoShareSocialOutline className="text-xl" />
                    </span>
                </div>

                <div className="border-y border-black mt-6">
                    <div className="bg-white mt-6">
                        <Content />
                    </div>
                </div>
            </div>
        </div>
       
    );

}

export default Study;
