import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../../page/component/header/header';
import Footer from '../../page/component/footer/footer';
const MainRoute = () => {
  return (
    <div className='Homebg bg-blue'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainRoute;
