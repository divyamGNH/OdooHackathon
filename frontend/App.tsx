
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <div className="flex h-screen w-full bg-background-light">
      {/* Sidebar - Fixed width on large screens */}
      <Sidebar />
      
      {/* Main Content Area - Dynamic spacing to account for fixed sidebar */}
      <div className="flex-1 flex flex-col lg:ml-64 transition-all duration-300 overflow-hidden">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
