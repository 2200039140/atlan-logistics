import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import Login from './components/Login'; // Correct import for default export
import Register from './components/Register';
import RoleBasedRoute from './components/RoleBasedRoute'; // Correct import
import BookingService from './components/BookingService'; // Correct import
import DataAnalytics from './components/DataAnalytics'; // Correct import
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Role-based routes */}
        <Route
          path="/book-service"
          element={
            <RoleBasedRoute role="user">
              <BookingService />
            </RoleBasedRoute>
          }
        />
        <Route
          path="/data-analytics"
          element={
            <RoleBasedRoute role="admin">
              <DataAnalytics />
            </RoleBasedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
