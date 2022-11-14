import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import PeakShaving from './pages/peak-shaving';
import DemandResponse from './pages/demand-response';
import Insights from './pages/insights';
import VersionHistory from './pages/version-history';
import './App.css';
import './index.css';
import './tailwind.css'
import ProtectedRoute from './components/protected-route';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="layout" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="peak-shaving" element={<PeakShaving />} />
            <Route path="demand-response" element={<DemandResponse />} />
            <Route path="insights" element={<Insights />} />
            <Route path="version-history" element={<VersionHistory />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
