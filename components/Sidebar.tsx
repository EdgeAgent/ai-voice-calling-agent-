
import React from 'react';
import { View } from '../types';
import { NAV_ITEMS } from '../constants';

interface SidebarProps {
  activeView: View;
  setActiveView: (view: View) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  return (
    <div className="w-20 bg-dark-card border-r border-dark-border flex flex-col items-center py-6">
      <div className="text-3xl font-bold mb-12 text-brand-primary">VF</div>
      <nav className="flex flex-col space-y-6">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id)}
            className={`p-3 rounded-lg transition-colors duration-200 ${
              activeView === item.id
                ? 'bg-brand-primary text-white'
                : 'text-dark-text-secondary hover:bg-dark-border'
            }`}
            title={item.id}
          >
            <span className="text-2xl">{item.icon}</span>
          </button>
        ))}
      </nav>
      <div className="mt-auto">
        <img
          src="https://picsum.photos/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Sidebar;
