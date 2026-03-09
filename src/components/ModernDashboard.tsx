import { Heart, Flame, Weight, TrendingUp, Home, Grid3x3, Bookmark, Bell, Settings } from 'lucide-react';

export default function ModernDashboard() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen pb-24">
      <div className="max-w-md mx-auto p-6">
        <div className="flex items-center justify-between mb-8 mt-6">
          <h1 className="text-2xl font-bold text-gray-900">Hello, Fred 👋</h1>
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover shadow-md"
          />
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Today's Summary</h2>
            <span className="text-sm text-teal-600 font-medium">+12% from yesterday</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center">
                  <Flame className="w-5 h-5 text-orange-600" />
                </div>
                <span className="text-sm text-gray-600 font-medium">Calories</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">1,290</div>
              <div className="text-xs text-gray-500">of 2,340 kcal</div>
            </div>

            <div className="bg-gradient-to-br from-teal-100 to-teal-50 rounded-2xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-teal-200 rounded-full flex items-center justify-center">
                  <Weight className="w-5 h-5 text-teal-600" />
                </div>
                <span className="text-sm text-gray-600 font-medium">Weight</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">72.5</div>
              <div className="text-xs text-gray-500">kg (↓ 0.2 kg)</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-teal-50 rounded-3xl p-6 shadow-sm mb-6 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/30 rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/20 rounded-full" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Heart Rate</h3>
                <p className="text-sm text-gray-600">• Normal</p>
              </div>
              <span className="text-xs bg-white/60 text-gray-700 px-3 py-1 rounded-full font-medium">24h</span>
            </div>

            <div className="h-40 flex items-end justify-between gap-1 mb-6 bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
              {[20, 35, 45, 55, 60, 50, 40, 45, 55, 65, 60, 50].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-blue-400 to-teal-300 rounded-t-lg opacity-80"
                  style={{ height: `${(height / 70) * 100}%` }}
                />
              ))}
            </div>

            <div className="flex items-end justify-between">
              <div>
                <div className="text-red-500 text-sm font-semibold mb-1">↗ 0.6%</div>
                <div className="text-4xl font-bold text-gray-900">
                  88<span className="text-xl text-gray-600 ml-1">bpm</span>
                </div>
              </div>
              <button className="w-14 h-14 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                <TrendingUp className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Activity</h3>
          <div className="flex items-end justify-between gap-2 h-32">
            {[
              { day: 'Mon', steps: 8200, active: false },
              { day: 'Tue', steps: 9500, active: false },
              { day: 'Wed', steps: 10200, active: false },
              { day: 'Thu', steps: 7800, active: false },
              { day: 'Fri', steps: 11500, active: true },
              { day: 'Sat', steps: 12000, active: true },
              { day: 'Sun', steps: 6430, active: true },
            ].map((item, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className={`w-full rounded-t-lg transition-all ${
                    item.active ? 'bg-gradient-to-t from-teal-400 to-teal-300' : 'bg-gray-200'
                  }`}
                  style={{ height: `${(item.steps / 12000) * 100}%` }}
                />
                <span className="text-xs text-gray-600 font-medium">{item.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav activeTab="home" />
    </div>
  );
}

function BottomNav({ activeTab }: { activeTab: string }) {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'grid', icon: Grid3x3, label: 'Grid' },
    { id: 'bookmark', icon: Bookmark, label: 'Saved' },
    { id: 'bell', icon: Bell, label: 'Alerts' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
      <div className="max-w-md mx-auto flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              className={`p-3 rounded-full transition-all ${
                isActive
                  ? 'bg-gradient-to-br from-teal-400 to-blue-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Icon className="w-6 h-6" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
