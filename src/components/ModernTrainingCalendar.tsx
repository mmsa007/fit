import { ArrowLeft, Maximize2, ChevronLeft, ChevronRight, Check, Clock } from 'lucide-react';

export default function ModernTrainingCalendar() {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen pb-24">
      <div className="max-w-md mx-auto p-6">
        <div className="flex items-center justify-between mb-6 mt-6">
          <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-50">
            <ArrowLeft className="w-5 h-5 text-gray-900" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
          <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-50">
            <Maximize2 className="w-5 h-5 text-gray-900" />
          </button>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Training Days</h2>
            <div className="flex items-center gap-3">
              <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                <ChevronLeft className="w-4 h-4 text-gray-700" />
              </button>
              <span className="text-sm font-semibold text-gray-900 w-12 text-center">May</span>
              <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                <ChevronRight className="w-4 h-4 text-gray-700" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2 mb-4">
            {weekDays.map((day) => (
              <div key={day} className="text-center text-xs font-semibold text-gray-600 py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2 mb-6">
            {[
              { day: 1, trained: false },
              { day: 2, trained: false },
              { day: 3, trained: true, icon: '😊' },
              { day: 4, trained: true, icon: '💪' },
              { day: 5, trained: true },
              { day: 6, trained: true, icon: '🌿' },
              { day: 7, trained: false },
              { day: 8, trained: false },
              { day: 9, trained: false },
            ].map((item, i) => (
              <button
                key={i}
                className={`aspect-square rounded-full flex items-center justify-center font-semibold text-sm transition-all ${
                  item.trained
                    ? 'bg-gradient-to-br from-teal-400 to-blue-500 text-white shadow-md hover:shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {item.icon || item.day}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-4 p-4 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl">
            <div>
              <div className="text-xs text-gray-600 font-medium mb-1">Steps</div>
              <div className="text-xl font-bold text-gray-900">6,430</div>
              <div className="text-xs text-gray-500">/ 10,000</div>
            </div>
            <div>
              <div className="text-xs text-gray-600 font-medium mb-1">Distance</div>
              <div className="text-xl font-bold text-gray-900">7.2</div>
              <div className="text-xs text-gray-500">km</div>
            </div>
            <div>
              <div className="text-xs text-gray-600 font-medium mb-1">Calories</div>
              <div className="text-xl font-bold text-gray-900">609</div>
              <div className="text-xs text-gray-500">kcal</div>
            </div>
            <div>
              <div className="text-xs text-gray-600 font-medium mb-1">Points</div>
              <div className="text-xl font-bold text-gray-900">202</div>
              <div className="text-xs text-gray-500">pts</div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Today's Exercises</h2>
            <button className="text-sm text-gray-600 hover:text-gray-900 font-medium">Today ▾</button>
          </div>

          <div className="space-y-3">
            <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow border-2 border-transparent hover:border-teal-200">
              <img
                src="https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="Exercise"
                className="w-16 h-16 rounded-xl object-cover"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Morning Stretching</h4>
                <p className="text-xs text-gray-600 mb-2">Stretch, Breathe, Wake up, Feel alive</p>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-semibold text-gray-900">15 min</span>
                </div>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                <Check className="w-5 h-5 text-white" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl p-4 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Morning Stretch Flow</h4>
                <p className="text-xs text-gray-700 mb-2">Wake up your body with flowing movements</p>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-semibold text-gray-900">20 min</span>
                </div>
              </div>
              <img
                src="https://images.pexels.com/photos/3838793/pexels-photo-3838793.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="Exercise"
                className="w-16 h-16 rounded-xl object-cover"
              />
            </div>

            <button className="w-full bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl py-4 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow">
              View All Exercises
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
