import React from 'react';
import { AlertTriangle, Lock, Sparkles, Zap, HeartCrack } from 'lucide-react';

interface CrisisResultProps {
  onContinue: () => void;
}

const CrisisResult: React.FC<CrisisResultProps> = ({ onContinue }) => {
  return (
    <div className="w-full max-w-md mx-auto p-4 min-h-screen flex flex-col justify-center py-10 animate-fade-in">
      <div className="text-center mb-6">
        <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">Análise Completa</p>
        <h2 className="text-2xl font-bold text-red-500 border-2 border-red-500 inline-block px-4 py-2 rounded">
          🚫 CRISE DE AMOR CÓSMICO DETECTADA 🚫
        </h2>
      </div>

      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-2xl mb-6">
        <p className="text-gray-300 mb-4 font-semibold">Suas respostas revelam:</p>
        
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <HeartCrack className="w-6 h-6 text-red-500 shrink-0" />
            <span className="text-gray-200 text-sm">Energia de amor obsessiva (níveis perigosos)</span>
          </li>
          <li className="flex items-start gap-3">
            <Sparkles className="w-6 h-6 text-yellow-500 shrink-0" />
            <span className="text-gray-200 text-sm">Conexão profunda de alma que ele está lutando contra (mecanismo de proteção dele)</span>
          </li>
          <li className="flex items-start gap-3">
            <Lock className="w-6 h-6 text-purple-400 shrink-0" />
            <span className="text-gray-200 text-sm">“Poderes de atração” adormecidos esperando para serem ativados</span>
          </li>
          <li className="flex items-start gap-3">
            <Zap className="w-6 h-6 text-blue-400 shrink-0" />
            <span className="text-gray-200 text-sm">Alta compatibilidade com métodos antigos de Vênus</span>
          </li>
          <li className="flex items-start gap-3 bg-red-900/20 p-2 rounded">
            <AlertTriangle className="w-6 h-6 text-red-500 shrink-0" />
            <span className="text-red-200 text-sm font-bold">CRÍTICO: Intervenção necessária antes de colapso emocional</span>
          </li>
        </ul>
      </div>

      <div className="space-y-4 text-gray-300 text-sm mb-8 text-center">
        <p>Escute… o que você está sentindo não é um coração partido normal.</p>
        <p className="font-semibold text-white">Isso é algo mais profundo e mais poderoso.</p>
      </div>

      <button
        onClick={onContinue}
        className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(220,38,38,0.5)] animate-pulse"
      >
        (Acessar Ajuda Emergencial)
      </button>
    </div>
  );
};

export default CrisisResult;