import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const DefaultBreadcrumb = ({ breadcrumbs = [] }) => { 
  const shouldShowEllipsis = false;

  if (!Array.isArray(breadcrumbs) || breadcrumbs.length === 0) {
    return null;  
  }

  return (
    <div className="container mx-auto flex items-center gap-2 font-bold text-xl ">

      {breadcrumbs.slice(0, 1).map((breadcrumb, index) => (
        <div key={index} className="flex items-center gap-2">
          <NavLink to={breadcrumb.url}>
            <h2>{breadcrumb.label}</h2>
          </NavLink>
          {shouldShowEllipsis && (
            <div>
            <FaChevronRight />
              <span> ... </span>
            </div>
          )}
        </div>
      ))}

      {shouldShowEllipsis ? (
        <div>
          <FaChevronRight />
          <h2>{breadcrumbs[breadcrumbs.length - 1].label}</h2>
        </div>
      ) : (
        breadcrumbs.slice(1).map((breadcrumb, index) => (
          <div key={index} className="flex items-center gap-2">
            <FaChevronRight />
            <NavLink to={breadcrumb.url} state={breadcrumb.data}>
              <h2>{breadcrumb.label}</h2>
            </NavLink>
          </div>
        ))
      )}
    </div>
  );
};

export default DefaultBreadcrumb;
