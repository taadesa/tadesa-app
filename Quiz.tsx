
import React from 'react';
import { UserStats, Word } from '../types';

interface HomeProps {
  stats: UserStats;
  dailyWord: Word;
  onStartQuiz: () => void;
  onNavigateReview: () => void;
  onNavigateTopics: () => void;
}

const Home: React.FC<HomeProps> = ({ stats, dailyWord, onStartQuiz, onNavigateReview, onNavigateTopics }) => {
  const progressPercent = Math.min((stats.completedToday / stats.dailyGoal) * 100, 100);

  return (
    <div className="pb-32 pt-8 px-6">
      <header className="py-4 flex justify-between items-start">
        <div className="flex flex-col">
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">שלום, יוסי</span>
          <h1 className="text-2xl font-bold text-slate-900">מוכן ללמוד? 🚀</h1>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="bg-orange-100 px-3 py-1 rounded-full flex items-center gap-1 border border-orange-200">
            <span className="material-icons text-orange-500 text-lg">local_fire_department</span>
            <span className="text-orange-700 font-bold">{stats.streak}</span>
          </div>
          <div className="bg-blue-100 px-3 py-1 rounded-full flex items-center gap-1 border border-blue-200">
            <span className="material-icons text-blue-500 text-sm">stars</span>
            <span className="text-blue-700 font-bold text-xs">{stats.xp} XP</span>
          </div>
        </div>
      </header>

      {/* Hero Daily Goal Card */}
      <section className="mt-4 bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-slate-800 font-bold text-lg">היעד היומי שלך</h2>
          <p className="text-sm text-slate-500">נשאר לך עוד {Math.max(stats.dailyGoal - stats.completedToday, 0)} מילים</p>
          <button 
            onClick={onStartQuiz}
            className="mt-4 bg-primary text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
          >
            המשך למידה
          </button>
        </div>
        <div className="relative flex items-center justify-center w-24 h-24">
          <svg className="w-full h-full transform -rotate-90">
            <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-100" />
            <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="251.2" strokeDashoffset={251.2 - (251.2 * progressPercent) / 100} strokeLinecap="round" className="text-primary transition-all duration-1000" />
          </svg>
          <span className="absolute text-lg font-bold text-slate-800">{Math.round(progressPercent)}%</span>
        </div>
      </section>

      {/* Fast Navigation */}
      <section className="mt-8 grid grid-cols-2 gap-4">
        <button 
          onClick={onNavigateTopics}
          className="bg-indigo-50 border border-indigo-100 p-4 rounded-2xl flex flex-col items-center gap-2 hover:bg-indigo-100 transition-colors"
        >
          <span className="material-icons text-indigo-500">grid_view</span>
          <span className="font-bold text-indigo-700 text-sm">בחר נושא</span>
        </button>
        <button 
          onClick={onNavigateReview}
          className="bg-rose-50 border border-rose-100 p-4 rounded-2xl flex flex-col items-center gap-2 hover:bg-rose-100 transition-colors"
        >
          <span className="material-icons text-rose-500">history</span>
          <span className="font-bold text-rose-700 text-sm">חזרה על טעויות</span>
        </button>
      </section>

      {/* Word of the Day */}
      <section className="mt-8">
        <h2 className="text-slate-800 font-bold mb-4">מילת היום</h2>
        <div className="relative rounded-3xl overflow-hidden aspect-[16/9] shadow-lg group">
          <img src={dailyWord.image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={dailyWord.word} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 right-0 left-0 p-6 text-white">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-300">{dailyWord.category}</span>
                <h3 className="text-3xl font-bold mt-1 tracking-tight" dir="ltr">{dailyWord.word}</h3>
                <p className="text-lg font-medium opacity-90">{dailyWord.translation}</p>
              </div>
              <button className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
                <span className="material-icons">volume_up</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
