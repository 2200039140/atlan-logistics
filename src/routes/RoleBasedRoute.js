import React from 'react';
import { Navigate } from 'react-router-dom';

const RoleBasedRoute = ({ role, children }) => {
  // Replace this with actual role checking logic (e.g., from context or state)
  const userRole = "user"; // Example role; replace with real role from your app

  if (role !== userRole) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RoleBasedRoute;
