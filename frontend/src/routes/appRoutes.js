import React, { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "../components/navigation/navigation.js";
import DashBoard from "../components/Dashboard/Dashboard.js";
const AppRoutes = () => {
  return (
    <Fragment>
      <Navigation>
      <Routes>
      <Route
          path="/dashboard"
         
          element={<DashBoard/>} 
         
        />

        <Route
          path="/"
         
          element={<DashBoard/>} 
         
        />

      </Routes>
      </Navigation>
    </Fragment>
  );
};

export default AppRoutes;
