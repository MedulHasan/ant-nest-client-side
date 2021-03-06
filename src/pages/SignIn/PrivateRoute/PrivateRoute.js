import { CircularProgress } from "@mui/material";
import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();
    if (isLoading) {
        return <CircularProgress />;
    }
    if (user.email) {
        return children;
    }
    return <Navigate to='/sign-in' state={{ from: location }} />;
};

export default PrivateRoute;
