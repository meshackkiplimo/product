import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AdminDrawer from './AdminDrawer';

const AdminDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const getPageTitle = () => {
        const path = location.pathname;
        if (path.includes('/payments')) return 'Payments Management';
        if (path.includes('/products')) return 'Products Management';
        if (path.includes('/users')) return 'Users Management';
        if (path.includes('/analytics')) return 'Analytics & Reports';
        if (path.includes('/settings')) return 'Settings';
        return 'Dashboard Overview';
    };

    return (
        <div className="min-h-screen bg-slate-900">
            <div className="flex">
                {/* Sidebar */}
                <div className={`
                    fixed left-0 top-0 h-full bg-slate-800 border-r border-slate-700 z-30
                    transition-all duration-300 ease-in-out
                    ${isSidebarOpen ? 'w-80' : 'w-0 overflow-hidden'}
                    lg:static lg:w-80
                `}>
                    <div className="h-full overflow-y-auto">
                        {/* Header */}
                        <div className="p-6 border-b border-slate-700">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">A</span>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-white">Admin Panel</h1>
                                    <p className="text-sm text-slate-400">Management Console</p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <AdminDrawer />
                    </div>
                </div>

                {/* Main Content */}
                <div className={`
                    flex-1 transition-all duration-300 ease-in-out
                    ${isSidebarOpen ? 'lg:ml-0' : 'ml-0'}
                `}>
                    {/* Top Bar */}
                    <div className="bg-slate-800 border-b border-slate-700 px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={toggleSidebar}
                                    className="lg:hidden p-2 rounded-lg bg-slate-700 text-slate-300 hover:bg-slate-600 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                                <div>
                                    <h2 className="text-2xl font-bold text-white">{getPageTitle()}</h2>
                                    <p className="text-slate-400">Manage your application data</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                {/* Search */}
                                <div className="relative hidden md:block">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="w-64 pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                    />
                                    <svg className="absolute left-3 top-2.5 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>

                                {/* Notifications */}
                                <button className="relative p-2 rounded-lg bg-slate-700 text-slate-300 hover:bg-slate-600 transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-2.5-2.5M15 17l2.5-2.5M15 17H9a2 2 0 01-2-2V9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2z" />
                                    </svg>
                                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Page Content */}
                    <div className="p-6">
                        <Outlet />
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-20 lg:hidden"
                    onClick={toggleSidebar}
                />
            )}
        </div>
    );
};

export default AdminDashboard;