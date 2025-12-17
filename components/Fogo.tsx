
import React, { useState, useEffect } from 'react';
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
  Clock,
  Zap,
  ShieldAlert
} from 'lucide-react';

const Fogo: React.FC = () => {
  const [view, setView] = useState<'quiz' | 'content'>('quiz');
  const [currentStep, setCurrentStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const quizQuestions = [
    {
      title: "Quais desses sentimentos DOLOROSOS você está sentindo agora?",
      options: [
        "Ele me bloqueou em tudo e parece que me esqueceu",
        "Ele está com outra pessoa e isso me corrói por dentro",
        "O silêncio dele é a pior tortura que já vivi",
        "Sinto que ele ainda me ama, mas o orgulho é maior",
        "Estou cansada de correr atrás e ser humilhada"
      ]
    }
  ];

  const testimonials = [
    { name: "Mariana L.", text: "Gente, ele voltou rastejando na quarta noite. Eu não acreditava mais. Agora ele não sai do meu pé!", time: "há 2 horas", likes: 243, image: "https://randomuser.me/api/portraits/women/32.jpg" },
    { name: "Beatriz S.", text: "A Sacerdotisa Azara é incrível. O orgulho dele simplesmente derreteu com o fogo.", time: "há 5 horas", likes: 187, image: "https://randomuser.me/api/portraits/women/45.jpg" },
    { name: "Carla P.", text: "Ele me mandou mensagem pedindo perdão e disse que não parava de sonhar comigo. Funciona mesmo.", time: "há 1 dia", likes: 512, image: "https://randomuser.me/api/portraits/women/67.jpg" }
  ];

  const faqs = [
    { q: "E se ele estiver com outra mulher?", a: "Ótimo. Ela é apenas um espaço vazio. A chama não compete com ela — ela apaga. A conexão dele com ela esfria. O toque dela parece errado. A voz dela irrita. Ele olha para ela e sente apenas vazio. E então corre de volta para você." },
    { q: "E se ele me bloqueou em tudo?", a: "Melhor ainda. O bloqueio não o protege. Ele o prende dentro da própria cabeça com o fogo. Ele ficará tão obcecado que dará um jeito de falar com você — uma conta nova, um e-mail, aparecendo pessoalmente. O bloqueio vira a prisão dele, e você é a única saída." },
    { q: "E se já se passaram meses ou anos?", a: "Não importa. O tempo não apaga essa chama. A conexão entre vocês ainda existe como uma brasa enterrada. Esse ritual é o vento que transforma essa brasa em incêndio. Quanto mais tempo passou, mais forte as memórias batem quando voltam." },
    { q: "E se ele jurou que nunca voltaria?", a: "Homens dizem muitas coisas. Palavras grandes. Mas palavras não significam nada quando a alma dele está em chamas. Na quinta noite, ele nem vai lembrar do que jurou. Estará ocupado demais implorando para você aceitá-lo de volta." },
    { q: "E se eu não acreditar nisso?", a: "Você não precisa acreditar. O fogo não liga para crença. Ele queima de qualquer forma. Tudo o que você precisa fazer é entregar o nome dele à Sacerdotisa Azara. Ela cuida do resto." },
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
          <h1 className="text-2xl md:text-3xl font-black text-white text-center mb-10 leading-tight uppercase">
            {quizQuestions[currentStep].title}
          </h1>
          <div className="space-y-4">
            {quizQuestions[currentStep].options.map((opt, i) => (
              <button
                key={i}
                onClick={handleNext}
                className="w-full text-left p-6 bg-[#1f1714] hover:bg-red-950/30 border border-white/5 hover:border-red-600/50 rounded-2xl transition-all group flex justify-between items-center"
              >
                <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">{opt}</span>
                <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-red-600 shrink-0" />
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
          <div className="space-y-4 font-bold text-red-700 italic border-l-4 border-red-200 pl-6">
            <p>Eu não imploro para homens.</p>
            <p>Eu não corro atrás deles.</p>
            <p>E com certeza não fico sentada chorando, me perguntando por que ele “precisa de espaço”.</p>
          </div>
          <p>Porque eu encontrei algo mais antigo. Mais sombrio. Algo contra o qual ele não consegue lutar.</p>
          <p>Tudo o que fiz foi entregar o nome dele a uma sacerdotisa que guarda uma chama antiga que queima há mais de 1.500 anos.</p>
          <p>Ela sussurrou o nome dele no fogo.</p>
          <p className="bg-red-50 p-8 rounded-3xl border border-red-100 font-bold text-red-900">
            E em menos de 48 horas, ele estava explodindo meu celular. Implorando. Chorando. Rastejando de volta como um homem que perdeu completamente o controle.
          </p>
        </section>

        {/* Section: A Última Vez */}
        <section className="mb-20">
          <h2 className="text-3xl font-black text-slate-900 uppercase mb-8">A Última Vez Que Ele Se Afastou…</h2>
          <div className="space-y-6 text-xl text-slate-600">
            <p>Ele achou que podia simplesmente sumir. Me deixar no vácuo. Agir como se o que tivemos não tivesse significado nada.</p>
            <p className="font-black text-red-600 text-4xl uppercase tracking-tighter">Ha. Fofo.</p>
            <p>Entreguei o nome dele à Sacerdotisa Azara. Ela acendeu a vela sagrada em seu templo de fogo, pronunciou o nome dele na chama e deixou o fogo fazer o trabalho.</p>
          </div>
          <div className="mt-12 rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white">
            <img src="https://i.imgur.com/kkGFDp4.jpeg" alt="Prist" className="w-full" />
          </div>
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
            <h4 className="font-black text-red-600 uppercase text-xs tracking-widest mb-2">Na terceira noite?</h4>
            <p className="text-xl font-bold text-slate-900 leading-tight">27 ligações perdidas. Mensagens sem parar: “Me desculpa. Não sei o que está acontecendo comigo. Eu preciso te ver.”</p>
          </div>
          <div className="relative pl-10 border-l-2 border-red-200">
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-red-600 rounded-full"></div>
            <h4 className="font-black text-red-600 uppercase text-xs tracking-widest mb-2">Na quinta noite?</h4>
            <p className="text-xl font-bold text-slate-900 leading-tight">Ele estava na minha porta. Olhos vermelhos. Voz tremendo. Jurando que nunca mais me deixaria.</p>
            <p className="text-lg text-slate-500 mt-2 italic">Disse que sentia o peito em chamas e que eu era a única coisa capaz de apagar aquele fogo.</p>
            <p className="font-black text-red-800 text-2xl uppercase mt-4">Tudo isso em menos de 5 noites.</p>
          </div>
        </section>

        {/* Why it works section */}
        <section className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-sm border border-slate-100 mb-20">
          <h2 className="text-3xl font-black text-slate-900 uppercase mb-10 leading-tight">Por Que Isso Funciona <br/><span className="text-red-600">(E Por Que Todo o Resto Falha)</span></h2>
          <div className="space-y-6 text-xl text-slate-600 leading-relaxed">
            <p>A maioria das mulheres faz tudo errado. Elas choram abraçadas ao travesseiro. Mandam mensagens patéticas de “só passando para saber como você está”. Stalkeiam as redes sociais dele, morrendo por dentro toda vez que ele posta algo. Ouvem amigas dizendo: “Dá espaço, ele volta.”</p>
            <p className="font-black text-slate-900 text-2xl">Deixa eu te contar a verdade: ele não volta.</p>
            <p>Homens não voltam por causa de “espaço”. Não voltam porque você implorou. Não voltam porque você “deu tempo para ele pensar”.</p>
            <p className="bg-[#1e293b] text-white p-8 rounded-[2rem] font-bold text-center text-2xl">Eles voltam quando algo se agarra à alma deles e não solta mais.</p>
            <p>E é exatamente isso que essa chama faz. Ela não pede. Não convence. Ela queima o seu nome no espírito dele até você ser tudo em que ele consegue pensar.</p>
          </div>
        </section>

        {/* Section: Templos de Fogo da Pérsia */}
        <section className="mb-20">
          <h2 className="text-3xl font-black text-slate-900 uppercase mb-10 text-center">O Segredo Proibido dos Templos de Fogo da Pérsia</h2>
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-12 border-8 border-white">
            <img src="https://i.imgur.com/RfnM0Aw.jpeg" alt="Templos Pérsia" className="w-full" />
          </div>
          <div className="space-y-8 text-xl text-slate-700 leading-relaxed">
            <p>Isso não é um truque moderno de “manifestação”. Não são velas de loja barata e pensamentos positivos. É um ritual de fogo antigo que remonta a mais de 3.000 anos, às sacerdotisas zoroastristas da Pérsia.</p>
            <p>Elas sabiam algo que foi escondido das mulheres por séculos: Todo homem tem um ponto na alma que pode ser incendiado. E quando é aceso, ele queima por uma mulher — e apenas uma.</p>
            <p>Rainhas usavam isso para manter seus reis leais. Tão leais que abandonavam amantes, largavam guerras pela metade e atravessavam reinos inteiros apenas para estar perto dela novamente.</p>
            <div className="bg-red-50 p-8 rounded-[2.5rem] border border-red-100 italic text-red-900 font-medium space-y-4">
              <p>Os sacerdotes odiavam isso. Chamavam de perigoso. Tentaram enterrar esse conhecimento. Mas os sussurros nunca cessaram.</p>
            </div>
            <p className="font-black text-slate-900 text-2xl">Uma vez que o nome dele entra na chama sagrada, a alma dele fica ligada a você. E esse fogo nunca se apaga.</p>
          </div>
        </section>

        {/* Section: Controle */}
        <section className="bg-slate-900 text-white p-10 md:p-14 rounded-[4rem] mb-20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[100px] rounded-full"></div>
          <h2 className="text-3xl font-black uppercase mb-10 leading-tight">Os Homens Acham Que Estão no Controle</h2>
          <div className="space-y-6 text-xl text-slate-300">
            <p>Não estão. Todo homem tem um interruptor escondido dentro dele. Chame de circuito da obsessão. Instinto primitivo. O que quiser.</p>
            <p>Quando está ligado? Ele não consegue pensar direito. Não consegue dormir. Não para de te imaginar. O corpo inteiro dele anseia por você.</p>
            <p>Quando está desligado? Ele fica frio. Distante. Some.</p>
            <p className="text-red-500 font-black uppercase tracking-widest text-sm">O que a maioria das mulheres não sabe:</p>
            <p className="text-white font-black text-3xl leading-tight">O Ritual da Chama de 5 Noites liga esse interruptor novamente. E, uma vez ligado, ele permanece ligado.</p>
            <p className="italic text-red-300 font-bold">Por isso as mulheres chamam de “ritual do Homem em Chamas”. Porque quando o nome dele toca a chama, ele queima por você. E somente por você.</p>
          </div>
        </section>

        {/* Section: 5 Noites details */}
        <section className="mb-20">
          <h2 className="text-4xl font-black text-slate-900 uppercase mb-10 text-center tracking-tighter">O Que Acontece Ao Longo das 5 Noites</h2>
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-12 border-4 border-white">
            <img src="https://i.imgur.com/EcmtW16.jpeg" alt="5 Noites" className="w-full" />
          </div>
          <div className="space-y-8 text-xl text-slate-600 mb-12">
            <p>Isso não são meses de espera. Não são anos de terapia. Não é “manifestar por seis meses e torcer para dar certo”. A Sacerdotisa Azara sussurra o nome dele na chama sagrada e, em até 5 noites, o mundo dele vira de cabeça para baixo.</p>
          </div>
          
          <div className="space-y-8">
            {[
              { t: "Noite 1: A Primeira Faísca", p: "No momento em que o nome dele entra na chama, algo muda. Ele vai se sentir inquieto naquela noite. Vai se revirar às 3 da manhã sem saber por quê. Seu rosto vai piscar na mente dele. Ele sentirá uma dor estranha no peito que não consegue explicar." },
              { t: "Noite 2: O Calor Aumenta", p: "Ele começa a pensar em você mais. Muito mais. Vai se pegar olhando fotos antigas suas. Revivendo conversas. A ideia de você com outro homem vai deixá-lo enjoado." },
              { t: "Noite 3: O Fogo se Espalha", p: "Agora ele não consegue mais se livrar de você. Vai sonhar com você de forma tão real que acorda confuso. Os amigos vão perceber que algo está errado. Ele vai mandar uma mensagem fraca só para “testar o terreno”, porque não aguenta mais a pressão." },
              { t: "Noite 4: O Incêndio", p: "Ele está perdendo o controle. Não consegue focar no trabalho. Não sente prazer em nada. Todas as outras mulheres parecem sem graça perto de você. O fogo queimou tudo. Só você restou na mente dele." },
              { t: "Noite 5: Rendição Total", p: "Ele quebra. O orgulho? Sumiu. As defesas? Viraram cinzas. Ele liga. Ele manda mensagem. Ele aparece. Chora, pede desculpas e jura que nunca mais vai te deixar. Diz coisas como: “Não sei o que aconteceu comigo, mas não consigo viver sem você.”" }
            ].map((night, i) => (
              <div key={i} className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm transition-all hover:border-red-100">
                <h3 className="text-2xl font-black text-red-600 uppercase mb-4 tracking-tight">{night.t}</h3>
                <p className="text-lg text-slate-600 leading-relaxed">{night.p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Aviso */}
        <section className="bg-red-950 text-white p-10 md:p-14 rounded-[3.5rem] mb-20 text-center shadow-2xl border-4 border-red-600">
          <h2 className="text-4xl font-black uppercase mb-8">Mas Preciso Te Avisar…</h2>
          <div className="space-y-6 text-xl text-red-100 leading-relaxed mb-8">
            <p>Isso não é brincadeira. Não é um “trabalho energético” inofensivo. Quando a Sacerdotisa Azara realiza esse ritual, os homens não apenas voltam. Eles grudam. Eles se tornam obcecados. Eles não se cansam de você.</p>
            <p className="font-black text-3xl uppercase tracking-tighter text-white">Se você não está pronta para ele te desejar a cada segundo de todos os dias… não faça isso.</p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <h2 className="text-3xl font-black text-slate-900 uppercase mb-12 text-center">Histórias Reais de Mulheres Que Usaram a Chama</h2>
          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                <div className="flex items-center gap-4 mb-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-red-100" />
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <div className="flex text-yellow-500">
                      <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 text-lg mb-4">"{t.text}"</p>
                <div className="flex items-center justify-between text-xs text-slate-400 font-bold uppercase tracking-widest pt-4 border-t border-slate-50">
                   <span>{t.time}</span>
                   <div className="flex gap-4">
                     <span className="flex items-center gap-1 text-red-500"><Heart className="w-3 h-3 fill-current" /> {t.likes}</span>
                     <span className="flex items-center gap-1 text-blue-500"><ThumbsUp className="w-3 h-3 fill-current" /></span>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: História Proibida */}
        <section className="mb-20">
          <h2 className="text-3xl font-black text-slate-900 uppercase mb-10 text-center leading-tight">A História Proibida Que Tentaram Enterrar</h2>
          <div className="space-y-6 text-xl text-slate-700 leading-relaxed">
            <p>Acha que eu inventei isso? Não. Esse ritual é mais antigo que a igreja. Mais antigo que a terapia. Mais antigo que qualquer conselho de relacionamento que você já ouviu. Mulheres usam o fogo para ligar homens há milhares de anos.</p>
            <p>Em templos persas antigos. Em câmaras escondidas. Em cerimônias secretas passadas de mãe para filha. Porque toda mulher que aprendia isso sabia de uma coisa: Homens são fracos. Homens podem ser controlados. Homens podem ser ligados. E o fogo era como elas faziam isso.</p>
          </div>
        </section>

        {/* Section: Rainhas */}
        <section className="mb-20">
          <h2 className="text-4xl font-black text-slate-900 uppercase mb-10 text-center tracking-tighter">Rainhas Que Fizeram Reis Rastejarem</h2>
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-12 border-8 border-white">
            <img src="https://i.imgur.com/1sAIPUI.jpeg" alt="Rainha" className="w-full" />
          </div>
          <div className="space-y-6 text-xl text-slate-700 leading-relaxed">
            <p>Existem histórias — sussurradas, apagadas dos livros de história — sobre rainhas que usaram a chama sagrada para trazer seus reis de volta. Uma rainha mandou realizar o ritual enquanto seu rei estava em guerra, com outra mulher em sua tenda.</p>
            <p className="font-bold text-slate-900 text-2xl">Cinco noites depois? Ele abandonou a amante. Abandonou a guerra. Abandonou o exército. Cavalgou de volta até ela, pálido e tremendo, sussurrando: “Não consigo respirar sem você.”</p>
            <p className="italic text-slate-500">Os generais chamaram de loucura. Os sacerdotes chamaram de bruxaria. Ela chamou de poder.</p>
          </div>
          <div className="mt-10 bg-red-50 p-10 rounded-[3rem] border border-red-100">
             <h3 className="text-2xl font-black text-red-900 mb-6 uppercase">Tentaram Destruir Isso</h3>
             <div className="space-y-4 text-red-800 text-lg">
                <p>Quando os sacerdotes perceberam o que as mulheres faziam com a chama sagrada? Entraram em pânico. Chamaram de mal. Disseram que ameaçava a ordem natural.</p>
                <p>Por quê? Porque funcionava. Porque homens “lógicos” desmoronavam como crianças. Porque homens “fortes” choravam como bebês. Porque homens “fiéis” abandonavam tudo para rastejar de volta a uma mulher.</p>
                <p>Então proibiram. Queimaram os textos. Espalharam as sacerdotisas. Mas sussurros nunca morrem. O conhecimento sobreviveu. Passado em segredo de guardiã para guardiã. E agora está aqui. Pronto para ligar a alma do seu homem à sua.</p>
             </div>
          </div>
        </section>

        {/* Section: Sacerdotisa Azara */}
        <section className="bg-white p-10 md:p-14 rounded-[3.5rem] mb-20 shadow-sm border border-slate-100">
          <h2 className="text-3xl font-black text-slate-900 uppercase mb-10 text-center tracking-tighter">Quem É a Sacerdotisa Azara?</h2>
          <div className="rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl border-4 border-slate-50">
            <img src="https://i.imgur.com/S0BPoDO.jpeg" alt="Azara" className="w-full" />
          </div>
          <div className="space-y-6 text-xl text-slate-700 leading-relaxed">
            <p>A Sacerdotisa Azara é descendente direta dos guardiões do fogo zoroastristas da antiga Pérsia. A família dela guarda a chama sagrada — o Atar — há mais de 1.500 anos. Quando os templos foram destruídos, eles fugiram com as brasas, mantendo a tradição viva em segredo.</p>
            <p>Hoje, ela realiza o ritual da chama em seu templo particular para um número limitado de mulheres por semana. Ela não faz isso por dinheiro. É o chamado dela. O propósito dela. Garantir que esse poder antigo não se perca no mundo.</p>
            <p className="font-bold text-red-600 italic">Mas o ritual a drena. Cada um exige dias de preparação e recuperação. Por isso ela só pode ajudar um número limitado de mulheres.</p>
          </div>
        </section>

        {/* Section: Como Funciona */}
        <section className="mb-20">
          <h2 className="text-3xl font-black text-slate-900 uppercase mb-12 text-center tracking-tighter">Como Funciona</h2>
          <div className="space-y-4">
             {[
               "1 – Você clica no botão abaixo e preenche um formulário curto com o nome dele e alguns detalhes da sua situação.",
               "2 – A Sacerdotisa Azara realiza o Ritual da Chama de 5 Noites em seu templo, sussurrando o nome dele no fogo sagrado a cada noite.",
               "3 – Você segue com a sua vida enquanto a chama faz o trabalho na alma dele.",
               "4 – Em até 5 noites, veja ele rastejar de volta."
             ].map((item, i) => (
               <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 font-bold text-xl text-slate-800 flex items-start gap-6 shadow-sm hover:border-red-100 transition-all">
                  <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center shrink-0 font-black">
                    {i + 1}
                  </div>
                  <p className="leading-snug">{item}</p>
               </div>
             ))}
          </div>
          <p className="text-center text-slate-500 mt-10 italic text-lg">É isso. Você não precisa fazer nada além de estar pronta quando ele quebrar.</p>
        </section>

        {/* Offer Section */}
        <section className="bg-white border-[6px] border-red-600 p-10 md:p-14 rounded-[4rem] text-center shadow-[0_50px_100px_-20px_rgba(220,38,38,0.2)] mb-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-3 bg-red-600"></div>
          <h2 className="text-3xl font-black text-slate-900 uppercase mb-10 leading-tight">Quanto Vale a Obsessão Dele Para Você?</h2>
          <div className="space-y-6 text-xl text-slate-600 mb-12 leading-relaxed">
            <p>Seja honesta. Quanto você pagaria para acabar com a humilhação de ser ignorada? Para cortar a outra mulher da vida dele de vez? Para vê-lo de joelhos, implorando por outra chance?</p>
            <p>Mulheres gastam milhares em terapia e coaches que não funcionam. Perdem meses com estratégias de “nenhum contato” que não levam a lugar nenhum. Nada disso liga o interruptor da obsessão dele.</p>
            <p className="font-bold text-slate-900 text-2xl">Mas isso faz.</p>
            
            <div className="mt-12 space-y-2">
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Seu Preço Hoje</h3>
              <p className="text-slate-400 line-through text-2xl font-bold">Não $500. Não $200. Nem mesmo $100.</p>
              <div className="flex flex-col items-center gap-2 my-10">
                <span className="text-green-600 font-black text-8xl drop-shadow-sm leading-none">$27</span>
                <span className="text-slate-400 text-sm font-black uppercase tracking-[0.4em] mt-4">Vinte e sete dólares</span>
              </div>
              <p className="font-black text-red-600 text-3xl uppercase tracking-tighter drop-shadow-sm mt-8">Pelo poder de fazer ele queimar por você para sempre.</p>
            </div>
          </div>

          <button
            onClick={handleCTA}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-2xl py-8 rounded-[2.5rem] shadow-[0_25px_50px_rgba(220,38,38,0.4)] transition-all transform hover:scale-[1.03] active:scale-95 mb-10 uppercase flex flex-col items-center justify-center gap-2 group animate-pulse"
          >
            <span>Acenda a Chama – Garanta Seu Ritual Agora</span>
            <span className="text-xs font-normal opacity-80 tracking-widest normal-case">Clique para prosseguir ao altar sagrado</span>
          </button>
          
          <div className="flex items-center justify-center gap-10 text-slate-300 text-[10px] font-black uppercase tracking-[0.3em]">
            <span className="flex items-center gap-2"><Lock className="w-5 h-5 text-slate-400" /> 100% Seguro</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-slate-400" /> Original</span>
          </div>
        </section>

        {/* Section: Agir Agora */}
        <section className="mb-20">
          <h2 className="text-3xl font-black text-slate-900 uppercase mb-10 text-center tracking-tighter">Mas Você Precisa Agir Agora</h2>
          <div className="rounded-[2.5rem] overflow-hidden mb-12 border-8 border-white shadow-2xl">
            <img src="https://i.imgur.com/gLqf1pr.jpeg" alt="Ação" className="w-full" />
          </div>
          <div className="space-y-8 text-xl text-slate-700 leading-relaxed text-center font-medium">
            <p>A Sacerdotisa Azara só consegue realizar um número limitado de rituais por semana. A energia dela não é infinita. Quando as vagas acabam, acabam — até ela se recuperar.</p>
            <p>Se você fechar esta página e voltar amanhã, sua vaga pode já ter sido tomada. Cada noite que você espera é mais uma noite em que ele se afasta. Mais uma noite em que ela crava as garras mais fundo nele. Mais uma noite que você perde.</p>
            
            <div className="bg-slate-950 text-white p-12 rounded-[4rem] border-t-8 border-red-600 mt-16 shadow-2xl space-y-8">
               <h3 className="text-2xl font-black uppercase text-red-500 tracking-widest mb-4">E Aqui Está a Verdade Mais Sombria…</h3>
               <p>Esta página pode não ficar no ar. Eles já tentaram enterrar esse ritual antes. Terapeutas, coaches de relacionamento, toda a indústria de “autoajuda” — eles adorariam ver isso desaparecer.</p>
               <p className="font-bold text-2xl italic">Porque quando mulheres têm esse poder, os homens não têm chance.</p>
               <div className="space-y-4 pt-8">
                 <p className="flex items-center gap-4 text-left font-bold text-red-400 border-l-4 border-red-600 pl-6">👉 Se você agir agora, a Sacerdotisa Azara começará seu ritual ainda hoje à noite.</p>
                 <p className="flex items-center gap-4 text-left font-bold text-gray-400 border-l-4 border-gray-600 pl-6">👉 Se você esperar, talvez nunca mais veja esta página — ou ele — novamente.</p>
               </div>
               
               <button
                onClick={handleCTA}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-black text-2xl py-8 rounded-[2.5rem] shadow-[0_20px_40px_rgba(22,163,74,0.3)] transition-all transform hover:scale-[1.03] active:scale-95 uppercase flex items-center justify-center gap-4 mt-12"
              >
                Sim, Estou Pronta – Acender a Chama Agora
                <Zap className="w-8 h-8 fill-yellow-300 text-yellow-300" />
              </button>
            </div>
          </div>
        </section>

        {/* Section: Risco */}
        <section className="bg-slate-50 p-10 md:p-14 rounded-[4rem] mb-20 text-center border-2 border-slate-100 shadow-sm">
          <h2 className="text-4xl font-black text-slate-900 uppercase mb-10 tracking-tighter">O Risco É 100% Meu</h2>
          <div className="space-y-8 text-xl text-slate-600 leading-relaxed mb-12">
            <p>Você tem 60 dias completos para ver os resultados. Se ele não estiver queimando de obsessão por você... Se ele não voltar rastejando, implorando pelo seu perdão... Se você não ficar completamente chocada com o nível de desespero dele por você... Basta enviar um e-mail e você recebe cada centavo de volta. Sem perguntas. Sem complicações.</p>
            <p className="font-black text-slate-900 uppercase text-3xl tracking-tight leading-none bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">Ou você recupera ele, totalmente devoto a você, ou recebe seu dinheiro de volta.</p>
            <p className="font-bold text-slate-400 uppercase text-sm tracking-widest">Não há risco.</p>
          </div>
          <button
            onClick={handleCTA}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-black text-2xl py-8 rounded-[2.5rem] shadow-[0_25px_50px_rgba(22,163,74,0.3)] transition-all transform hover:scale-[1.03] active:scale-95 uppercase flex items-center justify-center gap-4"
          >
            Garantir Meu Ritual – Estou Pronta
            <CheckCircle className="w-8 h-8" />
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
                  className="w-full flex items-center justify-between p-8 text-left transition-colors"
                >
                  <span className="font-bold text-slate-900 pr-6 text-xl leading-tight">{f.q}</span>
                  <div className={`p-3 rounded-full bg-slate-50 transition-transform duration-500 ${openFaq === i ? 'rotate-180 bg-red-50 text-red-600' : 'text-slate-400'}`}>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ${openFaq === i ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-8 pt-0 text-slate-600 text-xl leading-relaxed border-t border-slate-50 mt-4">
                    {f.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final super CTA */}
        <div className="text-center pb-32">
          <button
            onClick={handleCTA}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-2xl py-10 rounded-[3rem] shadow-[0_40px_80px_-15px_rgba(220,38,38,0.5)] transition-all transform hover:scale-[1.05] active:scale-95 uppercase animate-pulse flex flex-col items-center gap-2"
          >
            <span>Tenho Certeza – Acender a Chama Agora</span>
            <span className="text-[10px] font-bold tracking-[0.4em] opacity-80 normal-case">Iniciar ritual de reconexão imediata</span>
          </button>
          
          <div className="mt-20 flex justify-center gap-10 opacity-10 grayscale hover:grayscale-0 transition-all duration-1000">
             <Flame className="w-8 h-8 text-red-600" />
             <Flame className="w-8 h-8 text-red-600" />
             <Flame className="w-8 h-8 text-red-600" />
          </div>
        </div>

      </div>

      {/* Footer minimal & premium */}
      <footer className="bg-[#0a0503] py-24 px-8 text-center border-t border-red-900/10">
        <div className="max-w-2xl mx-auto space-y-8">
           <div className="flex justify-center items-center gap-6 text-slate-800 mb-10">
              <div className="h-[1px] w-20 bg-slate-900"></div>
              <Flame className="w-6 h-6 text-red-950" />
              <div className="h-[1px] w-20 bg-slate-900"></div>
           </div>
           <p className="text-[10px] text-slate-600 font-black uppercase tracking-[0.5em] leading-loose">
             © 2024 • Sacerdotisa Azara • Ritual do Fogo Sagrado <br/>
             <span className="opacity-40 mt-4 block">Proteção Energética e Conexão de Almas Garantida</span>
           </p>
           <div className="flex justify-center gap-8 mt-12">
              <ShieldAlert className="w-5 h-5 text-slate-800" />
              <Lock className="w-5 h-5 text-slate-800" />
              <ShieldCheck className="w-5 h-5 text-slate-800" />
           </div>
        </div>
      </footer>
    </div>
  );
};

export default Fogo;
