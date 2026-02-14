
import React, { useState, useEffect } from 'react';
import { Word } from '../types';
import { wordBank } from '../data/wordBank';

interface QuizProps {
  words: Word[];
  userXP: number;
  onSpendXP: (amount: number) => boolean;
  onComplete: (learnedIds: string[], mistakes: string[], earnedXP: number) => void;
  onCancel: () => void;
}

const Quiz: React.FC<QuizProps> = ({ words, userXP, onSpendXP, onComplete, onCancel }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [options, setOptions] = useState<Word[]>([]);
  const [hiddenOptions, setHiddenOptions] = useState<string[]>([]);
  const [learnedIds, setLearnedIds] = useState<string[]>([]);
  const [mistakeIds, setMistakeIds] = useState<string[]>([]);
  const [totalXP, setTotalXP] = useState(0);

  const currentWord = words[currentIndex];

  useEffect(() => {
    if (currentWord) {
      const wrong = wordBank
        .filter(w => w.id !== currentWord.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      setOptions([...wrong, currentWord].sort(() => 0.5 - Math.random()));
      setHiddenOptions([]);
    }
  }, [currentIndex, currentWord]);

  const handleUseHint = () => {
    if (isCorrect !== null || hiddenOptions.length >= 2) return;
    
    if (onSpendXP(20)) {
      const wrongOptions = options.filter(opt => opt.id !== currentWord.id && !hiddenOptions.includes(opt.id));
      if (wrongOptions.length > 0) {
        setHiddenOptions(prev => [...prev, wrongOptions[0].id]);
      }
    } else {
      alert("אין לך מספיק XP לרמז!");
    }
  };

  const handleCheck = () => {
    const correct = selectedId === currentWord.id;
    setIsCorrect(correct);
    
    if (correct) {
      setLearnedIds(prev => [...prev, currentWord.id]);
      setTotalXP(prev => prev + 10);
    } else {
      setMistakeIds(prev => [...prev, currentWord.id]);
    }

    setTimeout(() => {
      if (currentIndex < words.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setSelectedId(null);
        setIsCorrect(null);
      } else {
        onComplete(learnedIds, mistakeIds, totalXP);
      }
    }, 1500);
  };

  if (!currentWord) return null;

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${isCorrect === true ? 'bg-green-50' : isCorrect === false ? 'bg-red-50' : 'bg-background-light'}`}>
      <header className="px-6 py-6 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <button onClick={onCancel} className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
            <span className="material-icons text-slate-500">close</span>
          </button>
          
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-blue-100 rounded-full border border-blue-200 flex items-center gap-1">
              <span className="material-icons text-blue-500 text-xs">stars</span>
              <span className="text-[10px] font-bold text-blue-700">{userXP} XP</span>
            </div>
            <div className="px-3 py-1 bg-white rounded-full border border-slate-100 shadow-sm text-xs font-bold text-primary">
              {currentIndex + 1} / {words.length}
            </div>
          </div>
        </div>
        <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full bg-primary transition-all duration-500" style={{ width: `${((currentIndex + 1) / words.length) * 100}%` }}></div>
        </div>
      </header>

      <main className="flex-1 px-6 flex flex-col justify-center gap-8">
        <div className="text-center space-y-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">קטגוריה: {currentWord.category}</p>
          <h2 className="text-5xl font-black text-slate-900 tracking-tight" dir="ltr">{currentWord.word}</h2>
          <button className="mx-auto w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
            <span className="material-icons">volume_up</span>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {options.map((option) => (
            <button
              key={option.id}
              disabled={hiddenOptions.includes(option.id) || isCorrect !== null}
              onClick={() => setSelectedId(option.id)}
              className={`p-5 rounded-2xl border-2 font-bold text-lg transition-all text-right flex items-center justify-between ${
                hiddenOptions.includes(option.id) ? 'opacity-0 pointer-events-none' : 
                selectedId === option.id 
                  ? (isCorrect === true ? 'bg-green-500 border-green-500 text-white' : isCorrect === false ? 'bg-red-500 border-red-500 text-white' : 'bg-primary border-primary text-white') 
                  : 'bg-white border-slate-100 text-slate-700 hover:border-primary/50 shadow-sm'
              }`}
            >
              <span>{option.translation}</span>
              {selectedId === option.id && !isCorrect && <span className="material-icons text-white/50">radio_button_checked</span>}
              {isCorrect === true && selectedId === option.id && <span className="material-icons">check_circle</span>}
              {isCorrect === false && selectedId === option.id && <span className="material-icons">cancel</span>}
            </button>
          ))}
        </div>
        
        <div className="flex justify-center">
          <button 
            onClick={handleUseHint}
            disabled={isCorrect !== null || hiddenOptions.length >= 2}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm transition-all active:scale-95 ${hiddenOptions.length >= 2 ? 'opacity-50 grayscale' : ''}`}
          >
            <span className="material-icons text-yellow-500 text-sm">lightbulb</span>
            <span className="text-xs font-bold text-slate-600">רמז (-20 XP)</span>
          </button>
        </div>
      </main>

      <footer className="p-6 pb-12">
        <button
          onClick={handleCheck}
          disabled={!selectedId || isCorrect !== null}
          className={`w-full py-5 rounded-2xl font-black text-xl shadow-lg transition-all ${
            !selectedId ? 'bg-slate-200 text-slate-400' : 'bg-primary text-white shadow-primary/20 active:scale-95'
          }`}
        >
          {isCorrect === true ? 'מדהים! ✨' : isCorrect === false ? 'אופס... פעם הבאה' : 'בדוק תשובה'}
        </button>
      </footer>
    </div>
  );
};

export default Quiz;
