import { ChevronLeft, ChevronRight, Filter, Download } from 'lucide-react';
import { useState } from 'react';

interface CalendarDay {
  date: number;
  day: string;
  habits: number;
  totalHabits: number;
  isCurrentMonth: boolean;
}

const habits = [
  { id: '1', name: '喝水8杯', icon: '💧', color: 'blue' },
  { id: '2', name: '晨跑30分钟', icon: '🏃', color: 'orange' },
  { id: '3', name: '冥想10分钟', icon: '🧘', color: 'purple' },
  { id: '4', name: '阅读1小时', icon: '📚', color: 'green' },
];

const colorClasses: Record<string, string> = {
  blue: 'bg-blue-100 border-blue-300',
  orange: 'bg-orange-100 border-orange-300',
  purple: 'bg-purple-100 border-purple-300',
  green: 'bg-green-100 border-green-300',
};

export default function HabitCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 2, 1));
  const [selectedHabit, setSelectedHabit] = useState<string | null>(null);

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const generateCalendarDays = (): CalendarDay[] => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days: CalendarDay[] = [];

    for (let i = 0; i < firstDay; i++) {
      days.push({
        date: 0,
        day: '',
        habits: 0,
        totalHabits: 0,
        isCurrentMonth: false,
      });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const habitsCompleted = Math.floor(Math.random() * 5);
      days.push({
        date: i,
        day: ['日', '一', '二', '三', '四', '五', '六'][new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i).getDay()],
        habits: habitsCompleted,
        totalHabits: 4,
        isCurrentMonth: true,
      });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();
  const monthName = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'][currentMonth.getMonth()];

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen pb-24">
      <div className="max-w-md mx-auto p-6">
        <div className="mt-6 mb-8">
          <h1 className="text-3xl font-black text-gray-900 mb-2">打卡记录</h1>
          <p className="text-gray-600">查看你的习惯打卡历史</p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-black text-gray-900">
                {currentMonth.getFullYear()}年{monthName}
              </h2>
              <p className="text-sm text-gray-600 mt-1">共完成 <span className="font-bold text-gray-900">48/112</span> 次打卡</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevMonth}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={nextMonth}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-4">
            {['日', '一', '二', '三', '四', '五', '六'].map((day) => (
              <div key={day} className="text-center font-bold text-gray-600 text-sm py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((day, idx) => {
              const progress = day.habits / day.totalHabits;
              const bgColor =
                day.habits === 4
                  ? 'bg-gradient-to-br from-green-400 to-green-500'
                  : day.habits === 0
                    ? 'bg-gray-100'
                    : `bg-gradient-to-br from-blue-${300 + day.habits * 100} to-blue-${400 + day.habits * 100}`;

              return (
                <div
                  key={idx}
                  className={`aspect-square rounded-lg flex items-center justify-center relative group transition-all ${
                    day.isCurrentMonth ? 'cursor-pointer hover:shadow-md' : ''
                  }`}
                >
                  {day.isCurrentMonth ? (
                    <>
                      <div className={`absolute inset-0 rounded-lg ${bgColor} opacity-70`} />
                      <div className="relative z-10 text-center">
                        <div className="text-sm font-bold text-gray-900">{day.date}</div>
                        <div className="text-xs text-gray-700 font-semibold">{day.habits}/4</div>
                      </div>
                      <div className="absolute -inset-0.5 rounded-lg border-2 border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </>
                  ) : (
                    <div className="text-xs text-gray-300 font-semibold">{day.date || ''}</div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900">打卡完成度</h3>
              <span className="text-sm text-blue-600 font-bold">42.9%</span>
            </div>
            <div className="space-y-2">
              {[4, 3, 2, 1].map((count) => (
                <div key={count} className="flex items-center gap-2">
                  <div className="text-sm text-gray-600 w-8">{count}/4</div>
                  <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 to-blue-500"
                      style={{ width: `${(5 - count) * 20}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-500 font-semibold w-8 text-right">{(5 - count) * 2}天</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900">按习惯筛选</h3>
            <Filter className="w-5 h-5 text-gray-600" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {habits.map((habit) => (
              <button
                key={habit.id}
                onClick={() => setSelectedHabit(selectedHabit === habit.id ? null : habit.id)}
                className={`rounded-2xl p-3 font-semibold transition-all ${
                  selectedHabit === habit.id
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg'
                    : 'bg-white border-2 border-gray-200 text-gray-900 hover:border-blue-300'
                }`}
              >
                <span className="text-xl mr-2">{habit.icon}</span>
                {habit.name}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-6 border-2 border-orange-200 mb-6">
          <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">📊</span>
            本月数据统计
          </h3>
          <div className="space-y-3">
            {[
              { label: '平均日完成', value: '2.1 个' },
              { label: '最长连续', value: '8 天' },
              { label: '本月打卡率', value: '42.9%' },
              { label: '坚持进度', value: '↑ 12% vs 上月' },
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="text-gray-700 font-medium text-sm">{stat.label}</span>
                <span className="font-bold text-gray-900">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl py-4 font-bold shadow-lg flex items-center justify-center gap-2 transition-all">
          <Download className="w-5 h-5" />
          导出月度报告
        </button>
      </div>
    </div>
  );
}
