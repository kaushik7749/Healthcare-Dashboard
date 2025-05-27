import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <h1 className="text-2xl font-bold text-cyan-500">Healthcare.</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search"
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-64 text-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <Bell className="w-6 h-6 text-blue-600" />
        <div className="flex items-center space-x-3">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&faceindex=1" 
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-gray-700 font-medium">James Smith</span>
        </div>
        <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;