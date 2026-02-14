
import React, { useState } from 'react';

interface FlashcardProps {
  onNext: () => void;
  onCancel: () => void;
}

const Flashcard: React.FC<FlashcardProps> = ({ onNext, onCancel }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSpeak = () => {
    if (isRecording) return;
    
    setIsRecording(true);
    setFeedback(null);
    
    // Simulating voice recording and processing for educational/UI purposes
    setTimeout(() => {
      setIsRecording(false);
      setFeedback("מצוין! הגייה מדויקת (94%)");
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-background-light flex flex-col overflow-hidden">
      <header className="h-12 w-full flex items-center justify-between px-6 bg-background-light/80 backdrop-blur-md sticky top-0 z-50">
        <button onClick={onCancel} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-200 transition-colors">
          <span className="material-icons text-xl">close</span>
        </button>
        <div className="flex-1 px-4">
          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-1/3 rounded-full"></div>
          </div>
        </div>
        <div className="text-sm font-medium text-slate-500">4/12</div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6 gap-8">
        <div className="w-full max-w-md bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 flex flex-col items-center text-center gap-6 transform transition-transform active:scale-[0.98]">
          <div className="w-48 h-48 bg-primary/5 rounded-xl flex items-center justify-center overflow-hidden">
            <img 
              alt="Apple" 
              className="w-40 h-40 object-contain" 
              src="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=400" 
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900" dir="ltr">Apple</h1>
            <p className="text-2xl font-medium text-slate-500">תפוח</p>
          </div>
          
          <div className="flex gap-6 mt-2">
            <button className="group flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 group-hover:bg-primary/90 transition-all">
                <span className="material-icons text-white text-3xl">volume_up</span>
              </div>
              <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Listen</p>
            </button>

            <button 
              onClick={handleSpeak}
              disabled={isRecording}
              className="group flex flex-col items-center gap-2"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-slate-100 group-hover:bg-slate-200'}`}>
                <span className={`material-icons text-3xl ${isRecording ? 'text-white' : 'text-slate-600'}`}>
                  {isRecording ? 'mic' : 'mic_none'}
                </span>
              </div>
              <p className={`text-[10px] font-bold uppercase tracking-widest ${isRecording ? 'text-red-500' : 'text-slate-500'}`}>
                {isRecording ? 'Recording...' : 'Speak'}
              </p>
            </button>
          </div>

          {feedback && (
            <div className="mt-2 py-2 px-4 bg-green-50 rounded-full border border-green-100 animate-bounce">
              <p className="text-xs font-bold text-green-700">{feedback}</p>
            </div>
          )}
        </div>
        
        <p className="text-sm text-slate-400 text-center px-8">
          לחץ/י על ה-"Speak" כדי לתרגל את ההגייה שלך בעזרת המיקרופון
        </p>
      </main>

      <footer className="p-6 pb-10 space-y-4 w-full">
        <button 
          onClick={onNext}
          className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:opacity-90 active:scale-[0.97] transition-all"
        >
          אני יודע/ת את זה
        </button>
        <button 
          onClick={onNext}
          className="w-full py-4 bg-white text-primary border-2 border-primary/10 rounded-xl font-bold text-lg hover:bg-primary/5 active:scale-[0.97] transition-all"
        >
          אני צריך/ה עוד תרגול
        </button>
      </footer>
    </div>
  );
};

export default Flashcard;
