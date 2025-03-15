import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout"
import Time from "../Time";
import Apanal from "../Apanal";

function AdminRoutes(props) {
  return (
     <Layout>
        <Routes>
            <Route path="/Apanal" element={<Apanal />}/>
            <Route path="/time" element={<Time />}/>
        </Routes>
     </Layout>
  );
}

export default AdminRoutes;
