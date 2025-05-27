import React from 'react';
import { Calendar, BarChart3, Activity, Settings, MessageCircle, Phone, Users, Clock, Stethoscope } from 'lucide-react';

const navigationLinks = [
  { id: 'dashboard', label: 'Dashboard', icon: BarChart3, active: true },
  { id: 'history', label: 'History', icon: Clock },
  { id: 'calendar', label: 'Calendar', icon: Calendar },
  { id: 'appointments', label: 'Appointments', icon: Users },
  { id: 'statistics', label: 'Statistics', icon: Activity },
  { id: 'tests', label: 'Tests', icon: Stethoscope },
  { id: 'chat', label: 'Chat', icon: MessageCircle },
  { id: 'support', label: 'Support', icon: Phone },
  { id: 'setting', label: 'Setting', icon: Settings }
];

const Sidebar = () => {
  return (
    <aside className="bg-white w-64 min-h-screen border-r border-gray-200 p-6">
      <div className="mb-8">
        <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-4">General</h3>
        <nav className="space-y-2">
          {navigationLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.id}
                href="#"
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  link.active 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;