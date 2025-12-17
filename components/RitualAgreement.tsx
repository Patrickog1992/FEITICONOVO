import React, { useState, useEffect } from 'react';
import { Clock, Flame, Check, ArrowRight, Lock } from 'lucide-react';
import { CHECKOUT_URL } from '../constants';

interface RitualAgreementProps {
  onComplete: () => void; // Optional if we redirect directly
}

const RitualAgreement: React.FC<RitualAgreementProps> = () => {
  // Timer state (1 minute 30 seconds = 90 seconds)
  const [timeLeft, setTimeLeft] = useState(90);
  
  // Form states
  const [agreements, setAgreements] = useState({
    faith: false,
    secret: false,
    permanent: false
  });
  
  const [candleLit, setCandleLit] = useState(false);
  const [userName, setUserName] = useState('');
  const [partnerName, setPartnerName] = useState('');
  
  // Removed error state as validation is no longer required

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const toggleAgreement = (key: keyof typeof agreements) => {
    setAgreements(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCandleClick = () => {
    setCandleLit(true);
  };

  const handleSubmit = () => {
    // Validation removed as requested. 
    // User can proceed without checking boxes, lighting candle, or entering names.
    window.location.href = CHECKOUT_URL;
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-gray-100 flex flex-col items-center py-10 px-4 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-[#0f0f0f] to-[#0f0f0f] z-0 pointer-events-none"></div>

      <div className="w-full max-w-lg z-10 space-y-8 animate-fade-in">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-4">
             <span className="bg-red-900/30 text-red-500 border border-red-900/50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
               <Clock className="w-3 h-3" />
               Expira em: {formatTime(timeLeft)}
             </span>
          </div>
          <h1 className="text-2xl font-bold text-white leading-tight">
            <span className="text-green-500">SUCESSO</span>: Você está dentro das 3.737 pessoas dignas de receber o feitiço
          </h1>
          <p className="text-gray-400 text-sm">
            (Marque todas as opções abaixo para liberar o feitiço)
          </p>
        </div>

        {/* Checkboxes */}
        <div className="space-y-4 bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
          {[
            { id: 'faith', text: "Eu entendo que é necessária fé para que este feitiço funcione." },
            { id: 'secret', text: "Eu não contarei a ninguém sobre o feitiço (isso causará o rompimento do encantamento)." },
            { id: 'permanent', text: "Eu entendo que, uma vez lançado, este feitiço não pode ser desfeito." }
          ].map((item) => (
            <div 
              key={item.id}
              onClick={() => toggleAgreement(item.id as keyof typeof agreements)}
              className={`flex items-start gap-4 p-3 rounded-lg cursor-pointer transition-all border ${
                agreements[item.id as keyof typeof agreements] 
                ? 'bg-red-900/20 border-red-500/50' 
                : 'bg-gray-800/30 border-gray-700 hover:border-gray-600'
              }`}
            >
              <div className={`w-6 h-6 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                agreements[item.id as keyof typeof agreements] 
                ? 'bg-red-600 border-red-600' 
                : 'border-gray-500'
              }`}>
                {agreements[item.id as keyof typeof agreements] && <Check className="w-4 h-4 text-white" />}
              </div>
              <p className={`text-sm ${agreements[item.id as keyof typeof agreements] ? 'text-white' : 'text-gray-400'}`}>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Candle Section */}
        <div className="flex flex-col items-center justify-center py-4">
          <div className="relative group cursor-pointer" onClick={handleCandleClick}>
            {/* Glow Effect when lit */}
            {candleLit && (
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-orange-500/30 blur-xl rounded-full animate-pulse"></div>
            )}
            
            {/* Candle Body (CSS Drawing for reliability) */}
            <div className="relative flex flex-col items-center">
               {/* Flame */}
               <div className={`transition-all duration-700 ${candleLit ? 'opacity-100 scale-100' : 'opacity-20 scale-50'}`}>
                  <div className="relative w-8 h-12">
                     <div className="absolute bottom-0 w-8 h-8 bg-orange-500 rounded-full blur-[2px] animate-bounce"></div>
                     <div className="absolute bottom-1 left-1 w-6 h-6 bg-yellow-300 rounded-full blur-[1px] animate-pulse"></div>
                     <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-black/20"></div>
                  </div>
               </div>
               
               {/* Wick */}
               <div className="w-1 h-3 bg-gray-800 -mb-1 z-10"></div>
               
               {/* Wax */}
               <div className="w-16 h-32 bg-gradient-to-r from-red-900 via-red-700 to-red-900 rounded-lg shadow-lg relative overflow-hidden border-x border-red-950">
                  <div className="absolute top-0 w-full h-4 bg-red-800/50 rounded-full"></div>
               </div>
               
               {/* Base */}
               <div className="w-24 h-4 bg-[#2a1a15] rounded-full -mt-2 shadow-xl"></div>
            </div>

            <div className={`mt-4 text-center transition-all ${candleLit ? 'text-orange-400' : 'text-gray-500 animate-pulse'}`}>
              {candleLit ? (
                <span className="flex items-center gap-2 text-sm font-bold shadow-orange-500/50 drop-shadow-md">
                  <Flame className="w-4 h-4 fill-orange-500" /> Chama da Paixão Ativada
                </span>
              ) : (
                <span className="text-sm underline decoration-gray-700 underline-offset-4">
                  Clique na vela para acender a chama da paixão
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs text-gray-400 uppercase font-bold tracking-wider ml-1">Seu primeiro nome</label>
            <input 
              type="text" 
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Digite aqui seu nome"
              className="w-full bg-gray-800/80 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
            />
          </div>
          
          <div className="space-y-1">
            <label className="text-xs text-gray-400 uppercase font-bold tracking-wider ml-1">Nome da pessoa amada</label>
            <input 
              type="text" 
              value={partnerName}
              onChange={(e) => setPartnerName(e.target.value)}
              placeholder="Digite aqui o nome da pessoa desejada"
              className="w-full bg-gray-800/80 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
            />
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-extrabold text-lg py-5 rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.3)] transform transition hover:scale-[1.02] flex items-center justify-center gap-2 group uppercase tracking-wide"
          >
            👉 QUERO O FEITIÇO AGORA
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500">
            <Lock className="w-3 h-3" />
            <span>Dados criptografados e sigilosos</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RitualAgreement;