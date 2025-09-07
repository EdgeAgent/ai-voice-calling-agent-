
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Campaigns from './components/Campaigns';
import Contacts from './components/Contacts';
import CallMonitoring from './components/CallMonitoring';
import Settings from './components/Settings';
import { View } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>(View.Dashboard);

  const renderContent = () => {
    switch (activeView) {
      case View.Dashboard:
        return <Dashboard />;
      case View.Campaigns:
        return <Campaigns />;
      case View.Contacts:
        return <Contacts />;
      case View.CallMonitoring:
        return <CallMonitoring />;
      case View.Settings:
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-dark-bg font-sans">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={activeView} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-dark-bg p-6 lg:p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
