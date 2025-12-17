import React, { useState } from 'react';
import { ArrowRight, Sparkles, HeartCrack, Zap } from 'lucide-react';

interface PreQuizProps {
  onComplete: () => void;
}

const PreQuiz: React.FC<PreQuizProps> = ({ onComplete }) => {
  const [step, setStep] = useState<'intro' | 'q1' | 'q2' | 'q3' | 'result'>('intro');
  const [resultType, setResultType] = useState<'reconnection' | 'attraction'>('reconnection');

  const handleStart = () => {
    setStep('q1');
  };

  const handleQ1Answer = (type: 'reconnection' | 'attraction') => {
    setResultType(type);
    setStep('q2');
  };

  const handleNext = () => {
    if (step === 'q2') setStep('q3');
    if (step === 'q3') setStep('result');
  };

  const renderIntro = () => (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center animate-fade-in relative overflow-hidden bg-[#0a0503]">
      {/* Background Image with Overlay - Matching LP Style */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: 'url(https://i.imgur.com/ryBUFcC.jpeg)' }}
      ></div>
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#2e1d15] via-[#1c100b]/90 to-[#0a0503]"></div>
      
      <div className="relative z-10 w-full max-w-md bg-[#1a1008]/90 backdrop-blur-md p-8 rounded-2xl border border-orange-500/30 shadow-2xl">
        <Sparkles className="w-10 h-10 text-orange-400 mx-auto mb-4 animate-pulse" />
        <h1 className="text-xl md:text-2xl font-bold text-white mb-6 leading-relaxed">
          Descubra em 30 segundos se sua vida amorosa está <span className="text-red-400">bloqueada</span> ou prestes a se <span className="text-green-400">alinhar</span> com alguém destinado a você.
        </h1>
        
        <div className="mb-8 rounded-xl overflow-hidden border border-orange-900/40 shadow-lg">
           <img src="https://i.imgur.com/ryBUFcC.jpeg" alt="Couple" className="w-full h-48 object-cover" />
        </div>

        <button
          onClick={handleStart}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-extrabold py-5 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 uppercase tracking-wide transition-all transform hover:scale-105 border border-green-400/30"
        >
          COMEÇAR AGORA
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  const renderQuestion = (
    question: string, 
    options: { text: string; action: () => void }[]
  ) => (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 animate-fade-in bg-gradient-to-b from-[#2e1d15] via-[#1c100b] to-[#0a0503]">
      <div className="w-full max-w-md">
        <div className="w-full bg-[#1a1008] h-2 rounded-full mb-8 overflow-hidden border border-[#3e2723]">
           <div 
             className="bg-gradient-to-r from-orange-600 to-orange-400 h-full transition-all duration-500"
             style={{ 
               width: step === 'q1' ? '33%' : step === 'q2' ? '66%' : '100%' 
             }}
           ></div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-8 text-center drop-shadow-md">{question}</h2>
        
        <div className="space-y-4">
          {options.map((opt, idx) => (
            <button
              key={idx}
              onClick={opt.action}
              className="w-full text-left bg-[#2e1d15]/80 hover:bg-[#3e2723] border border-orange-900/30 hover:border-orange-500 p-5 rounded-xl transition-all text-gray-100 font-medium flex justify-between items-center group active:scale-[0.98] shadow-lg backdrop-blur-sm"
            >
              {opt.text}
              <ArrowRight className="w-4 h-4 text-orange-700 group-hover:text-orange-400" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderResult = () => (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 animate-fade-in bg-gradient-to-b from-[#2e1d15] via-[#1c100b] to-[#0a0503]">
      <div className="w-full max-w-md bg-[#1a1008]/90 backdrop-blur-md p-8 rounded-2xl border border-orange-500/30 shadow-2xl relative overflow-hidden">
        
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

        {resultType === 'reconnection' ? (
          <>
            <div className="flex justify-center mb-6">
               <div className="bg-red-900/20 p-4 rounded-full border border-red-500/30">
                 <HeartCrack className="w-12 h-12 text-red-500" />
               </div>
            </div>
            <h2 className="text-xl font-bold text-white mb-2 text-center">
              Resultado: Conexão interrompida, mas não encerrada
            </h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mb-6 rounded-full"></div>
            
            <div className="space-y-4 text-gray-300 mb-8 text-sm leading-relaxed">
              <p>Existe um vínculo emocional que não foi fechado corretamente.</p>
              <p>Quando isso acontece, o afastamento é físico — não energético.</p>
              <p className="font-semibold text-white bg-[#2e1d15] p-3 rounded border-l-2 border-red-500">
                Rituais de reconexão amorosa têm alta taxa de sucesso nesse tipo de ligação.
              </p>
            </div>

            <button
              onClick={onComplete}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-extrabold py-5 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 transition-all animate-pulse uppercase tracking-wide border border-green-400/30"
            >
              👉 Ver como reativar essa conexão
            </button>
          </>
        ) : (
          <>
            <div className="flex justify-center mb-6">
               <div className="bg-orange-900/20 p-4 rounded-full border border-orange-500/30">
                 <Zap className="w-12 h-12 text-orange-400" />
               </div>
            </div>
            <h2 className="text-xl font-bold text-white mb-2 text-center">
              Resultado: Energia amorosa em fase de chamada
            </h2>
            <div className="w-16 h-1 bg-orange-600 mx-auto mb-6 rounded-full"></div>
            
            <div className="space-y-4 text-gray-300 mb-8 text-sm leading-relaxed">
              <p>Você não está bloqueada — está desalinhada.</p>
              <p>Isso acontece quando a pessoa destinada ainda não cruzou seu caminho.</p>
              <p className="font-semibold text-white bg-[#2e1d15] p-3 rounded border-l-2 border-orange-500">
                Rituais de chamada amorosa aceleram esse encontro de forma natural.
              </p>
            </div>

            <button
              onClick={onComplete}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-extrabold py-5 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 transition-all animate-pulse uppercase tracking-wide border border-green-400/30"
            >
              👉 Ver como ativar essa chamada
            </button>
          </>
        )}
      </div>
    </div>
  );

  switch (step) {
    case 'intro':
      return renderIntro();
    case 'q1':
      return renderQuestion(
        "Hoje, o que mais ocupa seu coração?",
        [
          { text: "Uma pessoa do passado que se afastou", action: () => handleQ1Answer('reconnection') },
          { text: "Alguém que ainda está presente, mas distante", action: () => handleQ1Answer('reconnection') },
          { text: "Ainda não apareceu ninguém certo", action: () => handleQ1Answer('attraction') },
          { text: "Não sei explicar, só sinto um vazio", action: () => handleQ1Answer('attraction') }
        ]
      );
    case 'q2':
      return renderQuestion(
        "Com que frequência você pensa nisso?",
        [
          { text: "Todos os dias", action: handleNext },
          { text: "Algumas vezes por semana", action: handleNext },
          { text: "Tento evitar", action: handleNext }
        ]
      );
    case 'q3':
      return renderQuestion(
        "O que mais te frustra hoje?",
        [
          { text: "Silêncio", action: handleNext },
          { text: "Distância emocional", action: handleNext },
          { text: "Repetir os mesmos padrões", action: handleNext },
          { text: "Nunca encontrar alguém compatível", action: handleNext }
        ]
      );
    case 'result':
      return renderResult();
    default:
      return null;
  }
};

export default PreQuiz;