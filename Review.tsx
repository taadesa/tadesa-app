
import React from 'react';
import { UserStats } from '../types';

interface SummaryProps {
  stats: UserStats;
  onHome: () => void;
  onReview: () => void;
}

const Summary: React.FC<SummaryProps> = ({ stats, onHome, onReview }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 overflow-y-auto px-6 pt-12 pb-40">
        <div className="relative text-center mb-8 pt-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
            <span className="material-icons text-primary text-5xl">celebration</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">כל הכבוד!</h1>
          <p className="text-slate-500 font-medium">עשית התקדמות מדהימה היום באנגלית!</p>
        </div>

        <div className="bg-primary/5 rounded-3xl p-6 border border-primary/10 mb-6">
          <div className="flex justify-between items-center">
            <div className="text-right">
              <p className="text-sm text-slate-500 mb-1">ציון סופי</p>
              <h2 className="text-5xl font-bold text-primary">90%</h2>
            </div>
            <div className="relative w-24 h-24">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path className="text-primary/10 stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3" />
                <path className="text-primary stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeDasharray="90, 100" strokeLinecap="round" strokeWidth="3" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-icons text-primary text-3xl">emoji_events</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <span className="material-icons text-orange-500 mb-2">menu_book</span>
              <p className="text-2xl font-bold text-slate-800">10</p>
              <p className="text-xs text-slate-500">מילים חדשות</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <span className="material-icons text-emerald-500 mb-2">timer</span>
              <p className="text-2xl font-bold text-slate-800">15</p>
              <p className="text-xs text-slate-500">דקות למידה</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-slate-800">רצף למידה</h3>
            <div className="flex items-center gap-1 text-orange-500 font-bold">
              <span>{stats.streak + 1} ימים</span>
              <span className="material-icons">local_fire_department</span>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 flex justify-between">
            {['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'].map((day, i) => (
              <div key={day} className="flex flex-col items-center gap-2">
                <span className="text-[10px] text-slate-400 font-bold uppercase">{day}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${i < 6 ? 'bg-primary shadow-lg shadow-primary/20' : 'bg-white border-2 border-primary text-primary animate-pulse'}`}>
                  <span className="material-icons text-sm">{i < 6 ? 'check' : 'bolt'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-2xl border border-yellow-200">
          <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center text-white rotate-3">
            <span className="material-icons">auto_awesome</span>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 text-sm">הישג חדש נפתח!</h4>
            <p className="text-xs text-slate-600">השלמת 100 מילים ראשונות באנגלית.</p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/80 backdrop-blur-md border-t border-slate-100 space-y-3 max-w-md mx-auto">
        <button 
          onClick={onHome}
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
        >
          חזרה למסך הבית
          <span className="material-icons">home</span>
        </button>
        <button 
          onClick={onReview}
          className="w-full bg-primary/10 hover:bg-primary/20 text-primary font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2"
        >
          נתח טעויות ורמות
          <span className="material-icons text-sm">analytics</span>
        </button>
      </div>
    </div>
  );
};

export default Summary;
