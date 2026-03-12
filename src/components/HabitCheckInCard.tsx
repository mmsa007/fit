import { Download, Share2 } from 'lucide-react';

interface CheckInCardProps {
  habitName: string;
  categoryIcon: string;
  consecutiveDays: number;
  totalCheckIns: number;
  date: string;
  motivationalText: string;
  color: string;
}

const gradients: Record<string, string> = {
  blue: 'from-blue-400 via-cyan-300 to-sky-200',
  pink: 'from-pink-400 via-rose-300 to-red-200',
  purple: 'from-purple-400 via-fuchsia-300 to-pink-200',
  orange: 'from-orange-400 via-amber-300 to-yellow-200',
  green: 'from-green-400 via-emerald-300 to-teal-200',
};

const cardBackgrounds: Record<string, string> = {
  blue: 'from-blue-50 to-cyan-50',
  pink: 'from-pink-50 to-rose-50',
  purple: 'from-purple-50 to-fuchsia-50',
  orange: 'from-orange-50 to-amber-50',
  green: 'from-green-50 to-emerald-50',
};

export default function HabitCheckInCard(props: CheckInCardProps) {
  const gradientClass = gradients[props.color] || gradients.blue;
  const bgClass = cardBackgrounds[props.color] || cardBackgrounds.blue;

  return (
    <div className="max-w-md mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">打卡分享卡片</h2>
        <p className="text-gray-600">分享你的成就给朋友</p>
      </div>

      <div className={`relative w-full aspect-square bg-gradient-to-br ${gradientClass} rounded-3xl shadow-2xl overflow-hidden`}>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/25 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-between p-8">
          <div>
            <div className="text-center mb-4">
              <div className="inline-block bg-white/40 backdrop-blur-sm px-3 py-1 rounded-full mb-4">
                <span className="text-xs font-bold text-gray-800">✓ 今日打卡</span>
              </div>
              <h1 className="text-xl font-black text-white drop-shadow-lg mb-2">今日打卡成就</h1>
              <p className="text-white/80 font-semibold drop-shadow">坚持就是胜利</p>
            </div>
          </div>

          <div className="text-center my-4">
            <div className="bg-white/30 backdrop-blur-md rounded-3xl p-6 border border-white/40 mb-4">
              <div className="text-6xl mb-3 drop-shadow-lg">{props.categoryIcon}</div>
              <h2 className="text-2xl font-black text-white drop-shadow-lg mb-2">{props.habitName}</h2>
              <p className="text-white/80 font-bold drop-shadow">养成好习惯</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/25 backdrop-blur-sm rounded-2xl p-3 border border-white/30">
                <div className="text-sm text-white/70 font-bold mb-1">连续打卡</div>
                <div className="text-4xl font-black text-white drop-shadow">{props.consecutiveDays}</div>
                <div className="text-xs text-white/70 font-semibold">天</div>
              </div>
              <div className="bg-white/25 backdrop-blur-sm rounded-2xl p-3 border border-white/30">
                <div className="text-sm text-white/70 font-bold mb-1">总次数</div>
                <div className="text-4xl font-black text-white drop-shadow">{props.totalCheckIns}</div>
                <div className="text-xs text-white/70 font-semibold">次</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-white/80 text-sm font-bold drop-shadow mb-3">{props.motivationalText}</p>
            <div className="flex items-center justify-between">
              <div className="flex-1 border-t border-white/30" />
              <div className="text-white/70 text-xs font-bold px-3 drop-shadow">{props.date}</div>
              <div className="flex-1 border-t border-white/30" />
            </div>
            <div className="mt-3 flex items-center justify-center gap-2">
              <div className="w-16 h-16 bg-white/30 rounded-lg backdrop-blur-sm flex items-center justify-center border border-white/40">
                <span className="text-xl">✓</span>
              </div>
              <span className="text-white/60 text-xs font-semibold">FitFlow</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl py-3 font-bold shadow-lg flex items-center justify-center gap-2 transition-all">
          <Download className="w-5 h-5" />
          下载卡片
        </button>
        <button className="flex-1 bg-white hover:bg-gray-50 text-gray-900 rounded-2xl py-3 font-bold shadow-md flex items-center justify-center gap-2 transition-all border-2 border-gray-200">
          <Share2 className="w-5 h-5" />
          分享卡片
        </button>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-2xl border border-blue-200">
        <h3 className="font-bold text-gray-900 mb-3">自定义卡片</h3>
        <div className="space-y-3">
          <div>
            <label className="text-xs font-semibold text-gray-600 block mb-1">习惯名称</label>
            <input
              type="text"
              defaultValue={props.habitName}
              placeholder="如：喝水8杯"
              className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-600 block mb-1">连续天数</label>
            <input
              type="number"
              defaultValue={props.consecutiveDays}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-600 block mb-1">鼓励语</label>
            <input
              type="text"
              defaultValue={props.motivationalText}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
