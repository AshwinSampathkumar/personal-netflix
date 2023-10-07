import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import routes from "../utils/routes";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.profile} element={<Profile />} />
        <Route path={routes.root} element={<Navigate replace to={routes.profile} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
