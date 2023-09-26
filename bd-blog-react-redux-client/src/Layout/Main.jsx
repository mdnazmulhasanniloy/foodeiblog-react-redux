import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className=''>
            <Header></Header>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;