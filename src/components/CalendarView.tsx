import { ArrowLeft, Maximize2, ChevronLeft, ChevronRight, Check } from 'lucide-react';

export default function CalendarView() {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const calendarDays = [3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="w-full max-w-md bg-gray-100 rounded-3xl p-6 h-[800px] overflow-y-auto">
      <div className="bg-white rounded-3xl p-6">
        <div className="flex items-center justify-between mb-6">
          <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-semibold text-gray-900">Calendar</span>
          <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="font-semibold text-gray-900">Training Days</span>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-sm font-medium">May</span>
              <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2 mb-4">
            {weekDays.map((day) => (
              <div key={day} className="text-center text-xs text-gray-500 font-medium">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {calendarDays.map((day, index) => (
              <button
                key={day}
                className={`aspect-square rounded-full flex items-center justify-center font-semibold ${
                  index === 1
                    ? 'bg-sky-200 text-gray-900'
                    : index === 4
                    ? 'bg-lime-200 text-gray-900'
                    : 'text-gray-900'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-4 mb-4 flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">
            👟
          </div>
          <div className="flex-1">
            <div className="text-sm text-gray-500 mb-1">Steps</div>
            <div className="text-2xl font-bold text-gray-900">
              6,430 <span className="text-lg text-gray-400">/ 10,000</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <div className="text-xs text-gray-500 mb-1">Distance</div>
            <div className="text-xl font-bold text-gray-900">7,233</div>
          </div>
          <div>
            <div className="text-xs text-gray-500 mb-1">Calories</div>
            <div className="text-xl font-bold text-gray-900">609</div>
          </div>
          <div>
            <div className="text-xs text-gray-500 mb-1">Points</div>
            <div className="text-xl font-bold text-gray-900">202</div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="font-semibold text-gray-900">Today Exercises</span>
          <button className="text-sm text-gray-500">Today ▾</button>
        </div>

        <div className="space-y-3">
          <div className="bg-white border-2 border-gray-100 rounded-2xl p-4 flex items-center gap-4">
            <img
              src="https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=200"
              alt="Exercise"
              className="w-16 h-16 rounded-xl object-cover"
            />
            <div className="flex-1">
              <div className="font-semibold text-gray-900 mb-1">Morning Stretching</div>
              <div className="text-sm text-gray-500">Stretch, Breathe, Wake up, Feel alive</div>
              <div className="text-lg font-bold text-gray-900 mt-1">15 min</div>
            </div>
            <div className="w-8 h-8 bg-lime-200 rounded-full flex items-center justify-center">
              <Check className="w-5 h-5 text-gray-900" />
            </div>
          </div>

          <div className="bg-sky-200 rounded-2xl p-4 flex items-center gap-4">
            <div className="flex-1">
              <div className="font-semibold text-gray-900 mb-1">Morning Stretch Flow</div>
              <div className="text-sm text-gray-700">Wake up your body with</div>
            </div>
            <img
              src="https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=200"
              alt="Exercise"
              className="w-16 h-16 rounded-xl object-cover"
            />
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Check className="w-5 h-5 text-sky-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
