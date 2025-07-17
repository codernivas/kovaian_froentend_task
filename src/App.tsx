import React from "react";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/DashboardModule/Dashboard";
import { Navigate, Route, Routes } from "react-router-dom";
import Leads from "./pages/LeadsModule/Leads";
import EditLeadsModule from "./pages/EditLeadsModule";
import ViewLeadsModule from "./pages/ViewLeadsModule";

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/leads" replace />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/leads/editLeadsModule" element={<EditLeadsModule />} />
        <Route path="/leads/viewLeadsModule" element={<ViewLeadsModule />} />
      </Routes>
    </Layout>
  );
};

export default App;
