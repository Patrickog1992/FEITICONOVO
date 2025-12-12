import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, Heart, ThumbsUp, Star, ShieldCheck, Lock, Sparkles } from 'lucide-react';
import { CHECKOUT_URL, TESTIMONIALS } from '../constants';

// --- Internal Component for the Popup ---
const SocialProofPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('');
  const [city, setCity] = useState('');

  const names = [
    { name: "Juliana S.", city: "São Paulo" },
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
    // Initial delay before first popup
    const timeout = setTimeout(() => {
      triggerPopup();
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  const triggerPopup = () => {
    // Pick random person
    const randomPerson = names[Math.floor(Math.random() * names.length)];
    setName(randomPerson.name);
    setCity(randomPerson.city);
    setIsVisible(true);

    // Hide after 4 seconds
    setTimeout(() => {
      setIsVisible(false);
      
      // Schedule next popup (random time between 8 and 15 seconds)
      const nextTime = Math.floor(Math.random() * (15000 - 8000 + 1) + 8000);
      setTimeout(triggerPopup, nextTime);
    }, 4000);
  };

  return (
    <div 
      className={`fixed top-4 right-4 z-50 transition-all duration-700 ease-in-out transform ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-gray-900/95 backdrop-blur-md border-l-4 border-green-500 rounded-r-lg shadow-2xl p-3 flex items-center gap-3 max-w-[280px]">
        <div className="bg-green-500/20 p-2 rounded-full flex-shrink-0">
          <Sparkles className="w-4 h-4 text-green-400" />
        </div>
        <div>
          <p className="text-xs font-bold text-white leading-tight">
            {name} <span className="text-gray-500 font-normal">de {city}</span>
          </p>
          <p className="text-[10px] text-gray-300 leading-tight mt-0.5">
            acabou de receber o feitiço ✨
          </p>
        </div>
      </div>
    </div>
  );
};

interface SalesPageProps {
  onStart: () => void;
}

const SalesPage: React.FC<SalesPageProps> = ({ onStart }) => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    setCurrentDate(date.toLocaleDateString('pt-BR', options));
  }, []);

  const handleCTA = () => {
    window.scrollTo(0, 0);
    onStart();
  };

  return (
    <div className="w-full min-h-screen bg-[#0f0f0f] text-gray-100 font-poppins pb-20 relative overflow-x-hidden">
      
      {/* Social Proof Popup Component */}
      <SocialProofPopup />

      {/* Top Banner - Estático (rola junto com o texto) */}
      <div className="bg-red-600 p-3 text-center">
        <p className="text-sm font-medium text-white">
          ⚡ ATENÇÃO: No dia <span className="text-yellow-300 font-bold">{currentDate}</span>, as energias cósmicas estão mais abertas e o feitiço de Lady Soraya será até 3x mais forte, aproveite!
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-6 pt-8">
        
        {/* Headline Section */}
        <div className="text-center mb-8">
          <p className="text-purple-400 uppercase tracking-widest text-xl font-bold mb-4">Último desejo de Lady Soraya</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Ajudar 3737 pessoas a encontrarem o amor de suas vidas, seja ele um amor perdido… ou um novo amor predestinado.
          </h1>
          
          <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/20 mb-8">
            <h3 className="text-xl font-bold text-purple-300 mb-2">A Sacerdotisa do Amor revela:</h3>
            <p className="text-lg text-gray-200">
              💘 O feitiço proibido capaz de despertar um amor tão poderoso que une duas almas recuperando o que foi perdido ou atraindo alguém totalmente novo e destinado a você.
            </p>
          </div>
        </div>

        {/* Hero Image - Carregamento padrão (Eager) para aparecer rápido */}
        <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
          <img src="https://i.imgur.com/FxiYsRl.jpg" alt="Lady Soraya Mystery" className="w-full object-cover" />
        </div>

        {/* Hook */}
        <div className="prose prose-invert max-w-none mb-10 text-gray-300 leading-relaxed space-y-4">
          <p className="text-lg font-medium text-white">
            Mesmo que exista outra pessoa na história… Mesmo que ela esteja distante… Mesmo que não esteja “pronta” para um compromisso.
          </p>
          <p>
            O que você está prestes a descobrir nos próximos 2 minutos vai mudar sua vida amorosa para sempre.
          </p>
          <p>
            Mas antes de continuar...
          </p>
          <div className="bg-red-950/30 p-6 rounded-xl border-l-4 border-red-600 my-6">
            <p className="font-bold text-red-200 italic">
              Quero que você entenda que o feitiço de amor que vou te revelar é irreversível. Uma vez que você use este feitiço proibido na pessoa que escolher... Não há volta. A única forma de quebrar este feitiço é — a morte. Ou seja, será mesmo até o fim.
            </p>
          </div>
        </div>

        {/* Bullet Points */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Veja exatamente o que vai acontecer:</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <span>Um desejo ardente acende o coração da pessoa destinada a você — mesmo se vocês não se falam há anos.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <span>A mente dela será tomada por pensamentos sobre você.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <span>Mensagens, sinais, aproximações… começam espontaneamente.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <span>Se for um novo amor: a pessoa ideal cruza seu caminho “por acaso”, como se o universo empurrasse vocês dois.</span>
            </li>
          </ul>
        </div>

        {/* Story Intro */}
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-10">
          <p>
            Parece inacreditável, não é? Eu também pensei o mesmo. Mas agora eu sei a verdade. Mesmo sendo cética... Esse feitiço funcionou pra mim. Muito melhor do que eu jamais imaginei. Porque hoje, eu vivo o relacionamento dos meus sonhos.
          </p>
        </div>

        <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl">
          <img src="https://i.imgur.com/2o8Kpgj.jpg" alt="Casal Feliz" className="w-full" loading="lazy" decoding="async" />
        </div>

        {/* Jessica Story */}
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-10">
          <p className="italic text-sm text-gray-500">(Essa história funciona para você independente do seu gênero)</p>
          <p>
            Meu nome é Jessica. E, pra ser sincera, tenho até um pouco de vergonha de contar essa história.
          </p>
          <p>
            Nos últimos meses, estávamos emocionalmente distantes... E parecia que a cada dia nos afastávamos mais.
          </p>
          <p>
            O nome dele é Andre.
          </p>
          <p>
            Tudo começou com fogo e paixão. Ele me viu olhando pra ele de longe, no bar de vinhos favorito dele. Quando se aproximou, borboletas tomaram conta do meu estômago. Os ombros largos, os braços fortes, a voz suave... era impossível resistir. Só o som da voz dele fazia meu coração derreter.
          </p>
        </div>

        <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl">
          <img src="https://i.imgur.com/A6UzkcN.jpg" alt="Andre" className="w-full" loading="lazy" decoding="async" />
        </div>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-10">
          <p>
            Meus amigos me avisaram: “Ele é encrenca.” Mas eu ignorei. As primeiras semanas foram um furacão de romance, amor e desejo. Parecia cena de filme. Havia faísca em cada toque. Ele me mandava mensagens o tempo todo, me fazia rir, me fazia me sentir única. E o olhar dele me dizia que éramos destinados um ao outro.
          </p>
          <p>
            Até que aconteceu... de novo. Como em todos os outros relacionamentos anteriores... Senti a mudança. Ele começou a se afastar. As mensagens de hora em hora viraram “umas duas por dia”. Os convites pra me ver viraram “estou ocupado”. E, de repente, o amor virou distância e silêncio. O olhar apaixonado virou um olhar vazio e frio.
          </p>
          <p className="font-bold text-white">Antes que eu pudesse entender o que estava acontecendo...</p>
        </div>

        <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl">
          <img src="https://i.imgur.com/mB5bADi.jpg" alt="Tristeza" className="w-full" loading="lazy" decoding="async" />
        </div>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-10">
          <p>
            Fui enviada numa viagem de trabalho de última hora. Destino: Dubai. A cidade das possibilidades. Pensei que seria o lugar perfeito pra colocar a cabeça no lugar. Mas, na verdade, eu estava me preparando pro pior.
          </p>
          <p>
            Na primeira noite, fui a um bar. Pedi uma bebida atrás da outra. Conversei com o bartender, e... acabei contando tudo sobre o Andre. O quanto eu sentia que éramos almas gêmeas, mas ele simplesmente não via isso.
          </p>
          <p>
            Foi então que ele me contou sobre a mulher que mudaria minha vida.
          </p>
        </div>

        <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl border border-purple-500/30">
          <img src="https://i.imgur.com/E2JblYn.jpg" alt="Lady Soraya Portrait" className="w-full" loading="lazy" decoding="async" />
        </div>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-10">
          <h3 className="text-2xl font-bold text-purple-300">Uma sacerdotisa dos “artes arcanas”, chamada Lady Soraya.</h3>
          <p>
            Vivia isolada no deserto, a horas dali. Todos os moradores locais sabiam sobre ela. Lady Soraya nasceu em um dos covens mais poderosos do deserto da Arábia, especializado em magia vermelha — a magia do amor, da paixão e do romance.
          </p>
          <p>
            Mas, ao envelhecer, ela se afastou das irmãs do coven... Enquanto elas mergulhavam nas artes sombrias, Soraya se dedicava ao amor verdadeiro.
          </p>
          <p>
            Uma noite, ao ver um sacrifício proibido, ela fugiu sob o véu da noite. E há mais de 30 anos, vive naquela mesma região... Ajudando as pessoas a encontrarem o amor verdadeiro.
          </p>
          <p>
            Normalmente, eu teria rido dessa história. Sou uma mulher racional. Mas... eu estava sem opções. Pedi o endereço dela. E decidi ir no dia seguinte.
          </p>
          <p className="font-bold text-white">Aquele seria o dia que mudaria minha vida amorosa pra sempre.</p>
        </div>

        <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl">
          <img src="https://i.imgur.com/0kAi4NR.jpg" alt="Casa no Deserto" className="w-full" loading="lazy" decoding="async" />
        </div>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-10">
          <p>
            A viagem foi longa. Mas, ao chegar, parecia que eu tinha atravessado um portal para outro mundo. A casa era de barro antigo, com o teto gasto e uma porta coberta por símbolos estranhos. Parei por um instante, respirei fundo... e bati.
          </p>
        </div>

        <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl">
          <img src="https://i.imgur.com/t5lBzeb.jpg" alt="Porta Misteriosa" className="w-full" loading="lazy" decoding="async" />
        </div>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-10">
          <p>
            A porta se abriu. E lá estava ela. Linda, misteriosa, com um olhar que parecia ter séculos de sabedoria. “Minha querida, eu já estava te esperando”, ela disse com voz calma. “Eu senti a sua dor desde que chegou à cidade.”
          </p>
          <p>
            “Meu nome é Lady Soraya.” “Diga-me, o que está te afligindo?”
          </p>
          <p>
            Contei tudo. Sobre o Andre. Sobre como sentia que ele era o homem da minha vida... E sobre como me sentia perdida, impotente e cansada. Ela ouviu atentamente. Depois sorriu:
          </p>
          <div className="pl-4 border-l-4 border-purple-500 italic text-purple-200">
            <p className="mb-2">“Você veio ao lugar certo, minha querida.”</p>
            <p className="mb-2">“Desde jovem, dedico minha vida à magia do amor.”</p>
            <p className="mb-2">“E aprendi a diferença entre o amor passageiro e o amor eterno.”</p>
            <p className="mb-2">“Com sua permissão...”</p>
            <p>“Eu quero lançar um feitiço que fará ele DEVOTAR-SE a você.”</p>
          </div>
        </div>

        <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl">
          <img src="https://i.imgur.com/3lh5nwV.jpg" alt="Ritual Mágico" className="w-full" loading="lazy" decoding="async" />
        </div>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-10">
          <p>
            “Um amor recíproco, profundo... algo de outro mundo.”
          </p>
          <p>
            “Mas este não é um feitiço comum.”
          </p>
          <p>
            “Este ritual foi criado para alinhar duas almas que nasceram uma para a outra.”
          </p>
          <p>
            “Se a sua alma já reconheceu alguém do passado, o feitiço traz essa pessoa de volta.”
          </p>
          <p>
            “Mas se o seu amor verdadeiro ainda não chegou, o feitiço coloca no seu caminho alguém totalmente novo… porém destinado a você.”
          </p>
          <p>
            “Este feitiço desperta a devoção, e não a ilusão.”
          </p>
          <p>
            “Quando eu o lançar, a pessoa que é sua por destino — seja alguém que já esteve na sua vida ou alguém novo — perceberá de corpo e alma que você é o amor dela.”
          </p>
          <p>
            “E nunca mais conseguirá imaginar ser feliz ao lado de outra pessoa.”
          </p>
          <div className="bg-red-900/20 p-4 rounded-lg">
            <p className="font-bold text-red-400">“Mas preciso te avisar... Uma vez lançado, ele é permanente.”</p>
          </div>
          <p>
            Respirei fundo. E disse: Sim.
          </p>
          <p>
            Mesmo que fosse loucura... Mesmo que não funcionasse... Se houvesse 1% de chance, valeria a pena. Ela apenas disse: “Volte em dois dias.”
          </p>
          <p>
            Os dois dias mais longos da minha vida. Na primeira noite, nada. Na segunda, nada. Já achava que tinha sido um erro...
          </p>
        </div>

        <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl">
          <img src="https://i.imgur.com/z43budv.jpg" alt="Esperando Mensagem" className="w-full" loading="lazy" decoding="async" />
        </div>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-10">
          <p>
            Quando, antes de dormir, meu celular vibrou. Uma mensagem dele. "Eu sei que tenho agido estranho... mas desde que você viajou, percebi que você é a única pra mim. Quero consertar tudo quando você voltar."
          </p>
        </div>

        <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl max-w-xs mx-auto">
          <img src="https://i.imgur.com/M74c34N.png" alt="Mensagem Recebida" className="w-full" loading="lazy" decoding="async" />
        </div>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-12">
          <p>
            Meu coração quase parou. O feitiço funcionou. No dia seguinte, fui correndo até a cabana de Lady Soraya. Contei tudo. Ela sorriu, emocionada... mas logo seu olhar ficou sério.
          </p>
          <p>
            “Minha querida... eu vivo sozinha desde que deixei meu coven. O que me traz alegria é ajudar mulheres e homens como você a encontrarem o amor verdadeiro. Mas são poucas as que chegam até mim.”
          </p>
          <p>
            “Você pode me ajudar a espalhar essa bênção?”
          </p>
          <p>
            Foi aí que tive uma ideia. Criamos um site para que pessoas do mundo todo pudessem receber o feitiço de amor de Lady Soraya. Ela ficou radiante. “Meu desejo sempre foi ajudar 3737 pessoas a encontrarem o amor verdadeiro.” “E agora... você me deu essa chance.”
          </p>
        </div>

        {/* Offer Section */}
        <div className="bg-gradient-to-b from-purple-900/20 to-black p-4 md:p-8 rounded-3xl border border-purple-500/30 mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          
          <h2 className="text-3xl font-bold text-center text-white mb-8">Agora é a sua vez.</h2>

          <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
            <img src="https://i.imgur.com/G6zb4jR.jpg" alt="Sua Vez" className="w-full" loading="lazy" decoding="async" />
          </div>

          <div className="bg-gray-800/60 p-6 rounded-xl mb-8">
            <h3 className="text-xl font-bold text-purple-300 mb-4">💗 As pessoas que procuram Lady Soraya hoje se dividem em dois caminhos:</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                <p className="text-gray-200">Quem quer trazer um amor de volta — alguém que se afastou, esfriou, sumiu, bloqueou ou parece distante.</p>
              </div>
              <div className="flex gap-4">
                <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                <p className="text-gray-200">Quem quer atrair um novo amor verdadeiro — pessoas solteiras, cansadas de encontros vazios, que sentem que nunca encontram alguém compatível ou “feito pra elas”.</p>
              </div>
            </div>
          </div>

          <p className="text-gray-300 text-center mb-8">
            Lady Soraya explica que os dois caminhos são sagrados e legítimos — e o feitiço atua conforme a energia do seu coração.
          </p>

          <div className="text-center space-y-4 mb-10">
            <p className="text-lg font-medium text-white">
              Agora você pode lançar um poderoso feitiço de amor na pessoa que é o seu destino — mesmo que esse destino seja alguém do passado ou alguém totalmente novo que ainda não chegou.
            </p>
            <p className="text-gray-400 text-sm">
              E mesmo que você não tenha ninguém específico em mente, o feitiço também funciona: Ele atrai a pessoa certa um novo amor predestinado que combina exatamente com a sua energia.
            </p>
          </div>

          {/* Pricing - PADDING AJUSTADO PARA MOBILE */}
          <div className="bg-purple-900/30 p-4 md:p-8 rounded-2xl border-2 border-purple-500/50 text-center mb-10 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg w-max">
              Oferta Sagrada Limitada
            </div>
            
            <p className="text-gray-300 mb-4 mt-2">
              E quanto isso custa? Nada comparado ao valor do amor verdadeiro. Lady Soraya não busca lucro — apenas cumprir sua missão. Mas, para manter o site, foi necessário cobrar um valor simbólico.
            </p>
            
            <div className="flex flex-col items-center justify-center my-6">
               <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                 R$ 37,37
               </span>
               <span className="text-purple-300 text-sm mt-2">Um número sagrado para as 3737 pessoas escolhidas</span>
            </div>

            <p className="text-gray-200 font-medium mb-6">
              Mesmo que você esteja passando por dificultades... Mesmo que esteja sofrendo sozinho... Mesmo que tenha perdido as esperanças... Este é o seu sinal.
            </p>

            <p className="text-green-400 font-bold text-lg mb-8">
              ✨ Por apenas R$ 37,37 hoje, você pode lançar o feitiço que fará qualquer pessoa te amar eternamente. ✨
            </p>

            <div className="mb-6">
                <img src="https://i.imgur.com/rGTHQev.jpg" alt="Conexão Eterna" className="w-full rounded-lg shadow-lg" loading="lazy" decoding="async" />
            </div>

            <div className="bg-black/40 p-6 rounded-xl text-left mb-8 space-y-3">
              <p className="font-bold text-red-400 mb-2">Mas lembre-se: Este feitiço é poderoso e permanente. Por isso, só está disponível para pessoas que concordam com os seguintes termos:</p>
              <div className="flex gap-2 items-start">
                <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 shrink-0" />
                <span className="text-sm">Acredito que o amor verdadeiro é possível.</span>
              </div>
              <div className="flex gap-2 items-start">
                <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 shrink-0" />
                <span className="text-sm">Não revelarei a ninguém que lancei o feitiço (isso causa “quebra do encanto”).</span>
              </div>
              <div className="flex gap-2 items-start">
                <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 shrink-0" />
                <span className="text-sm">Entendo que, uma vez lançado, não há retorno.</span>
              </div>
            </div>

            <p className="font-bold text-white text-center mb-4">Se você concorda... 👉 Clique no botão abaixo:</p>

            <button
              onClick={handleCTA}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-extrabold text-xl py-5 rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.4)] transform transition hover:scale-[1.02] animate-pulse uppercase flex flex-col items-center"
            >
              <span>LANÇAR FEITIÇO AGORA</span>
              <span className="text-xs font-normal opacity-90 mt-1">💫 Funciona ainda hoje à noite 💫</span>
            </button>
            
            <div className="mt-6 text-xs text-gray-500 space-y-2">
                <p>A partir daí, você será direcionada para um formulário de pedido 100% seguro.</p>
                <p>Isso nos ajuda a manter o site no ar.</p>
                <p>Assim que preencher seus dados... Você será levada a um pequeno quiz.</p>
                <p>Esse quiz ajudará Lady Soraya a lançar o feitiço com o máximo de poder e precisão possível.</p>
                <p className="text-white font-bold mt-4">✨ Seu feitiço será lançado dentro de 24 horas. ✨</p>
            </div>
          </div>
        </div>

        {/* CTA 2 */}
        <div className="text-center mb-16">
          <p className="text-xl text-gray-200 mb-4">
            E, em apenas alguns dias... Você vai olhar para este momento e sorrir,
          </p>
          <p className="text-gray-400 mb-6">
            Porque este foi o momento em que sua life amorosa mudou para sempre.
            O dia em que você assumiu o controle. O dia em que o outro finally percebeu...
          </p>
          <h3 className="text-2xl font-bold text-pink-400 mb-8">💖 Vocês são destinados um ao outro. 💖</h3>
          
          <button
            onClick={handleCTA}
            className="w-full max-w-md bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg transform transition hover:scale-[1.02] flex flex-col items-center mx-auto"
          >
            <span>QUERO AGORA</span>
            <span className="text-xs font-normal opacity-90">💫 Funciona ainda hoje à noite 💫</span>
          </button>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center text-white mb-2">Veja algumas almas gêmeas que a Lady Soraya ajudou</h2>
          <p className="text-center text-gray-400 mb-8">Homens e mulheres que recuperaram o amor...</p>
          
          <div className="overflow-hidden relative w-full">
            {/* CARROSEL CORRIGIDO: usa w-max e flex-nowrap para não quebrar a largura e garantir a matemática da animação */}
            <div className="flex gap-4 animate-[scroll_40s_linear_infinite] w-max hover:pause flex-nowrap">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, idx) => (
                <div key={`${testimonial.id}-${idx}`} className="w-[300px] bg-gray-800 p-5 rounded-xl border border-gray-700 flex-shrink-0">
                  <div className="flex items-center gap-3 mb-3">
                    <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full border-2 border-purple-500 object-cover" loading="lazy" decoding="async" />
                    <div>
                      <p className="font-bold text-sm text-white">{testimonial.name}</p>
                      <div className="flex text-yellow-500">
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">"{testimonial.text}"</p>
                  <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-700 pt-2">
                     <span>{testimonial.time}</span>
                     <div className="flex gap-3">
                        <span className="flex items-center gap-1 text-red-400"><Heart className="w-3 h-3 fill-current" /> {testimonial.likes}</span>
                        <span className="flex items-center gap-1 text-blue-400"><ThumbsUp className="w-3 h-3 fill-current" /></span>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="bg-gray-800 rounded-2xl p-8 border border-green-500/30 mb-16 text-center">
            <div className="flex justify-center mb-4">
                <ShieldCheck className="w-16 h-16 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Garantia de Satisfação</h2>
            <p className="text-green-400 font-bold uppercase tracking-widest text-sm mb-6">Selo de Garantia</p>
            
            <p className="text-gray-300 mb-4">
                Lady Soraya confia tanto na experiência que criou uma garantia total:
            </p>
            <p className="text-gray-300 mb-6">
                Se você sentir que o feitiço não funcionou em sua vida amorosa, basta enviar um e-mail no <span className="text-purple-400">contato@ladysoraya.com.br</span> dentro do prazo de 24 horas após a compra.
            </p>
            <p className="font-bold text-white text-lg mb-2">👉 Você será 100% reembolsado, sem perguntas.</p>
            <p className="text-sm text-gray-500">Sem burocracia. Sem complicação. Sem risco pra você.</p>
        </div>

        {/* FAQ */}
        <div className="mb-20 space-y-6">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Perguntas Frequentes</h2>
            
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">🔮 Como você receberá o seu feitiço?</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Após a confirmação do seu pedido, Lady Soraya realizará pessoalmente o seu feitiço de amor, seguindo o nome e as informações que você fornecer no formulário. Cada ritual é feito de forma individual e personalizada. Além disso, uma versão especial do feitiço será enviada diretamente para o seu e-mail cadastrado.
                </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="font-bold text-purple-300 mb-2">O que torna o feitiço de Lady Soraya diferente?</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Outros feitiços tentam forçar o amor. Mas Lady Soraya alinha as energias da pessoa amada com a vibração natural do amor e da atração. Assim, ele(a) escolhe te amar — de forma pura e verdadeira.
                </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="font-bold text-purple-300 mb-2">Em quanto tempo funciona?</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Algumas pessoas sentem os efeitos no mesmo dia. Outras, em poucos dias. Mas o resultado sempre vem.
                </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="font-bold text-purple-300 mb-2">Como faço para lançar o feitiço?</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Clique no botão “Lançar Feitiço Agora”. Responda um breve quiz (para personalizar o ritual). Depois, complete o formulário seguro. E, em 24 horas, Lady Soraya lançará o feitiço em seu nome.
                </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="font-bold text-purple-300 mb-2">O feitiço funciona mesmo se eu não tiver ninguém em mente?</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Sim. Nesse caso, Lady Soraya realiza o ritual de “chamada amorosa”, que atrai exatamente a alma que combina com você.
                </p>
            </div>
        </div>

        {/* Final CTA */}
        <div className="bg-purple-900/20 border-t border-purple-500/20 py-10 px-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">✨ Lance seu feitiço de amor agora. ✨</h2>
            <p className="text-gray-400 mb-8">Funciona ainda hoje à noite.</p>
            
            <button
                onClick={handleCTA}
                className="w-full max-w-md bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold text-lg py-5 px-8 rounded-full shadow-lg transform transition hover:scale-[1.02] flex flex-col items-center mx-auto"
            >
                <span>QUERO AGORA</span>
                <span className="text-xs font-normal opacity-90">💫 Funciona ainda hoje à noite 💫</span>
            </button>

            <div className="mt-10 flex justify-center items-center gap-2 text-gray-600 text-xs">
                <Lock className="w-3 h-3" />
                <p>Feitiços do amor todos os DIREITOS RESERVADOS</p>
            </div>
        </div>

      </div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .pause {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default SalesPage;