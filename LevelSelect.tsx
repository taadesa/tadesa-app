
import React from 'react';

interface ReviewProps {
  onBack: () => void;
}

const Review: React.FC<ReviewProps> = ({ onBack }) => {
  const trickyWords = [
    { word: 'Thought', translation: 'מחשבה', example: 'I thought about the answer for a long time.' },
    { word: 'Through', translation: 'דרך / מבעד', example: 'The sunlight shines through the window.' },
    { word: 'Enough', translation: 'מספיק', mastery: 'כמעט שם! עוד תרגול אחד למאסטרי' },
  ];

  return (
    <div className="min-h-screen bg-background-light flex flex-col font-display">
      <header className="sticky top-0 z-20 bg-background-light/80 backdrop-blur-md px-4 py-4 border-b border-primary/10">
        <div className="flex items-center justify-between">
          <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/10 transition-colors">
            <span className="material-icons text-primary">arrow_forward</span>
          </button>
          <h1 className="text-lg font-semibold text-slate-900">Smart Review</h1>
          <div className="w-10"></div>
        </div>
      </header>

      <main className="flex-1 px-5 py-6 pb-32">
        <div className="bg-white rounded-xl p-5 mb-8 shadow-sm border border-slate-200/50">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="material-icons text-primary text-3xl">auto_awesome</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">תרגול מילים לשיפור</h2>
              <p className="text-sm text-slate-500 mt-1">נשארו לך {trickyWords.length} מילים מאתגרות לתרגל היום</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-xs mb-1.5 font-medium">
              <span className="text-primary">התקדמות יומית</span>
              <span className="text-slate-400">65%</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[65%] rounded-full"></div>
            </div>
          </div>
        </div>

        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 px-1">מילים מאתגרות</h3>
        
        <div className="space-y-4">
          {trickyWords.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-slate-200/50">
              <div className="flex justify-between items-start mb-2">
                <div className="text-left" dir="ltr">
                  <h4 className="text-xl font-bold text-slate-900">{item.word}</h4>
                  <p className="text-sm text-slate-400 font-normal">{item.translation}</p>
                </div>
                <button className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-all group">
                  <span className="material-icons text-primary group-active:scale-90">volume_up</span>
                </button>
              </div>
              
              <div className="mt-3 pt-3 border-t border-slate-50">
                {item.example ? (
                  <>
                    <p className="text-xs text-primary font-medium mb-2 cursor-pointer flex items-center gap-1">
                      <span className="material-icons text-xs">visibility</span>
                      הצג דוגמה במשפט
                    </p>
                    <div className="bg-background-light rounded-lg p-3" dir="ltr">
                      <p className="text-sm text-slate-600 italic">
                        "{item.example.split(item.word.toLowerCase()).map((t, i, arr) => (
                          <span key={i}>{t}{i < arr.length - 1 && <span className="text-primary font-bold">{item.word.toLowerCase()}</span>}</span>
                        ))}"
                      </p>
                    </div>
                  </>
                ) : (
                  <p className="text-xs text-slate-400 font-medium mb-2 flex items-center gap-1 italic">
                    <span className="material-icons text-xs">check_circle</span>
                    {item.mastery}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background-light via-background-light/95 to-transparent max-w-md mx-auto">
        <button 
          onClick={onBack}
          className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 hover:bg-primary/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <span className="material-icons">quiz</span>
          בחן אותי שוב
        </button>
      </div>
    </div>
  );
};

export default Review;
