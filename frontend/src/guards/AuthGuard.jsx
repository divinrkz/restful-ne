import { Navigate } from "react-router-dom";
import React from 'react'

export const AuthGuard = ({ isLoggedIn, children }) => {
 if (!isLoggedIn) {
    return <Navigate to="/login" replace />
 }
 return children;
};
