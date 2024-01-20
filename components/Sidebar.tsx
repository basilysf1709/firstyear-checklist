'use client'
import React, { useState, ReactNode, SetStateAction, Dispatch  } from 'react';

interface SidebarButtonProps {
  icon: ReactNode;
  tabName: string;
  currentTab: string | null;
  setCurrentTab: any;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ icon, tabName, currentTab, setCurrentTab }) => {
  const isCurrentTab = currentTab === tabName;

  const handleButtonClick = () => {
    if (isCurrentTab) {
      setCurrentTab(null); // Closes the sidebar if the same tab is clicked
    } else {
      setCurrentTab(tabName);
    }
  };

  return (
    <button
      onClick={handleButtonClick}
      className={`p-2 transition-colors rounded-lg shadow-md focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-offset-white focus:ring-offset-2 ${
        isCurrentTab ? 'text-white bg-indigo-600' : 'text-gray-500 bg-white'
      } hover:bg-indigo-800 hover:text-white`}
    >
      <span className="sr-only">Toggle {tabName} panel</span>
      <svg
        aria-hidden="true"
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {icon}
      </svg>
    </button>
  );
};

const Sidebar = () => {
  const [currentTab, setCurrentTab] = useState(null);

  return (
    <div className="flex flex-col items-center flex-1 p-2 space-y-4">
      <SidebarButton
        icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />}
        tabName="linksTab"
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      {/* ... other buttons */}
    </div>
  );
};

export default Sidebar;
