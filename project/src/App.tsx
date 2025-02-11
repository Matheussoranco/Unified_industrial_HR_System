import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import HealthTracker from './components/HealthTracker';
import Community from './components/Community';
import Recipes from './components/Recipes';
import Programs from './components/Programs';
import Login from './components/Login';
import Profile from './components/Profile';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const user = localStorage.getItem('user');
  return user ? <>{children}</> : <Navigate to="/login" />;
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/health-tracker"
            element={
              <PrivateRoute>
                <HealthTracker />
              </PrivateRoute>
            }
          />
          <Route
            path="/community"
            element={
              <PrivateRoute>
                <Community />
              </PrivateRoute>
            }
          />
          <Route
            path="/recipes"
            element={
              <PrivateRoute>
                <Recipes />
              </PrivateRoute>
            }
          />
          <Route
            path="/programs"
            element={
              <PrivateRoute>
                <Programs />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;