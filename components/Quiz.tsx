import React, { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import { ChevronRight } from 'lucide-react';

interface QuizProps {
  onComplete: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Ensure scroll to top happens whenever the question changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentQuestionIndex]);

  const handleOptionClick = () => {
    // Instant transition - no timeout, no fade state
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      onComplete();
    }
  };

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  
  return (
    <div className="w-full min-h-screen relative flex flex-col">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://i.imgur.com/qAmn03p.jpeg)' }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]"></div>
      </div>

      {/* Content Container - Removed 'justify-center' to ensure it starts at the top */}
      <div className="relative z-10 w-full max-w-md mx-auto px-6 pt-10 pb-20 flex-grow flex flex-col">
        
        <div className="flex flex-col items-center w-full">
          {/* Question Counter */}
          <p className="text-gray-500 text-sm font-medium uppercase tracking-widest mb-6">
            Resposta {currentQuestionIndex + 1} de 6
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 leading-snug drop-shadow-md text-center break-words w-full">
            {currentQuestion.question}
          </h2>
          
          {currentQuestion.subtext && (
            <p className="text-gray-300 mb-8 text-sm italic drop-shadow text-center px-2 leading-relaxed break-words w-full">
              {currentQuestion.subtext}
            </p>
          )}

          {currentQuestionIndex === 1 && (
            <div className="w-full mb-6">
              <p className="text-red-300 text-xs font-semibold bg-red-900/40 p-3 rounded border border-red-500/30 backdrop-blur-md text-center leading-relaxed">
                💔 87% das mulheres com esses sinais têm uma conexão destinada tentando emergir
              </p>
            </div>
          )}

          <div className="w-full space-y-3">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={handleOptionClick}
                className="w-full text-left p-4 bg-gray-900/60 hover:bg-gray-800/80 text-gray-100 rounded-xl border border-gray-700/50 hover:border-purple-500 transition-all flex items-center justify-between group backdrop-blur-sm active:scale-[0.99]"
              >
                <span className="flex-1 font-medium leading-snug pr-2 break-words">{option}</span>
                <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-purple-400 flex-shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;