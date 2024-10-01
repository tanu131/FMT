import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../../page/main/dashboardPages/component/dashboardSidebar/dashboardSideBar';
import DashBoardHeader from '../../page/main/dashboardPages/component/dashboardHeader/dashboardHeader';
const DashBoardRoute = () => { 
  return (
    <div className='flex'>
      <DashboardSidebar/>
      <div className='w-full'>
        <DashBoardHeader/>
        <div><Outlet/></div>
      </div>
    </div>
  );
}

export default DashBoardRoute;
