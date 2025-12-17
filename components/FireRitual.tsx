
import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Lock, 
  ShieldCheck, 
  ArrowRight, 
  Star, 
  Heart, 
  MessageCircle, 
  ThumbsUp, 
  Flame, 
  Award, 
  CheckCircle2
} from 'lucide-react';

// --- Popup de Prova Social Minimalista ---
const SocialProofPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState({ name: '', city: '' });

  const personae = [
    { name: "Mariana S.", city: "São Paulo" },
    { name: "Ana P.", city: "Rio" },
    { name: "Carla M.", city: "BH" },
    { name: "Fernanda L.", city: "Curitiba" },
    { name: "Bruna C.", city: "Salvador" },
    { name: "Mariana R.", city: "Porto Alegre" },
    { name: "Larissa T.", city: "Recife" },
    { name: "Patricia B.", city: "Brasília" },
    { name: "Camila F.", city: "Campinas" },
    { name: "Jessica O.", city: "Manaus" }
  ];

  useEffect(() => {
    const trigger = () => {
      const random = personae[Math.floor(Math.random() * personae.length)];
      setData(random);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
        const nextTime = Math.floor(Math.random() * (15000 - 8000 + 1) + 8000);
        setTimeout(trigger, nextTime);
      }, 3500);
    };

    const initialTimeout = setTimeout(trigger, 5000);
    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <div 
      className={`fixed top-3 right-3 z-[10000] transition-all duration-700 ease-in-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-xl shadow-xl p-2 flex items-center gap-2 max-w-[180px]">
        <div className="bg-red-500/20 p-1 rounded-full shrink-0">
          <Flame className="w-2.5 h-2.5 text-red-400 fill-red-400/20" />
        </div>
        <div className="overflow-hidden">
          <p className="text-[9px] font-bold text-white leading-tight truncate">
            {data.name} <span className="text-slate-400 font-normal">de {data.city}</span>
          </p>
          <p className="text-[8px] text-slate-400 leading-tight mt-0.5 whitespace-nowrap">
            acabou de receber o ritual
          </p>
        </div>
      </div>
    </div>
  );
};

interface FireRitualProps {
  onStartBinding: () => void;
}

const FireRitual: React.FC<FireRitualProps> = ({ onStartBinding }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
    setCurrentDate(date.toLocaleDateString('pt-BR', options));
    window.scrollTo(0, 0);
  }, []);

  const testimonials = [
    {
      name: "Mariana Costa",
      text: "Eu não acreditava mais. Ele tinha me bloqueado e estava com outra. Na quarta noite do ritual, ele me mandou um e-mail dizendo que não conseguia dormir pensando em mim. Hoje ele não sai do meu pé!",
      time: "há 2 dias",
      likes: 124,
      image: "https://i.imgur.com/Sza1ZfT.png"
    },
    {
      name: "Juliana Almeida",
      text: "A Sacerdotisa Azara é um anjo. O André voltou rastejando como se nunca tivesse ido embora. O orgulho dele simplesmente sumiu.",
      time: "há 1 semana",
      likes: 89,
      image: "https://i.imgur.com/GJZpDHa.png"
    },
    {
      name: "Fernanda Lima",
      text: "Gente, ele apareceu na minha porta com flores e chorando. Eu nunca vi um homem tão arrependido. O fogo realmente limpa tudo.",
      time: "há 3 dias",
      likes: 215,
      image: "https://i.imgur.com/oOLHMGS.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1e293b] font-poppins relative selection:bg-red-100">
      <SocialProofPopup />
      
      <div className="max-w-2xl mx-auto px-6 py-12">
        
        {/* Header Section */}
        <header className="text-center mb-12 space-y-6">
          <div className="bg-red-700 text-white p-4 rounded-xl shadow-lg border-2 border-red-500 w-full text-center flex justify-center items-center">
            <p className="text-[11px] md:text-xs font-bold leading-relaxed uppercase tracking-tight max-w-xl">
              ATENÇÃO : O fim de ano é um período raro de transição energética. Durante essa virada, e no dia <span className="text-yellow-300 font-black">{currentDate}</span> o Ritual da Chama de 5 Noites atua com intensidade maior, acelerando o retorno e a obsessão
            </p>
          </div>

          <div className="flex justify-center">
            <Flame className="w-12 h-12 text-red-600 fill-red-50 animate-pulse" />
          </div>

          <h1 className="text-3xl md:text-5xl font-black leading-tight text-red-800 uppercase tracking-tight">
            SUSSURRE O NOME DELE NESTA CHAMA SAGRADA… E EM ATÉ 5 NOITES ELE VAI FICAR TOTALMENTE OBCECADO POR VOCÊ
          </h1>
        </header>

        {/* Hero Image */}
        <div className="mb-12 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
          <img src="https://i.imgur.com/rJhARQH.jpeg" alt="Chama Sagrada" className="w-full" />
        </div>

        {/* Long Copy Content */}
        <article className="space-y-8 text-lg md:text-xl leading-relaxed text-slate-700 mb-16">
          <p className="font-bold text-slate-900">
            Ele vai se revirar na cama à noite, incapaz de tirar você da cabeça. E, na quinta noite, vai rastejar de volta para você como se a vida dele dependesse disso.
          </p>
          <p>Tudo o que fiz foi entregar o nome dele a uma sacerdotisa que guarda uma chama antiga que queima há mais de 1.500 anos.</p>
          <p className="bg-red-50 text-red-800 p-6 rounded-2xl font-bold border-l-4 border-red-600">
            E em menos de 48 horas, ele estava explodindo meu celular. Implorando. Chorando. Rastejando de volta.
          </p>
        </article>

        {/* Timeline Results */}
        <section className="mb-16 space-y-8">
          <h2 className="text-2xl font-black uppercase text-center text-slate-900">O Cronograma da Obsessão</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <p className="font-black text-red-600 uppercase text-xs mb-1">Noite 1: A Inquietude</p>
              <p className="text-slate-700">O nome dele entra na chama. Ele perde o sono. Sua imagem começa a piscar na mente dele como um flash incontrolável.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <p className="font-black text-red-600 uppercase text-xs mb-1">Noite 3: O Pânico da Perda</p>
              <p className="text-slate-700">A ideia de você com outro homem torna-se insuportável. Ele vai te mandar uma mensagem "do nada" apenas para sentir sua energia.</p>
            </div>
            <div className="bg-red-900 text-white p-6 rounded-2xl shadow-xl">
              <p className="font-black text-yellow-400 uppercase text-xs mb-1">Noite 5: A Rendição</p>
              <p className="text-lg font-bold italic">Ele quebra. O orgulho vira cinzas. Ele aparece na sua porta ou te liga jurando que nunca mais vai te deixar.</p>
            </div>
          </div>
        </section>

        {/* Persia Secret Section */}
        <section className="bg-slate-950 text-white p-10 rounded-[3rem] mb-16 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 blur-3xl"></div>
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-center">O Segredo dos Templos de Fogo</h2>
          <img src="https://i.imgur.com/RfnM0Aw.jpeg" alt="Ancient Temple" className="w-full rounded-2xl mb-6 opacity-80" />
          <p className="text-slate-300 leading-relaxed italic">
            "Este ritual não é manifestação moderna. É magia arcaica das sacerdotisas da Pérsia. Elas sabiam que o fogo não convence o homem — ele o consome até que a única saída seja você."
          </p>
        </section>

        {/* Testimonials */}
        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-black text-center uppercase">Quem já usou a chama</h2>
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-50 flex gap-4 items-start">
              <img src={t.image} className="w-12 h-12 rounded-full object-cover border" alt={t.name} />
              <div>
                <p className="font-bold text-slate-900">{t.name} <CheckCircle2 className="w-3 h-3 inline text-blue-500" /></p>
                <p className="text-slate-600 text-sm italic mt-1">"{t.text}"</p>
                <div className="flex gap-4 mt-3 text-[10px] font-black text-slate-400 uppercase">
                  <span className="text-red-500 flex items-center gap-1"><Heart className="w-3 h-3 fill-red-500" /> {t.likes}</span>
                  <span>{t.time}</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Pricing & CTA */}
        <section className="bg-white border-4 border-red-600 p-8 md:p-12 rounded-[3.5rem] text-center shadow-2xl mb-12">
          <h2 className="text-2xl font-black uppercase mb-4">Inicie o Ritual Hoje</h2>
          <div className="space-y-1 mb-8">
            <p className="text-slate-400 line-through">De R$ 497,00</p>
            <p className="text-4xl font-black text-green-600">R$ 37,00</p>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Preço sagrado de fim de ano</p>
          </div>
          
          <button
            onClick={onStartBinding}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-black text-lg py-6 rounded-2xl shadow-xl transition-all transform hover:scale-105 active:scale-95 animate-pulse flex items-center justify-center gap-3 uppercase"
          >
            Acender a Chama Agora
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <div className="flex justify-center gap-6 mt-6 text-[10px] text-slate-400 font-bold uppercase">
            <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> Seguro</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Sigiloso</span>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-slate-100">
          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">© 2024 Sacerdotisa Azara - O Ritual da Chama Sagrada</p>
        </footer>
      </div>
    </div>
  );
};

export default FireRitual;
