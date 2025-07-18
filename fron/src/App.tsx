import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/products" element={<div className="pt-20 p-8"><h1 className="text-3xl font-bold">Products Page - Coming Soon</h1></div>} />
            <Route path="/categories" element={<div className="pt-20 p-8"><h1 className="text-3xl font-bold">Categories Page - Coming Soon</h1></div>} />
            <Route path="/cart" element={<div className="pt-20 p-8"><h1 className="text-3xl font-bold">Shopping Cart - Coming Soon</h1></div>} />
            <Route path="/orders" element={<div className="pt-20 p-8"><h1 className="text-3xl font-bold">My Orders - Coming Soon</h1></div>} />
            <Route path="/register" element={<div className="pt-20 p-8"><h1 className="text-3xl font-bold">Register Page - Coming Soon</h1></div>} />
            <Route path="/admin-dashboard" element={<div className="pt-20 p-8"><h1 className="text-3xl font-bold">Admin Dashboard - Coming Soon</h1></div>} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
