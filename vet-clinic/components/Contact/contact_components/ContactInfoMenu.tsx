'use client';

import React, { useState } from 'react';
import ContactInfo from './ContactInfo';
import ContactEmergency from './ContactEmergency';
import ContactVisit from './ContactVisit';

const ContactInfoMenu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const tabs = [
    {
      label: 'Info',
      bgColorActive: 'bg-glacier-300',
      bgColorInactive: 'bg-glacier-200',
    },
    {
      label: 'Notruf',
      bgColorActive: 'bg-red-300',
      bgColorInactive: 'bg-red-200',
    },
    {
      label: 'Hausbesuche',
      bgColorActive: 'bg-pastel-green-300',
      bgColorInactive: 'bg-pastel-green-200',
    },
  ];

  return (
    <div className="text-md w-full border-2">
      {/* Tab Navigation */}
      <div className="flex font-semibold">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`flex-1 py-2 ${
              activeTab === index
                ? `tab-active ${tab.bgColorActive}`
                : tab.bgColorInactive
            }`}
            onClick={() => handleTabClick(index)}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === 0 && <ContactInfo />}
        {activeTab === 1 && <ContactEmergency />}
        {activeTab === 2 && <ContactVisit />}
      </div>
    </div>
  );
};

export default ContactInfoMenu;
