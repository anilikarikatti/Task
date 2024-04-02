import React, { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/Login/login";
const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AuthRoutes;
