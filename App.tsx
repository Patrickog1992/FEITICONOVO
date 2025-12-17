
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
  // Conforme solicitado, o começo é o QUIZ
  const [currentStep, setCurrentStep] = useState<AppStep>(AppStep.QUIZ);
  const [userData, setUserData] = useState<UserData>({
    name: '',
    age: '',
    partnerName: ''
  });

  useEffect(() => {
    // Scroll to top on step change
    window.scrollTo(0, 0);

    // Pequeno truque para permitir acesso direto via hash (ex: /#ritual)
    if (window.location.hash === '#ritual') {
        setCurrentStep(AppStep.FIRE_RITUAL);
    }
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
    // Após o carregamento, vai para a página do Ritual da Chama (Long Copy completa)
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

      {/* Outros passos mantidos para integridade */}
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
