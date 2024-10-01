import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const DefaultBreadcrumb = ({ breadcrumbs = [] }) => {
  if (!Array.isArray(breadcrumbs) || breadcrumbs.length === 0) {
    return null;  
  }

  return (
    <div className="my-6 flex items-center gap-2 font-semibold text-xl">
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={index} className="flex items-center gap-2 text-blue">
          <NavLink to={breadcrumb.url}>
            <h2>{breadcrumb.label}</h2>
          </NavLink>
          {index < breadcrumbs.length - 1 && <FaChevronRight className="text-black"/>}
        </div>
      ))}
    </div>
  );
};

export default DefaultBreadcrumb;
