import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import MainContentCard from '../components/layout/MainContent';
import Timeline from '../components/activities/Timeline';
import DisputeForm from '../components/disputeforms/DisputeForm';

const OpenDispute = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="md:flex relative">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <main className="flex-1 p-4 md:p-6">
          <div className="overflow-x-hidden">
            <Timeline />
          </div>
          <MainContentCard>
          <DisputeForm/>
          </MainContentCard>
        </main>
      </div>
    </div>
  );
};

export default OpenDispute;