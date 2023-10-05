import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from '../pages/Home';
import Profile from '../pages/Profile';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profiles" element={<Profile />} />
        <Route path="/" element={<Navigate replace to="/profiles" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;