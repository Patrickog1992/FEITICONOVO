
import React, { useState, useEffect } from 'react';
import Chat from './components/Chat';
import Quiz from './components/Quiz';
import UserInput from './components/UserInput';
import CrisisResult from './components/CrisisResult';
import ConnectingLoader from './components/ConnectingLoader';
import SalesPage from './components/SalesPage';
import RitualAgreement from './components/RitualAgreement';
import PreQuiz from './components/PreQuiz';
import FireRitual from './components/FireRitual';
import BindingAltar from './components/BindingAltar';
import { AppStep, UserData } from './types';

const App: React.FC = () => {
  // Inicia no QUIZ conforme solicitado
  const [currentStep, setCurrentStep] = useState<AppStep>(AppStep.QUIZ);
  const [userData, setUserData] = useState<UserData>({
    name: '',
    age: '',
    partnerName: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

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
    // Após o carregamento, vai para a página principal do Ritual (Sales Page completa)
    setCurrentStep(AppStep.FIRE_RITUAL);
  };

  const handleStartBinding = () => {
    setCurrentStep(AppStep.BINDING_ALTAR);
  };

  const handleUpdatePartner = (name: string) => {
    setUserData(prev => ({ ...prev, partnerName: name }));
  };

  const handleUpdateUser = (name: string, age: string) => {
    setUserData(prev => ({ ...prev, name, age }));
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-gray-100 font-poppins">
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

      {currentStep === AppStep.FIRE_RITUAL && (
        <FireRitual onStartBinding={handleStartBinding} />
      )}

      {currentStep === AppStep.BINDING_ALTAR && (
        <BindingAltar />
      )}

      {/* Passos secundários mantidos para integridade do sistema */}
      {currentStep === AppStep.CHAT && (
        <Chat 
          userData={userData}
          onUpdatePartner={handleUpdatePartner}
          onUpdateUser={handleUpdateUser}
        />
      )}
      {currentStep === AppStep.PRE_QUIZ && <PreQuiz onComplete={() => setCurrentStep(AppStep.SALES_PAGE)} />}
      {currentStep === AppStep.SALES_PAGE && <SalesPage onStart={() => setCurrentStep(AppStep.RITUAL_AGREEMENT)} />}
    </div>
  );
};

export default App;
