
import React from 'react';
import { UserStats } from '../types';

interface LevelSelectProps {
  stats: UserStats;
  onSelect: () => void;
}

const LevelSelect: React.FC<LevelSelectProps> = ({ stats, onSelect }) => {
  return (
    <div className="pb-32 pt-12 px-6">
      <header className="py-4 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-sm text-slate-500 font-medium">בוקר טוב,</span>
          <h1 className="text-2xl font-bold text-slate-900">יוסי 👋</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-orange-100 px-3 py-1 rounded-full flex items-center gap-1 border border-orange-200">
            <span className="material-icons text-orange-500 text-lg">local_fire_department</span>
            <span className="text-orange-700 font-bold">{stats.streak} ימים</span>
          </div>
          <button className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center">
            <span className="material-icons text-slate-600">notifications_none</span>
          </button>
        </div>
      </header>

      <section className="mt-4">
        <h2 className="text-slate-700 font-semibold mb-3 pr-1 text-sm uppercase tracking-wide">רמת למידה</h2>
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          <button onClick={onSelect} className="flex-1 min-w-[100px] bg-primary text-white py-3 px-4 rounded-xl shadow-md flex flex-col items-center gap-1 transition-transform active:scale-95">
            <span className="material-symbols-outlined text-xl">child_care</span>
            <span className="text-xs font-bold">מתחילים</span>
          </button>
          <button onClick={onSelect} className="flex-1 min-w-[100px] bg-white text-slate-600 py-3 px-4 rounded-xl border border-slate-100 flex flex-col items-center gap-1 transition-transform active:scale-95">
            <span className="material-symbols-outlined text-xl">trending_up</span>
            <span className="text-xs font-bold">בינוניים</span>
          </button>
          <button onClick={onSelect} className="flex-1 min-w-[100px] bg-white text-slate-600 py-3 px-4 rounded-xl border border-slate-100 flex flex-col items-center gap-1 transition-transform active:scale-95">
            <span className="material-symbols-outlined text-xl">school</span>
            <span className="text-xs font-bold">מתקדמים</span>
          </button>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-slate-700 font-semibold mb-3 pr-1 text-sm uppercase tracking-wide">סיכום יומי</h2>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center p-3 bg-blue-50 rounded-lg">
              <span className="material-symbols-outlined text-blue-500 mb-1">target</span>
              <span className="text-[10px] text-slate-500 mb-1">דיוק ממוצע</span>
              <span className="text-xl font-bold text-slate-900">{stats.accuracy}%</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-rose-50 rounded-lg">
              <span className="material-symbols-outlined text-rose-500 mb-1">history</span>
              <span className="text-[10px] text-slate-500 mb-1">מילים לחזרה</span>
              <span className="text-xl font-bold text-slate-900">14</span>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-500">
            <span className="material-symbols-outlined text-sm">info</span>
            <span>מילים לסקירה מבוססות על טעויות אחרונות</span>
          </div>
        </div>
      </section>

      <section className="mt-6 bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col items-center">
        <h2 className="text-slate-700 font-semibold mb-6 w-full text-right">התקדמות לפי רמות</h2>
        <div className="w-full flex items-end justify-between h-32 gap-3 mb-2 px-2">
          {[
            { label: 'מתחילים', val: 100 },
            { label: 'בינוני 1', val: 75 },
            { label: 'בינוני 2', val: 40 },
            { label: 'מתקדם', val: 15 }
          ].map((bar) => (
            <div key={bar.label} className="flex flex-col items-center flex-1 gap-2 h-full">
              <div className="w-full bg-primary/10 rounded-t-lg relative h-full">
                <div 
                  className="bg-primary w-full rounded-t-lg absolute bottom-0 transition-all duration-1000" 
                  style={{ height: `${bar.val}%` }}
                ></div>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-primary">{bar.val}%</span>
              </div>
              <span className="text-[9px] text-slate-400 font-bold whitespace-nowrap">{bar.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LevelSelect;
