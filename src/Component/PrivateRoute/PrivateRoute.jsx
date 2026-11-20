import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const isAuthendicated = Boolean(localStorage.getItem('logindata'));
    return isAuthendicated ? 'children' : <Navigate to ='/login' replace />
  
}

export default PrivateRoute