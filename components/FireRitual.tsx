
import React, { useState, useEffect } from 'react';
import { 
  Flame, 
  ChevronRight, 
  Lock, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  Heart, 
  Zap,
  ChevronDown,
  AlertCircle
} from 'lucide-react';

interface FireRitualProps {
  onStartBinding: () => void;
}

const FireRitual: React.FC<FireRitualProps> = ({ onStartBinding }) => {
  const [view, setView] = useState<'quiz' | 'vsl'>('quiz');
  const [currentStep, setCurrentStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const questions = [
    {
      title: "Quais desses sentimentos DOLOROSOS você está sentindo agora?",
      options: [
        "Ele me bloqueou em tudo e parece que me esqueceu",
        "Ele está com outra pessoa e isso me corrói por dentro",
        "O silêncio dele é a pior tortura que já vivi",
        "Sinto que ele ainda me ama, mas o orgulho é maior",
        "Estou cansada de correr atrás e ser humilhada"
      ]
    },
    {
      title: "O que você sente que impede ele de voltar voluntariamente?",
      options: [
        "Influência de outras pessoas ou família",
        "Orgulho ferido e teimosia extrema",
        "Medo de se entregar novamente",
        "Ele acha que a vida de solteiro é melhor",
        "A energia entre vocês está 'pesada' ou 'trancada'"
      ]
    },
    {
      title: "Até onde você iria para ter esse homem rastejando aos seus pés em 5 noites?",
      options: [
        "Eu faria QUALQUER COISA",
        "Estou pronta para usar métodos proibidos",
        "Não aguento mais um dia sem ele",
        "Quero que ele sinta a mesma dor que eu sinto"
      ]
    }
  ];

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setView('vsl');
      window.scrollTo(0, 0);
    }
  };

  const faqs = [
    { q: "E se ele estiver com outra mulher?", a: "Ótimo. Ela é apenas um espaço vazio. A chama não compete com ela — ela a apaga. A conexão dele com ela esfria. O toque dela parece errado. A voz dela irrita. Ele olha para ela e sente apenas vazio. E então corre de volta para você." },
    { q: "E se ele me bloqueou em tudo?", a: "Melhor ainda. O bloqueio não o protege. Ele o prende dentro da própria cabeça com o fogo. Ele ficará tão obcecado que dará um jeito de falar com você — uma conta nova, um e-mail, aparecendo pessoalmente." },
    { q: "Isso é permanente?", a: "Sim. Por isso eu avisei. Não é temporário. Uma vez que o nome dele entra na chama, o vínculo é selado. Não faça isso se não tiver certeza de que quer ele ligado a você." }
  ];

  if (view === 'quiz') {
    return (
      <div className="min-h-screen bg-[#0a0503] text-gray-100 flex items-center justify-center p-6 font-poppins relative overflow-hidden">
        {/* Animated Background Ambience */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-red-900 rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-orange-900 rounded-full blur-[150px] animate-pulse delay-700"></div>
        </div>

        <div className="w-full max-w-md bg-[#16110f]/95 backdrop-blur-2xl p-8 md:p-12 rounded-[3rem] border border-red-900/40 shadow-[0_0_50px_rgba(220,38,38,0.1)] relative z-10">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-red-600 blur-xl opacity-20 animate-pulse"></div>
              <Flame className="w-14 h-14 text-red-600 relative z-10 fill-red-600/10" />
            </div>
          </div>

          <div className="text-center mb-10">
             <h1 className="text-red-600 text-sm font-black uppercase tracking-[0.4em] mb-3 drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]">
               Ritual das 5 Noites
             </h1>
             <h2 className="text-2xl md:text-3xl font-black text-white leading-tight uppercase tracking-tighter">
               {questions[currentStep].title}
             </h2>
          </div>

          <div className="space-y-4">
            {questions[currentStep].options.map((opt, i) => (
              <button
                key={i}
                onClick={handleNext}
                className="w-full text-left p-6 bg-[#1f1714] hover:bg-red-950/40 border border-white/5 hover:border-red-600/50 rounded-2xl transition-all duration-300 group active:scale-[0.98] flex justify-between items-center"
              >
                <span className="text-sm font-bold text-gray-400 group-hover:text-white leading-snug transition-colors">{opt}</span>
                <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-red-600 shrink-0 transition-all group-hover:translate-x-1" />
              </button>
            ))}
          </div>

          <div className="mt-12 flex justify-center items-center gap-3">
            {questions.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-700 ${i === currentStep ? 'w-10 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]' : 'w-2 bg-white/10'}`}
              ></div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-[10px] text-gray-500 font-bold uppercase tracking-widest opacity-50">
            <Lock className="w-3 h-3" />
            Conexão Espiritual Segura
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1e293b] font-poppins selection:bg-red-200 overflow-x-hidden">
      
      {/* Immersive Header */}
      <div className="bg-[#0a0503] py-16 md:py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <div className="flex justify-center mb-8">
            <Flame className="w-16 h-16 text-red-600 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-none uppercase tracking-tighter mb-6">
            SUSSURRE O NOME DELE NESTA <span className="text-red-600">CHAMA SAGRADA</span>…
          </h1>
          <p className="text-red-500 font-bold text-lg md:text-xl uppercase tracking-widest animate-fade-in">
            E em até 5 noites ele vai ficar totalmente obcecado por você
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#fafafa] to-transparent"></div>
      </div>

      <div className="max-w-2xl mx-auto px-6 -mt-10 relative z-20 pb-24">
        
        {/* Main Sales Image */}
        <div className="mb-12 rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(220,38,38,0.2)] border-[10px] border-white">
          <img src="https://i.imgur.com/rJhARQH.jpeg" alt="Chama" className="w-full" />
        </div>

        {/* Copy Section */}
        <div className="space-y-8 text-xl leading-relaxed text-slate-700">
          <p className="font-black text-slate-900 text-2xl md:text-3xl leading-tight">
            Ele vai se revirar na cama à noite, incapaz de tirar você da cabeça. E, na quinta noite, vai rastejar de volta como se a vida dele dependesse disso.
          </p>
          
          <div className="bg-red-50 p-8 rounded-[2rem] border-l-8 border-red-600 italic font-medium text-red-900">
            "Eu não imploro para homens. Eu não corro atrás deles. Eu não fico chorando. Eu faço o Ritual do Fogo."
          </div>

          <p>Tudo o que fiz foi entregar o nome dele a uma sacerdotisa que guarda uma chama antiga que queima há mais de 1.500 anos.</p>
          
          <p className="bg-slate-900 text-white p-8 rounded-[2.5rem] font-bold text-center border-b-4 border-red-600">
            E em menos de 48 horas, ele estava explodindo meu celular. Implorando. Chorando. Rastejando.
          </p>
        </div>

        {/* Results Section */}
        <div className="my-16 space-y-12">
           <div className="flex gap-6 items-start">
              <div className="bg-red-600 text-white w-14 h-14 rounded-full flex items-center justify-center font-black shrink-0 text-xl shadow-lg">01</div>
              <div>
                <p className="font-black uppercase text-red-600 tracking-widest text-sm mb-2">Primeira Noite</p>
                <p className="text-xl text-slate-900 font-bold">Uma mensagem do nada: "Tive o sonho mais estranho com você."</p>
              </div>
           </div>

           <div className="flex gap-6 items-start">
              <div className="bg-red-600 text-white w-14 h-14 rounded-full flex items-center justify-center font-black shrink-0 text-xl shadow-lg">03</div>
              <div>
                <p className="font-black uppercase text-red-600 tracking-widest text-sm mb-2">Terceira Noite</p>
                <p className="text-xl text-slate-900 font-bold">Ligações perdidas de madrugada. O orgulho dele começa a queimar.</p>
              </div>
           </div>

           <div className="flex gap-6 items-start">
              <div className="bg-red-600 text-white w-14 h-14 rounded-full flex items-center justify-center font-black shrink-0 text-xl shadow-lg">05</div>
              <div>
                <p className="font-black uppercase text-red-600 tracking-widest text-sm mb-2">Quinta Noite</p>
                <p className="text-xl text-slate-900 font-bold">Ele está na sua porta. Olhos vermelhos. Voz tremendo. Jurando que nunca mais te deixa.</p>
              </div>
           </div>
        </div>

        {/* Pricing Card */}
        <div className="bg-white border-[4px] border-red-600 p-10 md:p-14 rounded-[3.5rem] text-center shadow-2xl relative overflow-hidden my-20">
          <div className="absolute top-0 right-0 p-4">
             <ShieldCheck className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-8">Libere o Ritual Agora</h2>
          <div className="flex flex-col items-center gap-2 mb-10">
            <span className="text-slate-400 line-through text-2xl font-bold">R$ 497</span>
            <span className="text-6xl font-black text-red-600 tracking-tighter">R$ 37</span>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mt-2">Pagamento Único</span>
          </div>

          <button
            onClick={onStartBinding}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-xl py-8 rounded-2xl shadow-[0_20px_40px_rgba(220,38,38,0.3)] transition-all transform hover:scale-[1.02] active:scale-95 mb-10 uppercase flex items-center justify-center gap-3 animate-pulse"
          >
            QUERO ELE RASTEJANDO AGORA
            <ArrowRight className="w-6 h-6" />
          </button>
          
          <div className="flex justify-center gap-6 opacity-40 grayscale">
            <Lock className="w-5 h-5" />
            <ShieldCheck className="w-5 h-5" />
            <Zap className="w-5 h-5" />
          </div>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          <h3 className="text-2xl font-black text-center mb-8 uppercase tracking-tight">Perguntas Frequentes</h3>
          {faqs.map((f, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-7 text-left transition-colors"
              >
                <span className="font-bold text-slate-900 text-lg leading-snug">{f.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-red-600' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-7 pt-0 text-slate-600 text-lg leading-relaxed border-t border-slate-50 mt-2">
                  {f.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center opacity-30 text-[10px] font-black uppercase tracking-[0.3em]">
          © Sacerdotisa Azara • Ritual do Fogo Sagrado
        </div>
      </div>
    </div>
  );
};

export default FireRitual;
