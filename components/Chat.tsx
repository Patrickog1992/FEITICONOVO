import React, { useState, useEffect, useRef } from 'react';
import { UserData, Message, ChatOption } from '../types';
import { CHECKOUT_URL } from '../constants';
import { Send, Clock, ShieldAlert } from 'lucide-react';

interface ChatProps {
  userData: UserData;
  onUpdatePartner: (name: string) => void;
  onUpdateUser: (name: string, age: string) => void;
}

const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s < 10 ? '0' : ''}${s}`;
};

const getCurrentTime = () => {
  const now = new Date();
  return now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
};

const Chat: React.FC<ChatProps> = ({ userData, onUpdatePartner, onUpdateUser }) => {
  // Timer logic (10 minutes countdown)
  const [timeLeft, setTimeLeft] = useState(600);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [currentOptions, setCurrentOptions] = useState<ChatOption[]>([]);
  
  // Input states
  const [inputMode, setInputMode] = useState<'none' | 'userName' | 'userAge' | 'partnerName'>('none');
  const [inputValue, setInputValue] = useState('');
  
  const [goal, setGoal] = useState<'ex' | 'new'>('ex'); 
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, showOptions, inputMode]);

  const addMessage = (sender: 'bot' | 'user', text: React.ReactNode, delay = 0) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            sender,
            text,
            timestamp: getCurrentTime(),
          },
        ]);
        resolve();
      }, delay);
    });
  };

  const simulateTyping = async (duration: number) => {
    setIsTyping(true);
    await new Promise((resolve) => setTimeout(resolve, duration));
    setIsTyping(false);
  };

  // Initial Sequence: Ask Name -> Ask Age -> Diagnosis
  const startChat = async () => {
    await simulateTyping(1000);
    await addMessage('bot', `Olá... Sinto que o universo te trouxe aqui por um motivo especial.`);
    
    await simulateTyping(2000);
    await addMessage('bot', `Antes de nos conectarmos profundamente com a sua energia...`);
    
    await simulateTyping(1500);
    await addMessage('bot', `Qual é o seu primeiro nome?`);
    setInputMode('userName');
  };

  useEffect(() => {
    startChat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Main Diagnosis Logic (runs after age is collected)
  const proceedToDiagnosis = async (name: string, age: string) => {
    await simulateTyping(1500);
    await addMessage('bot', `Prazer, ${name}. E ${age} anos... é uma idade de grandes transformações espirituais.`);

    await simulateTyping(2500);
    await addMessage('bot', `${name}, eu sinto que sua energia está muito carregada hoje 😰`);
    
    await simulateTyping(3000);
    await addMessage('bot', `Consigo sentir uma angústia no seu peito. Sou a Sarah, especialista em energias amorosas e conexões de destino.`);

    await simulateTyping(3000);
    await addMessage('bot', `Para que eu possa te ajudar da melhor forma, preciso que você seja sincero(a) comigo.`);

    await simulateTyping(2000);
    await addMessage('bot', `O que o seu coração busca desesperadamente agora?`);

    setShowOptions(true);
    setCurrentOptions([
      { id: 'goal_ex', label: 'Quero trazer uma pessoa amada de volta (Reconquista)', nextAction: 'SET_GOAL_EX' },
      { id: 'goal_new', label: 'Quero encontrar um novo amor verdadeiro (Atração)', nextAction: 'SET_GOAL_NEW' },
    ]);
  };

  const handleInputSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    const value = inputValue.trim();
    setInputValue(''); // Clear input

    if (inputMode === 'userName') {
      setInputMode('none');
      await addMessage('user', value);
      
      // Update local state temporarily or just pass to next step logic
      // We will update global state when we have both
      
      await simulateTyping(1500);
      await addMessage('bot', `Entendi. E quantos anos você tem?`);
      setInputMode('userAge');
      // Store name in closure variable for the next step or update global now?
      // Let's update global partly or just wait. 
      // To be safe, let's just trigger the callback with empty age for now or handle it in state.
      // Better: Update global user data with what we have.
      onUpdateUser(value, userData.age); 
      
    } else if (inputMode === 'userAge') {
      setInputMode('none');
      await addMessage('user', `${value} anos`);
      
      onUpdateUser(userData.name, value); // Update global with Name (from prev step) and Age
      
      // Proceed to main flow
      proceedToDiagnosis(userData.name, value);

    } else if (inputMode === 'partnerName') {
      setInputMode('none');
      const pName = value;
      onUpdatePartner(pName);
      
      await addMessage('user', `O nome é ${pName}`);
      
      await simulateTyping(2000);
      await addMessage('bot', `${pName}... espera, estou recebendo leituras de energia muito intensas`);

      await simulateTyping(3000);
      await addMessage('bot', <span className="font-bold">MEU. DEUS. A alma dessa pessoa está GRITANDO por você, mas a mente lógica dela está criando bloqueios enormes.</span>);

      await simulateTyping(3500);
      await addMessage('bot', `É por isso que você sente essa dor — a conexão é REAL em nível cósmico, mas o orgulho ou medo está afastando vocês.`);

      setShowOptions(true);
      setCurrentOptions([
        { id: 'surviving', label: 'Eu sinto isso! Dói demais ficar longe', nextAction: 'RITUAL_INTRO' },
        { id: 'fighting', label: 'Por que isso está acontecendo conosco?', nextAction: 'RITUAL_INTRO' },
        { id: 'stop_running', label: 'Como faço para quebrar esse orgulho?', nextAction: 'RITUAL_INTRO' },
      ]);
    }
  };

  const handleOptionClick = async (option: ChatOption) => {
    setShowOptions(false);
    await addMessage('user', option.label);

    switch (option.nextAction) {
      case 'SET_GOAL_EX':
        setGoal('ex');
        await simulateTyping(2000);
        await addMessage('bot', `Entendo. A dor da separação quando ainda existe amor é insuportável.`);
        await simulateTyping(3000);
        await addMessage('bot', `Sinto que houve um afastamento brusco, talvez silêncio ou frieza... e isso está consumindo seus pensamentos dia e noite.`);
        await simulateTyping(2500);
        await addMessage('bot', `Para eu conectar com a energia específica, qual é o primeiro nome dessa pessoa?`);
        setInputMode('partnerName');
        break;

      case 'SET_GOAL_NEW':
        setGoal('new');
        onUpdatePartner("Seu Amor Destinado"); // Set generic name for context
        await simulateTyping(2000);
        await addMessage('bot', `Entendo perfeitamente. A solidão pode ser devastadora quando você tem tanto amor para dar.`);
        await simulateTyping(3000);
        await addMessage('bot', `Sinto que seus caminhos estão "trancados". Sua alma gêmea existe, está buscando por você, mas as energias não estão se cruzando como deveriam.`);
        await simulateTyping(3000);
        await addMessage('bot', `Você sente que, por mais que tente, parece que o "dedo podre" ou o azar sempre te persegue?`);
        
        setShowOptions(true);
        setCurrentOptions([
          { id: 'bad_luck', label: 'Sim! Parece que nunca encontro a pessoa certa', nextAction: 'RITUAL_INTRO' },
          { id: 'tired', label: 'Estou cansado(a) de esperar e sofrer', nextAction: 'RITUAL_INTRO' },
          { id: 'hope', label: 'Eu só quero ser feliz no amor', nextAction: 'RITUAL_INTRO' },
        ]);
        break;

      case 'RITUAL_INTRO':
        await simulateTyping(2000);
        await addMessage('bot', `Escute com atenção. Existe uma solução, mas ela não é convencional.`);
        await simulateTyping(3500);
        await addMessage('bot', `Existem antigos rituais do Deserto — técnicas proibidas que ignoram a mente lógica e falam diretamente com a alma.`);
        await simulateTyping(3500);
        
        if (goal === 'ex') {
           await addMessage('bot', `Esses métodos são usados há milhares de anos para quebrar orgulho, dissolver mágoas e reacender a paixão instantaneamente.`);
        } else {
           await addMessage('bot', `Esses métodos são usados há milhares de anos para abrir os caminhos do amor e atrair magneticamente a pessoa que foi feita para você.`);
        }

        await simulateTyping(3000);
        await addMessage('bot', `A mulher que me ensinou é Lady Soraya — ela é uma mestre em Alta Magia Amorosa.`);
        
        setShowOptions(true);
        setCurrentOptions([
          { id: 'tell_rituals', label: 'Me conta sobre esses rituais', nextAction: 'SORAYA_PITCH' },
          { id: 'does_work', label: 'Isso realmente funciona?', nextAction: 'SORAYA_PITCH' },
          { id: 'anything', label: 'Eu preciso de uma mudança AGORA', nextAction: 'SORAYA_PITCH' },
        ]);
        break;

      case 'SORAYA_PITCH':
        await simulateTyping(3000);
        await addMessage('bot', `Lady Soraya é especializada em casos de EMERGÊNCIA.`);
        await simulateTyping(4000);
        
        if (goal === 'ex') {
            await addMessage('bot', `Ela realiza o "Ritual de Amarração de Almas". Funciona enquanto a pessoa dorme — enviando uma energia de amor poderosa direto para o subconsciente dela.`);
            await simulateTyping(4000);
            await addMessage('bot', `Dentro de 24–72 horas, essa pessoa começa a ter sonhos intensos com você, um arrependimento avassalador e sente que não consegue viver longe de você.`);
        } else {
            await addMessage('bot', `Ela realiza o "Ritual de Abertura de Caminhos e Atração". Ele remove todo o azar e cria um magnetismo irresistível na sua aura.`);
            await simulateTyping(4000);
            await addMessage('bot', `Dentro de poucos dias, você vai notar olhares diferentes, mensagens inesperadas e o Universo conspirando para colocar a pessoa certa na sua frente.`);
        }

        await simulateTyping(3500);
        await addMessage('bot', `Acabei de verificar… ela tem APENAS UMA vaga para ritual de emergência HOJE À NOITE.\nNormalmente custa R$ 497, mas pela gravidade do seu caso ela abriu uma exceção…`);

        setShowOptions(true);
        setCurrentOptions([
          { id: 'cost', label: 'Quanto custa essa exceção?', nextAction: 'PRICE_REVEAL' },
          { id: 'obsessed', label: goal === 'ex' ? 'Ele/Ela vai voltar mesmo?' : 'Vou encontrar alguém mesmo?', nextAction: 'PRICE_REVEAL' },
        ]);
        break;

      case 'PRICE_REVEAL':
        await simulateTyping(3000);
        await addMessage('bot', `Para te ajudar agora, Lady Soraya fará o ritual completo por apenas R$ 37,37.`);
        await simulateTyping(3000);
        await addMessage('bot', `Mas esse valor expira quando nosso cronômetro chegar a ZERO.\nDepois disso, volta para R$ 497,00.`);
        await simulateTyping(4500);
        
        if (goal === 'ex') {
            await addMessage('bot', `Esse ritual vai deixar ${userData.partnerName || 'essa pessoa'} pensando em você 24 horas por dia.\nVocê aceita recuperar esse amor?`);
        } else {
            await addMessage('bot', `Esse ritual vai transformar sua vida amorosa e atrair quem você merece.\nVocê aceita abrir seu coração?`);
        }

        setShowOptions(true);
        setCurrentOptions([
          { id: 'yes_do_it', label: 'SIM! Quero o ritual HOJE À NOITE', nextAction: 'CHECKOUT' },
          { id: 'guarantee', label: 'É garantido?', nextAction: 'GUARANTEE_EXPLAIN' },
          { id: 'what_happens', label: 'Como funciona?', nextAction: 'PROCESS_EXPLAIN' },
        ]);
        break;

      case 'CHECKOUT':
        await simulateTyping(2000);
        await addMessage('bot', `Perfeito! Estou enviando seu pedido diretamente para o altar de Lady Soraya…`);
        setTimeout(() => {
          window.location.href = CHECKOUT_URL;
        }, 1500);
        break;

      case 'GUARANTEE_EXPLAIN':
        await simulateTyping(3500);
        await addMessage('bot', `Lady Soraya tem uma taxa de sucesso de 94,3% com rituais de emergência.`);
        await simulateTyping(4000);
        await addMessage('bot', `E você tem garantia total de 7 dias. Se nada mudar, você recebe 100% do valor de volta. O risco é todo dela.`);
        
        setShowOptions(true);
        setCurrentOptions([
          { id: 'yes_do_it_2', label: 'SIM! Quero o ritual HOJE À NOITE', nextAction: 'CHECKOUT' },
          { id: 'what_happens_2', label: 'O que acontece no ritual?', nextAction: 'PROCESS_EXPLAIN' },
        ]);
        break;

      case 'PROCESS_EXPLAIN':
        await simulateTyping(3500);
        await addMessage('bot', `Hoje à noite, Lady Soraya usará a energia do cosmos e seu nome para realizar o trabalho.`);
        await simulateTyping(4000);
        if (goal === 'ex') {
            await addMessage('bot', `Ela vai quebrar as barreiras mentais dele(a) e inserir o sentimento de amor profundo novamente.`);
        } else {
            await addMessage('bot', `Ela vai limpar sua aura de bloqueios passados e ativar seu ponto de atração máximo.`);
        }

        setShowOptions(true);
        setCurrentOptions([
          { id: 'yes_do_it_3', label: 'SIM! Quero o ritual HOJE À NOITE', nextAction: 'CHECKOUT' },
          { id: 'guarantee_2', label: 'É garantido?', nextAction: 'GUARANTEE_EXPLAIN' },
        ]);
        break;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#0f0f0f] max-w-md mx-auto relative shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 p-4 flex items-center justify-between z-20 shadow-lg relative">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img 
              src="https://i.imgur.com/nCdT1tV.jpeg" 
              alt="Sarah" 
              className="w-10 h-10 rounded-full object-cover border-2 border-green-500"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
          </div>
          <div>
            <h3 className="font-bold text-white text-sm">Sarah</h3>
            <p className="text-xs text-green-400">Online • Guia Espiritual</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-red-900/30 px-3 py-1 rounded-full border border-red-900/50">
          <Clock className="w-3 h-3 text-red-500" />
          <span className="text-red-500 font-mono font-bold text-sm">{formatTime(timeLeft)}</span>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 chat-scroll relative bg-[#0f0f0f]">
        
        <div className="flex justify-center my-4">
          <span className="text-xs text-gray-400 bg-gray-900/80 border border-gray-700 px-3 py-1 rounded-full flex items-center gap-1">
            <ShieldAlert className="w-3 h-3" /> Chat criptografado de emergência
          </span>
        </div>

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-sm relative ${
                msg.sender === 'user'
                  ? 'bg-purple-700 text-white rounded-tr-sm'
                  : 'bg-gray-800 text-gray-100 rounded-tl-sm border border-gray-700'
              }`}
            >
              <div className="mb-1 whitespace-pre-wrap">{msg.text}</div>
              <p className={`text-[10px] text-right ${msg.sender === 'user' ? 'text-purple-300' : 'text-gray-500'}`}>
                {msg.timestamp}
              </p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="bg-gray-800 rounded-full px-4 py-2 border border-gray-700">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Interactions Area */}
      <div className="bg-gray-900 border-t border-gray-800 p-4 z-20 relative">
        {inputMode !== 'none' && (
          <form onSubmit={handleInputSubmit} className="flex gap-2">
            <input
              type={inputMode === 'userAge' ? 'number' : 'text'}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={
                inputMode === 'userName' ? "Digite seu primeiro nome..." :
                inputMode === 'userAge' ? "Digite sua idade..." :
                "Digite o nome da pessoa..."
              }
              autoFocus
              className="flex-1 bg-gray-800 text-white rounded-full px-4 py-3 outline-none border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-gray-500"
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-full p-3 transition-colors disabled:opacity-50"
              disabled={!inputValue.trim()}
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        )}

        {showOptions && inputMode === 'none' && (
          <div className="flex flex-col gap-2">
            {currentOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionClick(option)}
                className="w-full text-left bg-gray-800 hover:bg-gray-700 text-purple-200 border border-purple-900/30 rounded-xl px-4 py-3 text-sm transition-all active:scale-[0.98] shadow-sm"
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;