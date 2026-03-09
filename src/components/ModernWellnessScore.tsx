import { ArrowLeft, ChevronRight, Award, TrendingUp } from 'lucide-react';

export default function ModernWellnessScore() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen pb-24">
      <div className="max-w-md mx-auto p-6">
        <div className="flex items-center justify-between mb-8 mt-6">
          <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-900" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Wellness Score</h1>
          <div className="w-10" />
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm mb-6 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-200 to-teal-200 rounded-full opacity-30" />

          <div className="relative z-10 flex flex-col items-center mb-8">
            <svg width="240" height="240" viewBox="0 0 240 240" className="mb-4">
              <circle
                cx="120"
                cy="120"
                r="110"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="12"
              />
              <circle
                cx="120"
                cy="120"
                r="110"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="12"
                strokeDasharray="517"
                strokeDashoffset="86"
                strokeLinecap="round"
                transform="rotate(-90 120 120)"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#14b8a6" />
                  <stop offset="100%" stopColor="#0ea5e9" />
                </linearGradient>
              </defs>
              <circle cx="120" cy="120" r="95" fill="white" />
            </svg>

            <div className="text-center">
              <div className="text-5xl font-bold text-gray-900 mb-2">6.1</div>
              <div className="text-lg text-gray-600 font-medium mb-4">Good!</div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                <TrendingUp className="w-4 h-4" />
                +8% from last week
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-6 shadow-sm mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Comparison</h3>

          <div className="bg-white rounded-2xl p-4 flex items-center gap-4 mb-4">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="font-semibold text-gray-900 text-sm mb-1">Fred Nicklson</div>
              <div className="text-xs text-gray-600">You are healthier than</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600">75%</div>
              <div className="text-xs text-gray-600">people</div>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { label: 'Overall Health', value: 78, color: 'from-green-400 to-teal-400' },
              { label: 'Fitness Level', value: 82, color: 'from-blue-400 to-blue-500' },
              { label: 'Nutrition', value: 65, color: 'from-orange-400 to-orange-500' },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  <span className="text-sm font-bold text-gray-900">{item.value}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${item.color}`}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Achievements</h3>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: '🔥', label: '7-Day Streak', value: '7' },
              { icon: '👟', label: 'Steps Goal', value: '88%' },
              { icon: '💪', label: 'Strength', value: 'Level 5' },
            ].map((achievement, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-4 text-center">
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <div className="text-xs text-gray-600 mb-1 font-medium">{achievement.label}</div>
                <div className="text-sm font-bold text-gray-900">{achievement.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
