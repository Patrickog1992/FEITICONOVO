
import React, { useState, useEffect } from 'react';
import { Flame, Sparkles, ArrowRight, Loader2, Lock, CheckCircle2 } from 'lucide-react';
import { CHECKOUT_URL } from '../constants';

interface BindingAltarProps {
  onComplete?: () => void;
}

const BindingAltar: React.FC<BindingAltarProps> = () => {
  const [step, setStep] = useState<'input' | 'analyzing' | 'result'>('input');
  const [userName, setUserName] = useState('');
  const [partnerName, setPartnerName] = useState('');
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('');

  const messages = [
    "Invocando a presença da Sacerdotisa Azara...",
    "Conectando aos fios do destino...",
    "Localizando a frequência vibracional de " + (partnerName || "seu alvo") + "...",
    "Analisando resistência do orgulho dele...",
    "Detectando vulnerabilidade espiritual...",
    "Alinhando a chama sagrada com sua intenção...",
    "Selando os nomes no Altar de Vinculação..."
  ];

  useEffect(() => {
    if (step === 'analyzing') {
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += Math.random() * 15;
        if (currentProgress >= 100) {
          currentProgress = 100;
          clearInterval(interval);
          setTimeout(() => setStep('result'), 800);
        }
        setProgress(currentProgress);
        
        // Update status text based on progress
        const msgIndex = Math.floor((currentProgress / 100) * messages.length);
        if (messages[msgIndex]) setStatusText(messages[msgIndex]);
      }, 600);
      return () => clearInterval(interval);
    }
  }, [step, partnerName]);

  const handleBind = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !partnerName.trim()) return;
    setStep('analyzing');
  };

  const handleFinalize = () => {
    window.location.href = CHECKOUT_URL;
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center p-6 relative overflow-hidden font-poppins selection:bg-red-200">
      {/* Background Ambience matches FireRitual red glow */}
      <div className="absolute inset-0 bg-red-600/5 blur-[120px] -z-10 rounded-full scale-110"></div>
      
      <div className="w-full max-w-lg bg-white border border-slate-100 rounded-[3rem] p-8 md:p-12 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.05)] z-10 relative">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white p-4 rounded-full border border-slate-100 shadow-xl">
          <Flame className={`w-12 h-12 text-red-600 fill-red-50 transition-all duration-1000 ${step === 'analyzing' ? 'animate-pulse scale-110' : ''}`} />
        </div>

        {step === 'input' && (
          <div className="animate-fade-in space-y-8 pt-4">
            <div className="text-center">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-2">Altar de Vinculação</h2>
              <p className="text-slate-500 text-sm">Digite os nomes abaixo para alinhar as energias antes do ritual final.</p>
            </div>

            <form onSubmit={handleBind} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-red-600 uppercase tracking-widest ml-1">Seu Nome</label>
                <input
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Seu nome completo"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-900 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all placeholder-slate-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-red-600 uppercase tracking-widest ml-1">Nome Dele</label>
                <input
                  required
                  value={partnerName}
                  onChange={(e) => setPartnerName(e.target.value)}
                  placeholder="O nome dele"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-900 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all placeholder-slate-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-6 rounded-2xl shadow-[0_15px_30px_rgba(220,38,38,0.2)] transition-all transform hover:scale-[1.02] active:scale-95 uppercase flex items-center justify-center gap-3 group"
              >
                Vincular Almas na Chama
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>
            </form>
          </div>
        )}

        {step === 'analyzing' && (
          <div className="animate-fade-in text-center py-10 space-y-8">
            <div className="relative flex justify-center">
              <Loader2 className="w-20 h-20 text-red-600 animate-spin opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-slate-900 font-black text-xl">{Math.round(progress)}%</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-slate-800 font-bold text-lg animate-pulse h-8">{statusText}</p>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-red-600 h-full transition-all duration-300 shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            
            <p className="text-slate-400 text-xs italic">Não feche esta página. A conexão está sendo selada.</p>
          </div>
        )}

        {step === 'result' && (
          <div className="animate-fade-in space-y-8 pt-4">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="bg-green-600/10 p-4 rounded-full border border-green-600/20">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
              </div>
              <h2 className="text-2xl font-black text-slate-900 uppercase">Vínculo Detectado!</h2>
              <p className="text-slate-600 leading-relaxed">
                A energia de <span className="text-slate-900 font-bold">{partnerName}</span> foi localizada e está pronta para ser inflamada pela chama sagrada.
              </p>
              <div className="bg-green-600/5 border border-green-600/10 p-4 rounded-2xl">
                <p className="text-green-600 font-bold text-sm uppercase tracking-widest">Compatibilidade de Obsessão: 98%</p>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleFinalize}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-6 rounded-2xl shadow-[0_15px_30px_rgba(22,163,74,0.2)] transition-all transform hover:scale-[1.02] active:scale-95 uppercase flex items-center justify-center gap-3 group animate-pulse"
              >
                CONCLUIR RITUAL
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center justify-center gap-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> 100% Privado</span>
                <span className="flex items-center gap-1"><Sparkles className="w-3 h-3" /> Seguro</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BindingAltar;
