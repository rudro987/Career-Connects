/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading) return <Loader></Loader>
    if(user) return children;

    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default PrivateRoutes;