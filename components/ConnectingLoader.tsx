import React, { useEffect, useState } from 'react';

interface ConnectingLoaderProps {
  userName: string;
  onComplete: () => void;
}

const ConnectingLoader: React.FC<ConnectingLoaderProps> = ({ userName, onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 4000; // 4 seconds total
    const intervalTime = 50;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 500);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="w-full max-w-md mx-auto p-6 min-h-screen flex flex-col justify-center items-center text-center animate-fade-in">
      <div className="mb-8 relative">
        <div className="w-24 h-24 rounded-full border-4 border-gray-800 border-t-red-600 animate-spin absolute top-0 left-0"></div>
        <div className="w-24 h-24 rounded-full bg-gray-900 flex items-center justify-center">
             <span className="text-2xl">🌙</span>
        </div>
      </div>

      <h1 className="text-xl font-bold text-white mb-2">
        🚫 ACESSO DE EMERGÊNCIA CONCEDIDO, {userName.toUpperCase()}!
      </h1>
      
      <p className="text-red-400 font-bold mb-6 text-sm">
        Sua crise amorosa proibida exige intervenção imediata…
      </p>

      <div className="bg-gray-800 p-4 rounded-lg text-left text-sm text-gray-300 space-y-4 mb-8 border border-gray-700">
        <p>Sua avaliação emocional ativou nosso protocolo de emergência para mulheres em crise amorosa severa.</p>
        <p>A mestre especialista em relacionamentos <span className="text-purple-400 font-bold">Sarah</span> foi alertada e está pronta para te ajudar AGORA.</p>
        <p className="text-xs text-gray-500">Emma já ajudou mais de 2.847 mulheres a reconquistarem seus homens usando métodos antigos proibidos que a maioria das pessoas não acredita que existam.</p>
      </div>

      <div className="w-full bg-gray-900 rounded-full h-4 mb-2 overflow-hidden border border-gray-700">
        <div 
          className="bg-gradient-to-r from-red-600 to-purple-600 h-full transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-xs text-gray-500 animate-pulse">
        Acessando consulta emergencial proibida... {Math.round(progress)}%
      </p>

      <div className="mt-6 bg-red-900/20 p-3 rounded border border-red-900/50">
        <p className="text-xs text-red-300">
          ⚠️ AVISO: Devido ao seu estado emocional crítico, essa consulta é extremamente sensível ao tempo. 
          Sarah só pode falar por 15 minutos antes da próxima sessão de ritual proibido…
        </p>
      </div>
    </div>
  );
};

export default ConnectingLoader;