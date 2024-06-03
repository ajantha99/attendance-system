import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Dashboard from './scenes/Dashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/home" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
