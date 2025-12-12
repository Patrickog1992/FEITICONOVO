import React, { useState, useEffect } from 'react';
import { ArrowRight, AlertTriangle, HeartCrack, Sparkles, Lock, Zap } from 'lucide-react';

interface UserInputProps {
  onComplete: (name: string, age: string) => void;
}

const UserInput: React.FC<UserInputProps> = ({ onComplete }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');

  // Ensure scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !age.trim()) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    onComplete(name.trim(), age.trim());
  };

  return (
    // Padding adjusted, removed any centering
    <div className="w-full max-w-md mx-auto p-4 min-h-screen flex flex-col pt-10 pb-20 animate-fade-in">
      
      {/* Question Counter */}
      <div className="flex justify-center mb-6">
        <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">
          Resposta 6 de 6
        </p>
      </div>

      {/* Crisis Analysis Section */}
      <div className="mb-8">
        <p className="text-purple-400 font-medium mb-4 text-center">
          Com base nas suas respostas, estou vendo algo proibido…
        </p>

        <div className="bg-red-900/20 border-2 border-red-600 rounded-xl p-6 mb-6 text-center shadow-[0_0_20px_rgba(220,38,38,0.3)]">
          <h2 className="text-xl font-bold text-red-500 uppercase tracking-wider mb-2">
            🚫 CRISE DE AMOR CÓSMICO DETECTADA 🚫
          </h2>
        </div>

        <div className="bg-gray-800/80 rounded-xl p-6 border border-gray-700 shadow-xl mb-6 backdrop-blur-sm">
          <p className="text-gray-300 mb-4 font-semibold border-b border-gray-700 pb-2">Suas respostas revelam:</p>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <HeartCrack className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <span className="text-gray-200 text-sm">Energia de amor obsessiva (níveis perigosos)</span>
            </li>
            <li className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
              <span className="text-gray-200 text-sm">Conexão profunda de alma que ele está lutando contra (mecanismo de proteção dele)</span>
            </li>
            <li className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <span className="text-gray-200 text-sm">“Poderes de atração” adormecidos esperando para serem ativados</span>
            </li>
            <li className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <span className="text-gray-200 text-sm">Alta compatibilidade com métodos antigos de Vênus</span>
            </li>
            <li className="flex items-start gap-3 bg-red-900/30 p-2.5 rounded border border-red-900/50">
              <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <span className="text-red-100 text-sm font-bold">CRÍTICO: Intervenção necessária antes de colapso emocional</span>
            </li>
          </ul>
        </div>

        <div className="space-y-3 text-gray-300 text-sm mb-6 leading-relaxed">
          <p>Escute… o que você está sentindo não é um coração partido normal.</p>
          <p className="font-semibold text-white">Isso é algo mais profundo e mais poderoso.</p>
        </div>
      </div>

      {/* Input Section */}
      <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm">
        <p className="text-gray-300 mb-6">
          Eu já ajudei milhares de mulheres exatamente na sua situação usando métodos que a maioria das pessoas nem sabe que existem:
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Seu primeiro nome</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 outline-none transition-all placeholder-gray-600"
              placeholder="Digite seu nome..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Sua idade</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 outline-none transition-all placeholder-gray-600"
              placeholder="Digite sua idade..."
            />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <div className="pt-2 space-y-4">
            <p className="text-red-400 text-xs italic font-semibold bg-red-950/30 p-2 rounded">
              🚫 Sua crise emocional te qualifica para uma consulta emergencial com uma especialista em métodos proibidos…
            </p>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-purple-800 hover:from-red-500 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl shadow-[0_0_15px_rgba(220,38,38,0.5)] transform transition hover:scale-[1.02] flex items-center justify-center gap-2 uppercase tracking-wide animate-pulse"
            >
              Acessar a ajuda emergencial
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserInput;