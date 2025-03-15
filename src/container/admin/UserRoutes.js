import React from "react";
import { Route, Routes } from "react-router-dom";
import Travel from "../Travel/Travel";
import Cityfun from "../Cityfun";

function UserRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<Travel />}/>
      <Route path="/cityfun" element={<Cityfun />}/>
    </Routes>
  );
}

export default UserRoutes;
