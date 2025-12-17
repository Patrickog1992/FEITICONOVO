
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
  CheckCircle2,
  Sparkles
} from 'lucide-react';

// --- Componente de Popup de Prova Social Ultra Minimalista ---
const SocialProofPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState({ name: '', city: '' });

  const personae = [
    { name: "Mariana S.", city: "São Paulo" },
    { name: "Ana P.", city: "Rio de Janeiro" },
    { name: "Carla M.", city: "Belo Horizonte" },
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
    const options: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'long'
    };
    setCurrentDate(date.toLocaleDateString('pt-BR', options));
    window.scrollTo(0, 0);
  }, []);

  const testimonials = [
    {
      name: "Mariana Costa",
      text: "Eu não acreditava mais. Ele tinha me bloqueado e estava com outra. Na quarta noite do ritual, ele me mandou um e-mail dizendo que não conseguia dormir pensando em mim. Hoje ele não sai do meu pé! Funciona real!",
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

  const faqs = [
    { q: "E se ele estiver com outra mulher?", a: "Ótimo. Ela é apenas um espaço vazio. A chama não compete com ela — ela apaga. A conexão dele com ela esfria. O toque dela parece errado. A voz dela irrita. Ele olha para ela e sente apenas vazio. E então corre de volta para você." },
    { q: "E se ele me bloqueou em tudo?", a: "Melhor ainda. O bloqueio não o protege. Ele o prende dentro da própria cabeça com o fogo. Ele ficará tão obcecado que dará um jeito de falar com você — uma conta nova, um e-mail, aparecendo pessoalmente. O bloqueio vira a prisão dele, e você é a única saída." },
    { q: "E se já se passaram meses ou anos?", a: "Não importa. O tempo não apaga essa chama. A conexão entre vocês ainda existe como uma brasa enterrada. Esse ritual é o vento que transforma essa brasa em incêndio. Quanto mais tempo passou, mais forte as memórias batem quando voltam." },
    { q: "E se ele jurou que nunca voltaria?", a: "Homens dizem muitas coisas. Palavras grandes. Mas palavras não significam nada quando a alma dele está em chamas. Na quinta noite, ele nem vai lembrar do que jurou. Estará ocupado demais implorando para você aceitá-lo de volta." },
    { q: "E se eu não acreditar nisso?", a: "Você não precisa acreditar. O fogo não liga para crença. Ele queima de qualquer forma. Tudo o que você precisa fazer é entregar o nome dele à Sacerdotisa Azara. Ela cuida do resto." },
    { q: "Isso é permanente?", a: "Sim. Por isso eu avisei. Não é temporário. Uma vez que o nome dele entra na chama, o vínculo é selado. Não faça isso se não tiver certeza de que quer ele ligado a você." }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1e293b] font-poppins selection:bg-red-200 relative overflow-x-hidden">
      
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
          <p className="font-bold text-slate-900 text-2xl">
            Ele vai se revirar na cama à noite, incapaz de tirar você da cabeça. E, na quinta noite, vai rastejar de volta para você como se a vida dele dependesse disso.
          </p>
          <p>
            Mesmo que exista outra pessoa na história… Mesmo que ele esteja distante… Mesmo que ele diga que "não sente mais nada".
          </p>
          <div className="bg-red-900/5 p-6 rounded-2xl border-l-4 border-red-600 my-6 italic text-slate-800">
            "Eu não imploro para homens. Eu não corro atrás deles. E com certeza não fico sentada chorando, me perguntando por que ele precisa de espaço."
          </div>
          <p>
            Tudo o que fiz foi entregar o nome dele a uma sacerdotisa que guarda uma chama antiga que queima há mais de 1.500 anos.
          </p>
          <p className="bg-red-50 text-red-800 p-6 rounded-2xl font-bold border-l-4 border-red-600">
            E em menos de 48 horas, ele estava explodindo meu celular. Implorando. Chorando. Rastejando de volta como um homem que perdeu completamente o controle.
          </p>
        </article>

        {/* Timeline Results */}
        <section className="mb-16 space-y-8">
          <h2 className="text-2xl font-black uppercase text-center text-slate-900 tracking-tighter">O Que Acontece Ao Longo das 5 Noites</h2>
          <div className="space-y-6">
            {[
              { n: 1, t: "A Primeira Faísca", d: "Ele se sente inquieto. Sua imagem começa a piscar na mente dele. Uma saudade inexplicável aperta o peito. Ele começa a se perguntar o que você está fazendo agora." },
              { n: 2, t: "O Calor Aumenta", d: "Ele começa a olhar suas fotos antigas. O arrependimento surge. Ele sente que cometeu um erro enorme ao se afastar e o orgulho começa a derreter." },
              { n: 3, t: "O Fogo se Espalha", d: "Sonhos intensos com você. Ele não consegue focar no trabalho nem em outras mulheres. O toque de outra parece errado. A obsessão toma conta." },
              { n: 4, t: "O Incêndio", d: "Ele está desesperado. Não aguenta mais o silêncio. Ele escreve mensagens e apaga 50 vezes, lutando contra o impulso incontrolável de te ligar." },
              { n: 5, t: "Rendição Total", d: "Ele quebra. O fogo limpou todo o orgulho. Ele liga, manda áudio chorando ou aparece na sua porta implorando por uma chance. Ele é seu novamente." }
            ].map((step) => (
              <div key={step.n} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex gap-5 items-start">
                <div className="w-10 h-10 bg-red-600 text-white font-black rounded-full flex items-center justify-center shrink-0 shadow-lg">
                  {step.n}
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase text-sm mb-1">{step.t}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Jessica Story */}
        <section className="mb-16 space-y-6">
            <h2 className="text-3xl font-black text-slate-900 text-center uppercase">A História que mudou tudo</h2>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 mb-6">
                <img src="https://i.imgur.com/A6UzkcN.jpg" alt="Relato Real" className="w-full" />
            </div>
            <div className="prose prose-slate max-w-none space-y-4 text-lg text-slate-700">
                <p>Meu nome é Jéssica. E eu estava no fundo do poço. O André, o homem que eu amava, tinha me deixado por uma "fase de solteiro". Ele estava saindo com outras, me ignorando e agindo como se eu nunca tivesse existido.</p>
                <p>Eu tentei de tudo. Terapia, dar espaço, mudar o cabelo... nada funcionou. Até que eu viajei para o Oriente e ouvi falar da <span className="text-red-600 font-bold">Sacerdotisa Azara</span>.</p>
                <p>Ela me disse: "O amor dele não acabou, Jéssica. Ele só está enterrado sob camadas de orgulho e distrações. O Ritual da Chama vai queimar tudo o que não é você."</p>
                <p className="font-bold text-slate-900">Eu fiz o ritual. E na quarta noite, o impossível aconteceu.</p>
                <p>Recebi um áudio de 3 minutos dele chorando, dizendo que não conseguia respirar sem o meu cheiro por perto. Hoje, nós estamos mais unidos do que nunca.</p>
            </div>
        </section>

        {/* Persia Secret Section */}
        <section className="bg-slate-950 text-white p-10 rounded-[3rem] mb-16 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 blur-3xl"></div>
          <h2 className="text-2xl md:text-3xl font-black mb-6 text-center leading-tight">O Segredo Proibido dos <br/><span className="text-red-500">Templos de Fogo da Pérsia</span></h2>
          <img src="https://i.imgur.com/RfnM0Aw.jpeg" alt="Ancient Temple" className="w-full rounded-2xl mb-6 opacity-80" />
          <div className="space-y-4 text-slate-300 text-lg">
              <p>Este ritual não é uma "manifestação" moderna. É magia arcaica que remonta a mais de 3.000 anos.</p>
              <p>As sacerdotisas zoroastristas sabiam algo que foi escondido das mulheres por séculos: <span className="text-white font-bold">Todo homem tem um circuito de obsessão na alma.</span></p>
              <p>Quando a Sacerdotisa Azara sussurra o nome dele na chama, ela liga esse circuito. Ele não consegue mais lutar contra isso.</p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-black text-center uppercase text-slate-900">Histórias Reais de Mulheres Transformadas</h2>
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-50 flex gap-4 items-start hover:border-red-100 transition-colors group">
              <img src={t.image} className="w-12 h-12 rounded-full object-cover border-2 border-slate-100 group-hover:border-red-200 transition-colors" alt={t.name} />
              <div>
                <p className="font-bold text-slate-900 flex items-center gap-1.5">
                  {t.name} <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-50" />
                </p>
                <p className="text-slate-600 text-sm italic mt-1 leading-relaxed">"{t.text}"</p>
                <div className="flex gap-4 mt-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <span className="text-red-500 flex items-center gap-1"><Heart className="w-3 h-3 fill-red-500" /> {t.likes}</span>
                  <span>{t.time}</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-center mb-8 uppercase text-slate-900 tracking-tighter">Perguntas Frequentes</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-5 text-left font-bold text-slate-900 flex justify-between items-center hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm md:text-base pr-4 leading-tight">{f.q}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform flex-shrink-0 ${openFaq === i ? 'rotate-180 text-red-600' : 'text-slate-400'}`} />
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openFaq === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-50 mt-2">
                        {f.a}
                    </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing & CTA */}
        <section className="bg-white border-4 border-red-600 p-8 md:p-12 rounded-[3.5rem] text-center shadow-2xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-red-600"></div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-4 text-slate-900">Inicie o Ritual Hoje</h2>
          <p className="text-slate-500 text-sm mb-6 uppercase tracking-widest font-bold">Vaga garantida para hoje à noite</p>
          
          <div className="space-y-1 mb-8">
            <p className="text-slate-400 line-through text-lg">De R$ 497,00</p>
            <p className="text-6xl font-black text-green-600 drop-shadow-sm">R$ 37,00</p>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-3">Pagamento único • Acesso imediato</p>
          </div>
          
          <button
            onClick={onStartBinding}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-black text-lg md:text-xl py-6 rounded-2xl shadow-xl transition-all transform hover:scale-[1.03] active:scale-95 animate-pulse flex items-center justify-center gap-3 uppercase"
          >
            Acender a Chama Agora
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <div className="flex justify-center gap-6 mt-8 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5" /> 100% Seguro</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> Sigilo Total</span>
            <span className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5" /> Oficial</span>
          </div>
        </section>

        {/* Final Super CTA */}
        <div className="text-center pb-20">
          <button
            onClick={onStartBinding}
            className="w-full bg-red-800 hover:bg-red-900 text-white font-black text-xl py-8 rounded-[2rem] shadow-2xl transition-all transform hover:scale-[1.02] active:scale-95 uppercase flex items-center justify-center gap-3 group"
          >
            Sim! Quero Ele de Volta Obcecado
            <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          </button>
          <p className="text-slate-400 text-xs mt-6 font-bold uppercase tracking-widest">⚠️ Atenção: Este ritual é permanente e irreversível.</p>
        </div>

        {/* Footer */}
        <footer className="text-center py-12 border-t border-slate-200">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.4em]">© 2024 Sacerdotisa Azara</p>
          <div className="flex justify-center gap-6 mt-4 text-[9px] text-slate-400 font-black uppercase underline decoration-slate-200 underline-offset-4">
              <a href="#">Termos de Uso</a>
              <a href="#">Privacidade</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FireRitual;
