import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import {auth} from '../firebase'

function ProtectedRoute() {
  const isAuthenticated = auth.currentUser !== null
  console.log("this", isAuthenticated);
  return isAuthenticated ? <Outlet/> : <Navigate to="/login" />;
}

export default ProtectedRoute;