import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';
import SubHeader from './../pages/Shared/SubHeader/SubHeader';

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <SubHeader></SubHeader>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;