import { ChevronRight, Flame, Trophy, Target, TrendingUp, Plus } from 'lucide-react';

interface Habit {
  id: string;
  name: string;
  icon: string;
  category: string;
  currentStreak: number;
  longestStreak: number;
  totalCheckIns: number;
  color: string;
  progress: number;
}

const mockHabits: Habit[] = [
  {
    id: '1',
    name: '喝水8杯',
    icon: '💧',
    category: '健康',
    currentStreak: 7,
    longestStreak: 21,
    totalCheckIns: 30,
    color: 'blue',
    progress: 85,
  },
  {
    id: '2',
    name: '晨跑30分钟',
    icon: '🏃',
    category: '运动',
    currentStreak: 5,
    longestStreak: 15,
    totalCheckIns: 18,
    color: 'orange',
    progress: 62,
  },
  {
    id: '3',
    name: '冥想10分钟',
    icon: '🧘',
    category: '心理',
    currentStreak: 12,
    longestStreak: 12,
    totalCheckIns: 25,
    color: 'purple',
    progress: 100,
  },
  {
    id: '4',
    name: '阅读1小时',
    icon: '📚',
    category: '学习',
    currentStreak: 3,
    longestStreak: 8,
    totalCheckIns: 12,
    color: 'green',
    progress: 45,
  },
];

const colorClasses: Record<string, { bg: string; text: string; light: string }> = {
  blue: { bg: 'bg-blue-500', text: 'text-blue-600', light: 'bg-blue-50' },
  orange: { bg: 'bg-orange-500', text: 'text-orange-600', light: 'bg-orange-50' },
  purple: { bg: 'bg-purple-500', text: 'text-purple-600', light: 'bg-purple-50' },
  green: { bg: 'bg-green-500', text: 'text-green-600', light: 'bg-green-50' },
  pink: { bg: 'bg-pink-500', text: 'text-pink-600', light: 'bg-pink-50' },
};

export default function HabitDashboard() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen pb-24">
      <div className="max-w-md mx-auto p-6">
        <div className="mt-6 mb-8">
          <h1 className="text-3xl font-black text-gray-900 mb-2">打卡仪表板</h1>
          <p className="text-gray-600">2026年3月12日</p>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-6 shadow-lg mb-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-white/80 font-medium mb-1">今日打卡进度</p>
              <h2 className="text-4xl font-black">3/4</h2>
            </div>
            <div className="w-32 h-32 relative">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="8" />
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="white"
                  strokeWidth="8"
                  strokeDasharray={`${(3 / 4) * 339.29} 339.29`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-black">75%</span>
              </div>
            </div>
          </div>
          <p className="text-white/80 text-sm">还需完成1个习惯来达成今日目标</p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">本周打卡统计</h3>
          <div className="flex items-end justify-between gap-2 h-40 mb-4">
            {[
              { day: '周一', count: 3, maxCount: 4 },
              { day: '周二', count: 3, maxCount: 4 },
              { day: '周三', count: 4, maxCount: 4 },
              { day: '周四', count: 2, maxCount: 4 },
              { day: '周五', count: 4, maxCount: 4 },
              { day: '周六', count: 3, maxCount: 4 },
              { day: '周日', count: 3, maxCount: 4 },
            ].map((item, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full bg-gradient-to-t from-blue-400 to-blue-300 rounded-t-lg transition-all"
                  style={{ height: `${(item.count / item.maxCount) * 100}%` }}
                />
                <span className="text-xs text-gray-600 font-semibold">{item.day.slice(-1)}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">本周完成: <span className="font-bold text-gray-900">22/28</span></span>
            <span className="text-blue-600 font-bold">78%</span>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">我的习惯</h3>
            <button className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors">
              <Plus className="w-5 h-5" />
            </button>
          </div>

          {mockHabits.map((habit) => {
            const colors = colorClasses[habit.color] || colorClasses.blue;
            return (
              <div key={habit.id} className={`${colors.light} rounded-2xl p-4 border-2 border-transparent hover:border-gray-300 transition-all cursor-pointer`}>
                <div className="flex items-start gap-4 mb-3">
                  <div className="text-3xl">{habit.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 mb-1">{habit.name}</h4>
                    <p className="text-xs text-gray-600 font-medium">{habit.category}</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 ${colors.text} flex-shrink-0`} />
                </div>

                <div className="h-2 bg-white/60 rounded-full overflow-hidden mb-3">
                  <div className={`h-full ${colors.bg} transition-all`} style={{ width: `${habit.progress}%` }} />
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div>
                    <Flame className={`w-4 h-4 ${colors.text} mx-auto mb-1`} />
                    <div className="font-bold text-gray-900">{habit.currentStreak}</div>
                    <div className="text-gray-600">连续天数</div>
                  </div>
                  <div>
                    <Trophy className={`w-4 h-4 ${colors.text} mx-auto mb-1`} />
                    <div className="font-bold text-gray-900">{habit.longestStreak}</div>
                    <div className="text-gray-600">最长记录</div>
                  </div>
                  <div>
                    <Target className={`w-4 h-4 ${colors.text} mx-auto mb-1`} />
                    <div className="font-bold text-gray-900">{habit.totalCheckIns}</div>
                    <div className="text-gray-600">总次数</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            成就徽章
          </h3>
          <div className="grid grid-cols-4 gap-3">
            {[
              { emoji: '🔥', label: '7日连续', achieved: true },
              { emoji: '⭐', label: '30次打卡', achieved: true },
              { emoji: '👑', label: '21日连续', achieved: false },
              { emoji: '🎯', label: '100次', achieved: false },
            ].map((badge, idx) => (
              <div key={idx} className="text-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-xl mx-auto mb-2 transition-all ${
                    badge.achieved ? 'bg-gradient-to-br from-yellow-300 to-orange-300 shadow-md' : 'bg-gray-200'
                  }`}
                >
                  {badge.emoji}
                </div>
                <div className="text-xs font-semibold text-gray-700 text-center">{badge.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
