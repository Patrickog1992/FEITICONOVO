import React, { useState, useEffect } from 'react';
import Chat from './components/Chat';
import Quiz from './components/Quiz';
import UserInput from './components/UserInput';
import CrisisResult from './components/CrisisResult';
import ConnectingLoader from './components/ConnectingLoader';
import SalesPage from './components/SalesPage';
import RitualAgreement from './components/RitualAgreement';
import PreQuiz from './components/PreQuiz';
import { AppStep, UserData } from './types';

const App: React.FC = () => {
  // Changed initial state to PRE_QUIZ
  const [currentStep, setCurrentStep] = useState<AppStep>(AppStep.PRE_QUIZ);
  const [userData, setUserData] = useState<UserData>({
    name: '',
    age: '',
    partnerName: ''
  });

  // Ensure scroll to top on step change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  const handlePreQuizComplete = () => {
    setCurrentStep(AppStep.SALES_PAGE);
  };

  const handleSalesStart = () => {
    // Goes to RITUAL_AGREEMENT
    setCurrentStep(AppStep.RITUAL_AGREEMENT);
  };

  const handleQuizComplete = () => {
    setCurrentStep(AppStep.USER_INPUT);
  };

  const handleUserInputComplete = (name: string, age: string) => {
    setUserData(prev => ({ ...prev, name, age }));
    setCurrentStep(AppStep.CRISIS_RESULT);
  };

  const handleCrisisContinue = () => {
    setCurrentStep(AppStep.CONNECTING_LOADER);
  };

  const handleLoaderComplete = () => {
    setCurrentStep(AppStep.CHAT);
  };

  const handleUpdatePartner = (name: string) => {
    setUserData(prev => ({ ...prev, partnerName: name }));
  };

  const handleUpdateUser = (name: string, age: string) => {
    setUserData(prev => ({ ...prev, name, age }));
  };

  const handleRitualComplete = () => {
    // This function might not be called if RitualAgreement redirects externally
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-gray-100 font-poppins">
      {currentStep === AppStep.PRE_QUIZ && (
        <PreQuiz onComplete={handlePreQuizComplete} />
      )}

      {currentStep === AppStep.SALES_PAGE && (
        <SalesPage onStart={handleSalesStart} />
      )}

      {currentStep === AppStep.RITUAL_AGREEMENT && (
        <RitualAgreement onComplete={handleRitualComplete} />
      )}

      {currentStep === AppStep.QUIZ && (
        <Quiz onComplete={handleQuizComplete} />
      )}

      {currentStep === AppStep.USER_INPUT && (
        <UserInput onComplete={handleUserInputComplete} />
      )}

      {currentStep === AppStep.CRISIS_RESULT && (
        <CrisisResult onContinue={handleCrisisContinue} />
      )}

      {currentStep === AppStep.CONNECTING_LOADER && (
        <ConnectingLoader 
          userName={userData.name} 
          onComplete={handleLoaderComplete} 
        />
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