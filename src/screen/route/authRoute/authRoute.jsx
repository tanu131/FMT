import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../page/component/footer/footer';

const AuthRoute = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default AuthRoute;
