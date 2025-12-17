
import React, { useState } from 'react';
import { 
  Flame, 
  ChevronRight, 
  ArrowRight, 
  CheckCircle, 
  ChevronDown, 
  Star, 
  Heart, 
  ThumbsUp, 
  Lock, 
  ShieldCheck,
  Zap,
  ShieldAlert
} from 'lucide-react';

const Fogo: React.FC = () => {
  const [view, setView] = useState<'quiz' | 'content'>('quiz');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const quizOptions = [
    "Ele me bloqueou em tudo e parece que me esqueceu",
    "Ele está com outra pessoa e isso me corrói por dentro",
    "O silêncio dele é a pior tortura que já vivi",
    "Sinto que ele ainda me ama, mas o orgulho é maior",
    "Estou cansada de correr atrás e ser humilhada"
  ];

  const testimonials = [
    { name: "Mariana L.", text: "Gente, ele voltou rastejando na quarta noite. Eu não acreditava mais. Agora ele não sai do meu pé!", time: "há 2 horas", likes: 243, image: "https://randomuser.me/api/portraits/women/32.jpg" },
    { name: "Beatriz S.", text: "A Sacerdotisa Azara é incrível. O orgulho dele simplesmente derreteu com o fogo.", time: "há 5 horas", likes: 187, image: "https://randomuser.me/api/portraits/women/45.jpg" },
    { name: "Carla P.", text: "Ele me mandou mensagem pedindo perdão e disse que não parava de sonhar comigo. Funciona mesmo.", time: "há 1 dia", likes: 512, image: "https://randomuser.me/api/portraits/women/67.jpg" }
  ];

  const faqs = [
    { q: "E se ele estiver com outra mulher?", a: "Ótimo. Ela é apenas um espaço vazio. A chama não compete com ela — ela a apaga. A conexão dele com ela esfria. O toque dela parece errado. A voz dela irrita. Ele olha para ela e sente apenas vazio. E então corre de volta para você." },
    { q: "E se ele me bloqueou em tudo?", a: "Melhor ainda. O bloqueio não o protege. Ele o prende dentro da própria cabeça com o fogo. Ele ficará tão obcecado que dará um jeito de falar com você — uma conta nova, um e-mail, aparecendo pessoalmente." },
    { q: "Isso é permanente?", a: "Sim. Por isso eu avisei. Não é temporário. Uma vez que o nome dele entra na chama, o vínculo é selado. Não faça isso se não tiver certeza de que quer ele ligado a você." }
  ];

  const handleNext = () => {
    setView('content');
    window.scrollTo(0, 0);
  };

  const handleCTA = () => {
    window.location.href = "https://pay.kirvano.com/5fbfabed-b287-43fb-9640-735dfb2a99f3";
  };

  if (view === 'quiz') {
    return (
      <div className="min-h-screen bg-[#0a0503] text-gray-100 flex items-center justify-center p-6 font-poppins relative">
        <div className="absolute inset-0 bg-red-950/10 pointer-events-none"></div>
        <div className="w-full max-w-md bg-[#16110f] border border-red-900/40 p-8 md:p-12 rounded-[3rem] shadow-2xl relative z-10">
          <div className="flex justify-center mb-8">
            <Flame className="w-14 h-14 text-red-600 animate-pulse fill-red-600/10" />
          </div>
          <h2 className="text-red-500 text-xs font-black uppercase tracking-[0.4em] mb-4 text-center">Ritual das 5 Noites</h2>
          <h1 className="text-2xl md:text-3xl font-black text-white text-center mb-10 leading-tight uppercase tracking-tighter">
            Quais desses sentimentos DOLOROSOS você está sentindo agora?
          </h1>
          <div className="space-y-4">
            {quizOptions.map((opt, i) => (
              <button
                key={i}
                onClick={handleNext}
                className="w-full text-left p-6 bg-[#1f1714] hover:bg-red-950/30 border border-white/5 hover:border-red-600/50 rounded-2xl transition-all group flex justify-between items-center"
              >
                <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors leading-snug">{opt}</span>
                <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-red-600 shrink-0 transition-transform group-hover:translate-x-1" />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1e293b] font-poppins selection:bg-red-200">
      <div className="max-w-2xl mx-auto px-6 py-12 md:py-24">
        
        {/* Hero Section */}
        <header className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <Flame className="w-16 h-16 text-red-600 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#0a0503] leading-[0.9] uppercase tracking-tighter mb-8">
            Sussurre o Nome Dele Nesta <span className="text-red-600">Chama Sagrada…</span> E Em Até 5 Noites Ele Vai Queimar de Obsessão por Você
          </h1>
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white mb-12">
            <img src="https://i.imgur.com/rJhARQH.jpeg" alt="Fogo Sagrado" className="w-full" />
          </div>
        </header>

        {/* Intro Text */}
        <section className="space-y-8 text-xl leading-relaxed text-slate-700 mb-20">
          <p className="font-black text-slate-900 text-2xl drop-shadow-sm">
            Ele vai se revirar na cama à noite, incapaz de tirar você da cabeça. E, na quinta noite, vai rastejar de volta para você como se a vida dele dependesse disso.
          </p>
          <p>Porque eu encontrei algo mais antigo. Mais sombrio. Algo contra o qual ele não consegue lutar.</p>
          <p>Tudo o que fiz foi entregar o nome dele a uma sacerdotisa que guarda uma chama antiga que queima há mais de 1.500 anos.</p>
          <p className="bg-red-50 p-8 rounded-3xl border border-red-100 font-bold text-red-900">
            E em menos de 48 horas, ele estava explodindo meu celular. Implorando. Chorando. Rastejando de volta como um homem que perdeu completamente o controle.
          </p>
        </section>

        {/* Timeline results */}
        <section className="space-y-12 mb-20">
          <div className="relative pl-10 border-l-2 border-red-200">
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-red-600 rounded-full"></div>
            <h4 className="font-black text-red-600 uppercase text-xs tracking-widest mb-2">Na manhã seguinte?</h4>
            <p className="text-xl font-bold text-slate-900 leading-tight">“Tive o sonho mais estranho com você. Não consigo parar de pensar em você.”</p>
          </div>
          <div className="relative pl-10 border-l-2 border-red-200">
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-red-600 rounded-full"></div>
            <h4 className="font-black text-red-600 uppercase text-xs tracking-widest mb-2">Na quinta noite?</h4>
            <p className="text-xl font-bold text-slate-900 leading-tight">Ele estava na minha porta. Olhos vermelhos. Voz tremendo. Jurando que nunca mais me deixaria.</p>
          </div>
        </section>

        {/* Offer Section */}
        <section className="bg-white border-[6px] border-red-600 p-10 md:p-14 rounded-[4rem] text-center shadow-[0_50px_100px_-20px_rgba(220,38,38,0.2)] mb-20 relative overflow-hidden">
          <h2 className="text-3xl font-black text-slate-900 uppercase mb-10 leading-tight">Quanto Vale a Obsessão Dele Para Você?</h2>
          <div className="flex flex-col items-center gap-2 my-10">
            <span className="text-green-600 font-black text-8xl drop-shadow-sm leading-none">$27</span>
          </div>

          <button
            onClick={handleCTA}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-2xl py-8 rounded-[2.5rem] shadow-[0_25px_50px_rgba(220,38,38,0.4)] transition-all transform hover:scale-[1.03] active:scale-95 mb-10 uppercase animate-pulse"
          >
            Acenda a Chama Agora
          </button>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-3xl font-black text-center mb-12 text-slate-900 uppercase tracking-tight">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden hover:border-red-100 transition-colors shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left"
                >
                  <span className="font-bold text-slate-900 pr-6 text-xl leading-tight">{f.q}</span>
                  <ChevronDown className={`w-6 h-6 transition-transform duration-500 ${openFaq === i ? 'rotate-180 text-red-600' : 'text-slate-400'}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${openFaq === i ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-8 pt-0 text-slate-600 text-xl leading-relaxed border-t border-slate-50 mt-4">
                    {f.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
      <footer className="bg-[#0a0503] py-24 px-8 text-center border-t border-red-900/10">
         <p className="text-[10px] text-slate-600 font-black uppercase tracking-[0.5em]">
           © 2024 • Sacerdotisa Azara • Ritual do Fogo Sagrado
         </p>
      </footer>
    </div>
  );
};

export default Fogo;
