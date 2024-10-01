import React from 'react';
import Header from '../../page/component/header/header';
import { Outlet } from 'react-router-dom';
import Footer from '../../page/component/footer/footer';

const HomeRoute = () => {
  return (
    <div className='bg-page-light-color'>
      <Header color="black" />
      <Outlet />
      <Footer textColor="text-black" />  
      
    </div> 
  );
};

export default HomeRoute;
