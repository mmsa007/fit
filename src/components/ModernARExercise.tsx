import { ArrowLeft, Pause, Volume2, Clock } from 'lucide-react';

export default function ModernARExercise() {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-blue-900 min-h-screen pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />

      <div className="max-w-md mx-auto h-screen flex flex-col relative z-10">
        <div className="flex items-center justify-between p-6">
          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h1 className="text-xl font-bold text-white">Cardio Session</h1>
          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
            <Volume2 className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="flex-1 relative flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-gradient-to-b from-teal-500/20 via-blue-500/10 to-transparent rounded-3xl" />

          <div className="relative w-full aspect-square max-w-xs">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 300 400"
              fill="none"
            >
              <defs>
                <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.6" />
                </linearGradient>
              </defs>

              <circle cx="150" cy="60" r="25" fill="url(#bodyGradient)" stroke="#ffffff" strokeWidth="2" />
              <line x1="150" y1="85" x2="150" y2="160" stroke="url(#bodyGradient)" strokeWidth="3" />
              <line
                x1="150"
                y1="110"
                x2="100"
                y2="140"
                stroke="url(#bodyGradient)"
                strokeWidth="3"
              />
              <line
                x1="150"
                y1="110"
                x2="200"
                y2="140"
                stroke="url(#bodyGradient)"
                strokeWidth="3"
              />
              <line x1="150" y1="160" x2="120" y2="240" stroke="url(#bodyGradient)" strokeWidth="3" />
              <line x1="150" y1="160" x2="180" y2="240" stroke="url(#bodyGradient)" strokeWidth="3" />

              <circle cx="100" cy="140" r="8" fill="#fbbf24" stroke="#ffffff" strokeWidth="2" />
              <circle cx="200" cy="140" r="8" fill="#fbbf24" stroke="#ffffff" strokeWidth="2" />
              <circle cx="120" cy="240" r="8" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
              <circle cx="180" cy="240" r="8" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
              <circle cx="150" cy="60" r="6" fill="#ec4899" />
            </svg>

            <img
              src="https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Cardio Exercise"
              className="w-full h-full object-cover rounded-3xl opacity-80"
            />

            <div className="absolute top-4 right-4 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full px-4 py-2 shadow-lg">
              <div className="text-xs font-semibold text-white">Cardio</div>
              <div className="text-sm font-bold text-white">4:32</div>
            </div>
          </div>
        </div>

        <div className="px-6 mb-6">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 mb-4">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="text-sm text-white/70 mb-2">Calories Burned</div>
                <div className="text-3xl font-bold text-teal-400">112</div>
                <div className="text-xs text-white/50 mt-1">kcal</div>
              </div>
              <div className="w-px bg-white/20" />
              <div className="text-center">
                <div className="text-sm text-white/70 mb-2">Heart Rate</div>
                <div className="text-3xl font-bold text-orange-400">118</div>
                <div className="text-xs text-white/50 mt-1">bpm</div>
              </div>
              <div className="w-px bg-white/20" />
              <div className="text-center">
                <div className="text-sm text-white/70 mb-2">Duration</div>
                <div className="text-3xl font-bold text-blue-400">4:32</div>
                <div className="text-xs text-white/50 mt-1">min</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/80 font-medium">Intensity</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`w-2 h-6 rounded-full ${
                        i <= 4 ? 'bg-gradient-to-t from-orange-400 to-red-400' : 'bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-teal-400 to-blue-500" style={{ width: '65%' }} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-2xl py-4 text-white font-semibold flex items-center justify-center gap-2 transition-colors border border-white/20">
              <Pause className="w-5 h-5" />
              Pause
            </button>
            <button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 rounded-2xl py-4 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow">
              Finish
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-white/60 text-sm pb-4">
          <Clock className="w-4 h-4" />
          Keep going! You're doing great
        </div>
      </div>
    </div>
  );
}
