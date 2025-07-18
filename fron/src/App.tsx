import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Verify from './components/auth/Verify';
import AdminDashboard from './components/admin/AdminDashboard';
import PaymentsManagement from './components/admin/PaymentsManagement';
import AdminProductsManagement from './components/admin/AdminProductsManagement';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/products" element={<Products />} />
            <Route path="/categories" element={<div className="pt-20 p-8"><h1 className="text-3xl font-bold">Categories Page - Coming Soon</h1></div>} />
            <Route path="/cart" element={<div className="pt-20 p-8"><h1 className="text-3xl font-bold">Shopping Cart - Coming Soon</h1></div>} />
            <Route path="/orders" element={<div className="pt-20 p-8"><h1 className="text-3xl font-bold">My Orders - Coming Soon</h1></div>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify" element={<Verify />} />
            
            {/* Admin Routes */}
            <Route path="/admin-dashboard" element={<AdminDashboard />}>
              <Route index element={<div className="text-white"><h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1><p>Welcome to the admin dashboard!</p></div>} />
              <Route path="payments" element={<PaymentsManagement />} />
              <Route path="products" element={<AdminProductsManagement />} />
              <Route path="users" element={<div className="text-white"><h1 className="text-3xl font-bold">Users Management - Coming Soon</h1></div>} />
              <Route path="analytics" element={<div className="text-white"><h1 className="text-3xl font-bold">Analytics - Coming Soon</h1></div>} />
              <Route path="settings" element={<div className="text-white"><h1 className="text-3xl font-bold">Settings - Coming Soon</h1></div>} />
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
