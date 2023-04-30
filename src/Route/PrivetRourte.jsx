import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivetRourte = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (
        <div className="d-flex justify-content-center align-items-center">
            <Spinner className=' align-items-center' animation="border" />
        </div>
        );
    }
    if (user) {
        return children
    }
    return <Navigate to='/login'  state={{ from: location }} replace></Navigate>;
};

export default PrivetRourte;