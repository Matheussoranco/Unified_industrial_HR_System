import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import HealthTracker from './components/HealthTracker';
import Community from './components/Community';
import Recipes from './components/Recipes';
import Programs from './components/Programs';
import Profile from './components/Profile';
import Login from './components/Login';
import HumanResources from './components/HumanResources';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/health-tracker" element={<HealthTracker />} />
          <Route path="/community" element={<Community />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/humanresources" element={<HumanResources />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;