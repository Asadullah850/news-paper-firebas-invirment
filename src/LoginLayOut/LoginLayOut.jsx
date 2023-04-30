import React from 'react';
import NavigationPage from '../components/Shared/NavigationPage';
import { Outlet } from 'react-router-dom';

const LoginLayOut = () => {
    return (
        <div>
            <NavigationPage></NavigationPage>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayOut;