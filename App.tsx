import React, { useState, useEffect } from 'react';
import Chat from './components/Chat';
import SalesPage from './components/SalesPage';
import { AppStep, UserData } from './types';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppStep>(AppStep.SALES_PAGE);
  const [userData, setUserData] = useState<UserData>({
    name: '',
    age: '',
    partnerName: ''
  });

  // Ensure scroll to top on step change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  const handleStartChat = () => {
    setCurrentStep(AppStep.CHAT);
  };

  const handleUpdatePartner = (name: string) => {
    setUserData(prev => ({ ...prev, partnerName: name }));
  };

  const handleUpdateUser = (name: string, age: string) => {
    setUserData(prev => ({ ...prev, name, age }));
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-gray-100 font-poppins">
      {currentStep === AppStep.SALES_PAGE && (
        <SalesPage onStart={handleStartChat} />
      )}

      {currentStep === AppStep.CHAT && (
        <Chat 
          userData={userData} 
          onUpdatePartner={handleUpdatePartner} 
          onUpdateUser={handleUpdateUser}
        />
      )}
    </div>
  );
};

export default App;