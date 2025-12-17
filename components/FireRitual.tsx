
import React, { useState } from 'react';
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

interface FireRitualProps {
  onStartBinding: () => void;
}

const FireRitual: React.FC<FireRitualProps> = ({ onStartBinding }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const testimonials = [
    {
      name: "Mariana Costa",
      text: "Eu não acreditava mais. Ele tinha me bloqueado e estava com outra. Na quarta noite do ritual, ele me mandou um e-mail dizendo que não conseguia dormir pensando em mim. Hoje ele não sai do meu pé! Funciona real!",
      time: "há 2 dias",
      likes: 124,
      verified: true,
      image: "https://i.imgur.com/Sza1ZfT.png"
    },
    {
      name: "Juliana Almeida",
      text: "A Sacerdotisa Azara é um anjo. O André voltou rastejando como se nunca tivesse ido embora. O orgulho dele simplesmente sumiu.",
      time: "há 1 semana",
      likes: 89,
      verified: true,
      image: "https://i.imgur.com/GJZpDHa.png"
    },
    {
      name: "Fernanda Lima",
      text: "Gente, ele apareceu na minha porta com flores e chorando. Eu nunca vi um homem tão arrependido. O fogo realmente limpa tudo.",
      time: "há 3 dias",
      likes: 215,
      verified: true,
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
    <div className="min-h-screen bg-[#fafafa] text-[#1e293b] font-poppins selection:bg-red-200">
      <div className="max-w-2xl mx-auto px-6 py-12 md:py-20">
        
        {/* Main Headline with refined typography */}
        <header className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Flame className="w-12 h-12 text-red-600 fill-red-50" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight text-red-800 uppercase tracking-tight">
            SUSSURRE O NOME DELE NESTA CHAMA SAGRADA… E EM ATÉ 5 NOITES ELE VAI FICAR TOTALMENTE OBCECADO POR VOCÊ
          </h1>
        </header>

        {/* Hero Image with premium treatment */}
        <div className="mb-12 relative">
          <div className="absolute inset-0 bg-red-600/10 blur-3xl -z-10 rounded-full scale-75"></div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-[0_35px_60px_-15px_rgba(220,38,38,0.2)] border-8 border-white">
            <img src="https://i.imgur.com/rJhARQH.jpeg" alt="Chama Sagrada" className="w-full transform hover:scale-105 transition-transform duration-[2000ms]" />
          </div>
        </div>

        {/* Core Copy Content */}
        <article className="space-y-8 text-lg md:text-xl leading-relaxed text-slate-700 mb-16">
          <p className="font-semibold text-slate-900 drop-shadow-sm">
            Ele vai se revirar na cama à noite, incapaz de tirar você da cabeça. E, na quinta noite, vai rastejar de volta para você como se a vida dele dependesse disso.
          </p>
          <div className="space-y-1">
            <p className="border-l-4 border-red-200 pl-4 py-1 italic">Eu não imploro para homens.</p>
            <p className="border-l-4 border-red-300 pl-4 py-1 italic">Eu não corro atrás deles.</p>
            <p className="border-l-4 border-red-400 pl-4 py-1 italic">E com certeza não fico sentada chorando, me perguntando por que ele “precisa de espaço”.</p>
          </div>
          <p>Porque eu encontrei algo mais antigo. Mais sombrio. Algo contra o qual ele não consegue lutar.</p>
          <p>Tudo o que fiz foi entregar o nome dele a uma sacerdotisa que guarda uma chama antiga que queima há mais de 1.500 anos.</p>
          <p>Ela sussurrou o nome dele no fogo.</p>
          <p className="bg-red-50 text-red-800 p-4 rounded-2xl font-bold border-l-4 border-red-600 inline-block">
            E em menos de 48 horas, ele estava explodindo meu celular.
          </p>
          <p>Implorando. Chorando. Rastejando de volta como um homem que perdeu completamente o controle.</p>
        </article>

        {/* Story Section: Last Time */}
        <section className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 mb-16">
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-slate-900 flex items-center gap-3">
            <Heart className="w-8 h-8 text-red-600 fill-red-50" />
            A Última Vez Que Ele Se Afastou…
          </h2>

          <div className="space-y-6 text-lg text-slate-700">
            <p>Ele achou que podia simplesmente sumir.</p>
            <p>Me deixar no vácuo.</p>
            <p>Agir como se o que tivemos não tivesse significado nada.</p>
            <p className="font-black text-red-600 italic text-2xl uppercase">AHH QUE FOFO</p>
            <p>Entreguei o nome dele à Sacerdotisa Azara. Ela acendeu a vela sagrada em seu templo de fogo, pronunciou o nome dele na chama e deixou o fogo fazer o trabalho.</p>
            <p className="font-black text-red-900 tracking-widest uppercase mt-8 text-center text-3xl opacity-20">SACERDOTISA</p>
          </div>
        </section>

        {/* Second Image Section */}
        <div className="mb-16 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
          <img src="https://i.imgur.com/kkGFDp4.jpeg" alt="Ritual Sagrado" className="w-full" />
        </div>

        {/* Timeline Results */}
        <div className="space-y-12 mb-16 px-4">
          <div className="relative pl-8 border-l-2 border-red-100 space-y-2">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>
            <p className="font-black text-red-600 uppercase text-xs tracking-widest">Na manhã seguinte?</p>
            <p className="text-xl text-slate-900">Uma mensagem do nada: “Tive o sonho mais estranho com você. Não consigo parar de pensar em você.”</p>
          </div>

          <div className="relative pl-8 border-l-2 border-red-100 space-y-2">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>
            <p className="font-black text-red-600 uppercase text-xs tracking-widest">Na terceira noite?</p>
            <p className="text-xl text-slate-900">27 ligações perdidas. Mensagens sem parar: “Me desculpa. Não sei o que está acontecendo comigo. Eu preciso te ver.”</p>
          </div>

          <div className="relative pl-8 border-l-2 border-red-100 space-y-2 bg-red-50/50 p-6 rounded-r-[2rem] -ml-6">
            <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>
            <p className="font-black text-red-600 uppercase text-xs tracking-widest">Na quinta noite?</p>
            <p className="text-xl text-slate-900 font-bold italic">Ele estava na minha porta. Olhos vermelhos. Voz tremendo. Jurando que nunca mais me deixaria.</p>
            <p className="text-slate-700">Disse que sentia o peito em chamas e que eu era a única coisa capaz de apagar aquele fogo.</p>
            <p className="text-2xl font-black text-red-700 mt-6 uppercase text-center drop-shadow-sm">Tudo isso em menos de 5 noites.</p>
          </div>
        </div>

        {/* Why it works Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-black mb-10 text-slate-900 text-center uppercase tracking-tight">
            Por Que Isso Funciona <br/><span className="text-red-600">(E Por Que Todo o Resto Falha)</span>
          </h2>

          <div className="grid gap-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-6 text-lg leading-relaxed text-slate-700">
                <p>A maioria das mulheres faz tudo errado.</p>
                <p>Elas choram abraçadas ao travesseiro.</p>
                <p>Mandam mensagens patéticas de “só passando para saber como você está”.</p>
                <p>Stalkeiam as redes sociais dele, morrendo por dentro toda vez que ele posta algo.</p>
                <p>Ouvem amigas dizendo: “Dá espaço, ele volta.”</p>
                <p className="font-bold text-slate-900 text-xl">Deixa eu te contar a verdade: ele não volta.</p>
                <p>Homens não voltam por causa de “espaço”.</p>
                <p>Não voltam porque você implorou.</p>
                <p>Não voltam porque você “deu tempo para ele pensar”.</p>
                <p className="bg-red-800 text-white p-6 rounded-2xl font-bold text-center">Eles voltam quando algo se agarra à alma deles e não solta mais.</p>
                <p>E é exatamente isso que essa chama faz.</p>
                <p>Ela não pede. Não convence. Ela queima o seu nome no espírito dele até você ser tudo em que ele consegue pensar.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Persia Section: Ancient Secret */}
        <section className="bg-slate-950 text-white p-10 md:p-14 rounded-[4rem] mb-20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[100px] rounded-full"></div>
          <h2 className="text-3xl md:text-4xl font-black mb-10 text-center leading-tight">O Segredo Proibido dos <br/><span className="text-red-500">Templos de Fogo da Pérsia</span></h2>
          
          <div className="mb-10 rounded-[2rem] overflow-hidden">
            <img src="https://i.imgur.com/RfnM0Aw.jpeg" alt="Ancient Persian Temple" className="w-full opacity-80 hover:opacity-100 transition-opacity" />
          </div>

          <div className="space-y-6 text-lg text-slate-300">
            <p>Isso não é um truque moderno de “manifestação”.</p>
            <p>Não são velas de loja barata e pensamentos positivos.</p>
            <p>É um ritual de fogo antigo que remonta a mais de 3.000 anos, às sacerdotisas zoroastristas da Pérsia.</p>
            <p>Elas sabiam algo que foi escondido das mulheres por séculos:</p>
            <p>Todo homem tem um ponto na alma que pode ser incendiado. E quando é aceso, ele queima por uma mulher — e apenas uma.</p>
            <p>Rainhas usavam isso para manter seus reis leais. Tão leais que abandonavam amantes, largavam guerras pela metade e atravessavam reinos inteiros apenas para estar perto dela novamente.</p>
            <p className="italic text-slate-400">Os sacerdotes odiavam isso.</p>
            <p className="italic text-slate-400">Chamavam de perigoso.</p>
            <p className="italic text-slate-400">Tentaram enterrar esse conhecimento.</p>
            <p>Mas os sussurros nunca cessaram.</p>
            <p>Porque toda mulher que usava sabia a verdade:</p>
            <p className="text-white font-bold text-xl">Uma vez que o nome dele entra na chama sagrada, a alma dele fica ligada a você. E esse fogo nunca se apaga.</p>
          </div>
        </section>

        {/* Control Section */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl font-black mb-8 text-slate-900 uppercase">Os Homens Acham Que Estão no Controle</h2>
          <div className="space-y-6 text-lg text-slate-700">
            <p className="text-2xl font-black text-red-600">Não estão.</p>
            <p>Todo homem tem um interruptor escondido dentro dele. Chame de circuito da obsessão. Instinto primitivo. O que quiser.</p>
            <p className="font-bold">Quando está ligado?</p>
            <p>Ele não consegue pensar direito. Não consegue dormir. Não para de te imaginar. O corpo inteiro dele anseia por você.</p>
            <p className="font-bold">Quando está desligado?</p>
            <p>Ele fica frio. Distante. Some.</p>
            <p>O que a maioria das mulheres não sabe:</p>
            <p>O Ritual da Chama de 5 Noites liga esse interruptor novamente. E, uma vez ligado, ele permanece ligado.</p>
            <p>Por isso as mulheres chamam de “ritual do Homem em Chamas”.</p>
            <p>Porque quando o nome dele toca a chama, ele queima por você. E somente por você.</p>
          </div>
        </section>

        {/* 5 Nights Breakdown */}
        <section className="mb-20">
          <h2 className="text-3xl font-black text-center mb-12 text-slate-900 uppercase tracking-tight">O Que Acontece Ao Longo das 5 Noites</h2>
          <div className="mb-12 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img src="https://i.imgur.com/EcmtW16.jpeg" alt="Linha do Tempo das 5 Noites" className="w-full" />
          </div>

          <div className="space-y-8 bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm">
            <div className="grid gap-10">
              {[
                { n: 1, t: "A Primeira Faísca", d: "No momento em que o nome dele entra na chama, algo muda. Ele vai se sentir inquieto naquela noite. Vai se revirar às 3 da manhã sem saber por quê. Seu rosto vai piscar na mente dele. Ele sentirá uma dor estranha no peito que não consegue explicar." },
                { n: 2, t: "O Calor Aumenta", d: "Ele começa a pensar em você mais. Muito mais. Vai se pegar olhando fotos antigas suas. Revivendo conversas. A ideia de você com outro homem vai deixá-lo enjoado." },
                { n: 3, t: "O Fogo se Espalha", d: "Agora ele não consegue mais se livrar de você. Vai sonhar com você de forma tão real que acorda confuso. Os amigos vai perceber que algo está errado. Ele vai mandar uma mensagem fraca só para “testar o terreno”, porque não aguenta mais a pressão." },
                { n: 4, t: "O Incêndio", d: "Ele está perdendo o controle. Não consegue focar no trabalho. Não sente prazer em nada. Todas as outras mulheres parecem sem graça perto de você. O fogo queimou tudo. Só você restou na mente dele." },
                { n: 5, t: "Rendição Total", d: "Ele quebra. O orgulho? Sumiu. As defesas? Viraram cinzas. Ele liga. Ele manda mensagem. Ele aparece. Chora, pede desculpas e jura que nunca mais vai te deixar. Diz coisas como: “Não sei o que aconteceu comigo, mas não consigo viver sem você.”" }
              ].map((step) => (
                <div key={step.n} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-red-600 text-white font-black rounded-full flex items-center justify-center shrink-0 shadow-[0_5px_15px_rgba(220,38,38,0.3)]">
                    {step.n}
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900 mb-2 uppercase">{step.t}</h4>
                    <p className="text-slate-600 leading-relaxed">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Caution Section */}
        <section className="bg-red-800 text-white p-10 rounded-[3rem] mb-20 text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl font-black mb-6 uppercase">Mas Preciso Te Avisar…</h2>
          <div className="space-y-6 text-lg">
            <p>Isso não é brincadeira.</p>
            <p>Não é um “trabalho energético” inofensivo.</p>
            <p>Quando a Sacerdotisa Azara realiza esse ritual, os homens não apenas voltam.</p>
            <p className="text-3xl font-black">Eles grudam.</p>
            <p>Eles se tornam obcecados.</p>
            <p>Eles não se cansam de você.</p>
            <p className="font-bold underline decoration-red-400">Se você não está pronta para ele te desejar a cada segundo de todos os dias… não faça isso.</p>
          </div>
        </section>

        {/* Testimonials refined */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-12 text-slate-900 uppercase">Histórias Reais de Mulheres Que Usaram a Chama</h2>
          <div className="grid gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-50 hover:border-red-100 transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-200">
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 flex items-center gap-1.5">
                        {t.name}
                        {t.verified && <CheckCircle2 className="w-4 h-4 text-blue-500 fill-blue-50" />}
                      </p>
                      <div className="flex text-yellow-400 gap-0.5">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{t.time}</span>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-6 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] border-t border-slate-50 pt-6">
                   <button className="flex items-center gap-1.5 text-red-500 hover:text-red-600 transition-colors font-bold uppercase">
                      <Heart className="w-4 h-4 fill-red-500" /> {t.likes}
                   </button>
                   <button className="flex items-center gap-1.5 text-blue-500 hover:text-blue-600 transition-colors font-bold uppercase">
                      <ThumbsUp className="w-4 h-4 fill-blue-500" /> Curtir
                   </button>
                   <button className="flex items-center gap-1.5 hover:text-slate-900 transition-colors text-slate-400 font-bold uppercase">
                      <MessageCircle className="w-4 h-4" /> Responder
                   </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* History Buried Section */}
        <section className="mb-20 prose prose-slate max-w-none">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase mb-8">A História Proibida Que Tentaram Enterrar</h2>
          <div className="space-y-6 text-lg text-slate-700">
            <p>Acha que eu inventei isso?</p>
            <p>Não.</p>
            <p>Esse ritual é mais antigo que a igreja.</p>
            <p>Mais antigo que a terapia.</p>
            <p>Mais antigo que qualquer conselho de relacionamento que você já ouviu.</p>
            <p>Mulheres usam o fogo para ligar homens há milhares de anos.</p>
            <p>Em templos persas antigos.</p>
            <p>Em câmaras escondidas.</p>
            <p>Em cerimônias secretas passadas de mãe para filha.</p>
            <p>Porque toda mulher que aprendia isso sabia de uma coisa:</p>
            <p className="text-xl font-bold text-slate-900">Homens são fracos. Homens podem ser controlados. Homens podem ser ligados.</p>
            <p>E o fogo era como elas faziam isso.</p>
          </div>
        </section>

        {/* Queens & Kings Section */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl font-black mb-10 text-slate-900 uppercase">Rainhas Que Fizeram Reis Rastejarem</h2>
          <div className="mb-10 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
            <img src="https://i.imgur.com/1sAIPUI.jpeg" alt="Ancient Queen Power" className="w-full" />
          </div>
          <div className="space-y-8 text-lg text-slate-700">
            <p>Existem histórias — sussurradas, apagadas dos livros de história — sobre rainhas que usaram a chama sagrada para trazer seus reis de volta.</p>
            <div className="bg-slate-50 p-8 rounded-[2rem] border-l-4 border-slate-900 italic text-left">
              <p className="mb-4">Uma rainha mandou realizar o ritual enquanto seu rei estava em guerra, com outra mulher em sua tenda.</p>
              <p className="font-bold text-slate-900 text-xl uppercase">Cinco noites depois?</p>
              <p>Ele abandonou a amante. Abandonou a guerra. Abandonou o exército. Cavalgou de volta até ela, pálido e tremendo, sussurrando: “Não consigo respirar sem você.”</p>
            </div>
            <p>Os generais chamaram de loucura. Os sacerdotes chamaram de bruxaria. Ela chamou de poder.</p>
            <p className="font-black text-red-700 text-2xl uppercase mt-12 tracking-tighter">Tentaram Destruir Isso</p>
            <p>Quando os sacerdotes perceberam o que as mulheres faziam com a chama sagrada? Entraram em pânico. Chamaram de mal. Disseram que ameaçava a ordem natural.</p>
            <p>Por quê? Porque funcionava. Porque homens “lógicos” desmoronavam como crianças. Porque homens “fortes” choravam como bebês. Porque homens “fiéis” abandonavam tudo para rastejar de volta a uma mulher.</p>
            <p>Então proibiram. Queimaram os textos. Espalharam as sacerdotisas. <span className="italic">Mas sussurros nunca morrem.</span></p>
            <p>O conhecimento sobreviveu. Passado em segredo de guardiã para guardiã. E agora está aqui. Pronto para ligar a alma do seu homem à sua.</p>
          </div>
        </section>

        {/* Azara Profile Section */}
        <section className="bg-white p-10 md:p-14 rounded-[4rem] mb-20 shadow-sm border border-slate-100 flex flex-col items-center text-center">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-red-600/20 blur-2xl rounded-full animate-pulse"></div>
            <img src="https://i.imgur.com/S0BPoDO.jpeg" alt="Sacerdotisa Azara Portrait" className="w-40 h-40 rounded-full border-4 border-white shadow-xl object-cover relative z-10" />
          </div>
          <h2 className="text-3xl font-black mb-8 text-slate-900 uppercase">Quem É a Sacerdotisa Azara?</h2>
          <div className="space-y-6 text-lg text-slate-700 max-w-md mx-auto">
            <p>A Sacerdotisa Azara é descendente direta dos guardiões do fogo zoroastristas da antiga Pérsia.</p>
            <p>A família dela guarda a chama sagrada — o Atar — há mais de 1.500 anos. Quando os templos foram destruídos, eles fugiram com as brasas, mantendo a tradição viva em segredo.</p>
            <p>Hoje, ela realiza o ritual da chama em seu templo particular para um número limitado de mulheres por semana.</p>
            <p>Ela não faz isso por dinheiro. É o chamado dela. O propósito dela. Garantir que esse poder antigo não se perca no mundo.</p>
            <p className="font-bold">Mas o ritual a drena. Cada um exige dias de preparação e recuperação. Por isso ela só pode ajudar um número limitado de mulheres.</p>
          </div>
        </section>

        {/* Simple Workflow */}
        <section className="mb-20">
          <h2 className="text-3xl font-black text-center mb-12 text-slate-900 uppercase tracking-tight">Como Funciona</h2>
          <div className="grid gap-4">
            {[
              "1 – Você clica no botão abaixo e preenche um formulário curto com o nome dele e alguns detalhes da sua situação.",
              "2 – A Sacerdotisa Azara realiza o Ritual da Chama de 5 Noites em seu templo, sussurrando o nome dele no fogo sagrado a cada noite.",
              "3 – Você segue com a sua vida enquanto a chama faz o trabalho na alma dele.",
              "4 – Em até 5 noites, veja ele rastejar de volta."
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center gap-4 text-slate-700 font-medium">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                {step}
              </div>
            ))}
            <p className="mt-8 text-center text-slate-600 italic">É isso. Você não precisa fazer nada além de estar pronta quando ele quebrar.</p>
          </div>
        </section>

        {/* Emotional Value Section */}
        <section className="mb-20 text-center px-4">
          <h2 className="text-3xl font-black mb-10 text-slate-900 uppercase">Quanto Vale a Obsessão Dele Para Você?</h2>
          <div className="space-y-8 text-lg text-slate-700">
            <p className="text-xl font-bold">Seja honesta.</p>
            <p>Quanto você pagaria para acabar com a humilhação de ser ignorada?</p>
            <p>Para cortar a outra mulher da vida dele de vez?</p>
            <p>Para vê-lo de joelhos, implorando por outra chance?</p>
            <p>Mulheres gastam milhares em terapia e coaches que não funcionam. Perdem meses com estratégias de “nenhum contato” que não levam a lugar nenhum.</p>
            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 space-y-4">
               <p>Nada disso liga o interruptor da obsessão dele.</p>
               <p>Nada disso queima seu nome na alma dele.</p>
               <p className="text-red-700 font-black text-2xl uppercase">Mas isso faz.</p>
            </div>
          </div>
        </section>

        {/* Pricing Reveal with Premium Card */}
        <section className="bg-white border-[3px] border-red-600 p-10 md:p-14 rounded-[4rem] text-center shadow-2xl mb-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-red-600"></div>
          <h2 className="text-3xl font-black mb-8 text-slate-900 uppercase">Seu Preço Hoje</h2>
          <div className="space-y-6 text-lg text-slate-700 mb-10">
            <p>A Sacerdotisa Azara não faz isso por lucro. Mas precisamos cobrir os custos de manter este site e o templo dela.</p>
            <p>Então concordamos em um valor acessível para qualquer mulher, independentemente da situação.</p>
            <div className="flex flex-col gap-2 items-center text-red-600">
              <span className="line-through text-2xl">Não R$500.</span>
              <span className="line-through text-2xl">Não R$200.</span>
              <span className="line-through text-2xl">Nem mesmo R$100.</span>
            </div>
            <p className="text-green-600 font-black text-6xl my-6 drop-shadow-sm">R$ 37</p>
            <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-sm">Trinta e sete reais.</p>
            <p className="italic">Menos que um jantar fora.</p>
            <p className="font-black text-slate-900 uppercase tracking-tight text-2xl mt-4">Pelo poder de fazer ele queimar por você para sempre.</p>
          </div>

          <button
            onClick={onStartBinding}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-black text-xl py-8 rounded-[2rem] shadow-[0_20px_40px_rgba(22,163,74,0.4)] transition-all transform hover:scale-[1.02] active:scale-95 mb-12 uppercase flex items-center justify-center gap-3 group animate-pulse"
          >
            Acenda a Chama – Garanta Seu Ritual Agora
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex items-center justify-center gap-8 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
            <span className="flex items-center gap-1.5"><Lock className="w-4 h-4" /> 100% Seguro</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4" /> Criptografado</span>
            <span className="flex items-center gap-1.5"><Award className="w-4 h-4" /> Original</span>
          </div>
        </section>

        {/* Urgency Section */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl font-black mb-10 text-slate-900 uppercase">Mas Você Precisa Agir Agora</h2>
          <div className="mb-12 rounded-[3rem] overflow-hidden shadow-2xl">
            <img src="https://i.imgur.com/gLqf1pr.jpeg" alt="Última Oportunidade" className="w-full" />
          </div>
          <div className="space-y-8 text-lg text-slate-700">
            <p>A Sacerdotisa Azara só consegue realizar um número limitado de rituais por semana. A energia dela não é infinita. Quando as vagas acabam, acabam — até ela se recuperar.</p>
            <p>Se você fechar esta página e voltar amanhã, sua vaga pode já ter sido tomada.</p>
            <p>Cada noite que você espera é mais uma noite em que ele se afasta.</p>
            <p>Mais uma noite em que ela crava as garras mais fundo nele.</p>
            <p>Mais uma noite que você perde.</p>
            <p className="font-black text-red-700 text-2xl uppercase mt-12 tracking-tighter">E Aqui Está a Verdade Mais Sombria…</p>
            <p>Esta página pode não ficar no ar.</p>
            <p>Eles já tentaram enterrar esse ritual antes.</p>
            <p>Terapeutas, coaches de relacionamento, toda a indústria de “autoajuda” — eles adorariam ver isso desaparecer.</p>
            <p>Porque quando mulheres têm esse poder, os homens não têm chance.</p>
            <p>Não posso prometer que esta página estará aqui amanhã.</p>
            <p>But posso prometer isto:</p>
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-left space-y-4">
              <p className="flex items-center gap-3 font-bold text-slate-900">👉 Se você agir agora, a Sacerdotisa Azara começará seu ritual ainda hoje à noite.</p>
              <p className="flex items-center gap-3 font-bold text-red-600">👉 Se você esperar, talvez nunca mais veja esta página — ou ele — novamente.</p>
            </div>
          </div>
        </section>

        {/* Final CTA Buttons */}
        <div className="space-y-6 mb-20">
          <button
            onClick={onStartBinding}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-black text-xl py-8 rounded-[2rem] shadow-[0_20px_40px_rgba(22,163,74,0.4)] transition-all transform hover:scale-[1.02] active:scale-95 uppercase animate-pulse"
          >
            Sim, Estou Pronta – Acender a Chama Agora
          </button>

          {/* Guarantee refined */}
          <section className="bg-white p-10 rounded-[3rem] border-2 border-slate-100 text-center shadow-sm">
            <h2 className="text-2xl font-black mb-6 uppercase text-slate-900">O Risco É 100% Meu</h2>
            <div className="space-y-6 text-lg text-slate-700">
              <p>Você tem 7 dias completos para ver os resultados.</p>
              <p>Se ele não estiver queimando de obsessão por você…</p>
              <p>Se ele não voltar rastejando, implorando pelo seu perdão…</p>
              <p>Se você não ficar completamente chocada com o nível de desesperado dele por você…</p>
              <p>Basta enviar um e-mail e você recebe cada centavo de volta. Sem perguntas. Sem complicações.</p>
              <p className="font-black text-red-700 uppercase">Ou você recupera ele, totalmente devoto a você, ou recebe seu dinheiro de volta.</p>
              <p className="text-2xl font-black">Não há risco.</p>
            </div>
          </section>

          <button
            onClick={onStartBinding}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-black text-xl py-8 rounded-[2rem] shadow-[0_20px_40px_rgba(22,163,74,0.4)] transition-all transform hover:scale-[1.02] active:scale-95 uppercase animate-pulse"
          >
            Garantir Meu Ritual – Estou Pronta
          </button>
        </div>

        {/* FAQ with smoother look */}
        <section className="mb-20">
          <h2 className="text-3xl font-black text-center mb-12 text-slate-900 uppercase tracking-tight">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-[2rem] overflow-hidden hover:border-red-100 transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-7 text-left transition-colors"
                >
                  <span className="font-bold text-slate-900 pr-4 text-lg leading-snug">{f.q}</span>
                  <div className={`p-2 rounded-full bg-slate-50 transition-transform duration-300 ${openFaq === i ? 'rotate-180 bg-red-50 text-red-600' : 'text-slate-400'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-7 pt-0 text-slate-600 text-lg leading-relaxed border-t border-slate-50 mt-2">
                    {f.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final Super CTA */}
        <div className="text-center pb-20">
          <button
            onClick={onStartBinding}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-black text-xl py-8 rounded-[2rem] shadow-[0_20px_40px_rgba(22,163,74,0.4)] transition-all transform hover:scale-[1.02] active:scale-95 uppercase animate-pulse"
          >
            Tenho Certeza – Acender a Chama Agora
          </button>
          
          <div className="mt-12 flex justify-center gap-6 opacity-30 grayscale grayscale-0 hover:grayscale transition-all duration-700">
            <Flame className="w-8 h-8 text-red-600" />
            <span className="font-black text-slate-900 uppercase tracking-[0.4em] text-[10px] mt-2">Ritual do Fogo Sagrado</span>
            <Flame className="w-8 h-8 text-red-600" />
          </div>
        </div>

      </div>

      {/* Footer minimal & premium */}
      <footer className="bg-slate-50 py-16 px-6 text-center border-t border-slate-100">
        <div className="max-w-2xl mx-auto space-y-6">
           <div className="flex justify-center items-center gap-4 text-slate-300 mb-8">
              <div className="h-[1px] w-12 bg-slate-200"></div>
              <Flame className="w-5 h-5" />
              <div className="h-[1px] w-12 bg-slate-200"></div>
           </div>
           <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] leading-relaxed">
             © 2024 • Sacerdotisa Azara • Todos os direitos reservados <br/>
             <span className="opacity-50 mt-2 block">Este site utiliza cookies para melhorar sua experiência.</span>
           </p>
        </div>
      </footer>
    </div>
  );
};

export default FireRitual;
