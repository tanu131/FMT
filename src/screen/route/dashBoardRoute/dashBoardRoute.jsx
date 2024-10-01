import React from 'react';
import Header from '../../page/component/header/header';
import { Outlet } from 'react-router-dom';
import Footer from '../../page/component/footer/footer';

const DashBoardRoute = ({ isAuthenticated, setIsAuthenticated, handleLogout }) => { 
  return (
    <div>
      <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default DashBoardRoute;
