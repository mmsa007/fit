import { QrCode, Share2, Home } from 'lucide-react';
import React from 'react';

interface AchievementData {
  id: string;
  title: string;
  subtitle: string;
  gradient: string;
  percentile: number;
  stats: { label: string; value: string }[];
  badge: string;
  color: string;
}

const achievements: AchievementData[] = [
  {
    id: 'strength',
    title: '今日力量突破达人',
    subtitle: '超过了全国 92% 的用户',
    gradient: 'from-orange-400 via-orange-500 to-red-500',
    percentile: 92,
    stats: [
      { label: '今日举铁次数', value: '180次' },
      { label: '最大负重', value: '85kg' },
      { label: '完成动作', value: '4个' },
      { label: '力量等级', value: 'S' },
    ],
    badge: '💪',
    color: 'orange',
  },
  {
    id: 'running',
    title: '今日耐力奔跑达人',
    subtitle: '超过了全国 85% 的用户',
    gradient: 'from-sky-400 via-blue-400 to-blue-600',
    percentile: 85,
    stats: [
      { label: '今日跑量', value: '10.5km' },
      { label: '配速', value: "4'30''/km" },
      { label: '运动时长', value: '50分钟' },
      { label: '步数', value: '14,200步' },
    ],
    badge: '👟',
    color: 'blue',
  },
  {
    id: 'cardio',
    title: '今日心肺冲刺达人',
    subtitle: '超过了全国 97% 的用户',
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    percentile: 97,
    stats: [
      { label: '今日训练强度', value: 'MAX' },
      { label: '平均心率', value: '165bpm' },
      { label: '燃脂时长', value: '35分钟' },
      { label: '消耗热量', value: '550kcal' },
    ],
    badge: '❤️',
    color: 'purple',
  },
  {
    id: 'yoga',
    title: '今日柔韧瑜伽达人',
    subtitle: '超过了全国 80% 的用户',
    gradient: 'from-pink-400 via-rose-400 to-rose-600',
    percentile: 80,
    stats: [
      { label: '今日冥想', value: '15分钟' },
      { label: '体式完成度', value: '100%' },
      { label: '训练时长', value: '45分钟' },
      { label: '核心稳定', value: '5级' },
    ],
    badge: '🧘',
    color: 'pink',
  },
];

export default function GamifiedAchievement() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const achievement = achievements[currentIndex];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen pb-24">
      <div className="max-w-md mx-auto">
        <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-0">
            {achievements.map((ach, idx) => (
              <AchievementCard key={ach.id} data={ach} isActive={idx === currentIndex} />
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6 px-6">
          {achievements.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-gray-800 w-8' : 'bg-gray-300 w-2'
              }`}
            />
          ))}
        </div>

        <div className="mt-8 px-6 flex gap-3">
          <button className="flex-1 bg-white hover:bg-gray-50 text-gray-900 rounded-2xl py-3 font-semibold shadow-md flex items-center justify-center gap-2 transition-all">
            <QrCode className="w-5 h-5" />
            分享二维码
          </button>
          <button className="flex-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white rounded-2xl py-3 font-semibold shadow-lg flex items-center justify-center gap-2 transition-all">
            <Share2 className="w-5 h-5" />
            分享
          </button>
        </div>

        <div className="mt-6 px-6">
          <button className="w-full flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors">
            <Home className="w-5 h-5" />
            返回主页
          </button>
        </div>
      </div>
    </div>
  );
}

function AchievementCard({ data, isActive }: { data: AchievementData; isActive: boolean }) {
  if (!isActive) return null;

  return (
    <div className="w-full flex-shrink-0">
      <div className={`mx-4 rounded-[40px] bg-gradient-to-b ${data.gradient} min-h-screen relative overflow-hidden`}>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-white/30 rounded-full blur-3xl" />
          <div className="absolute top-20 right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl" />
          <div className="absolute bottom-40 left-10 w-32 h-32 bg-white/15 rounded-full blur-2xl" />
        </div>

        <div className="relative z-10 pt-8 px-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">史</span>
              </div>
              <span className="text-white/90 font-medium text-sm">史学明</span>
            </div>
            <button className="w-10 h-10 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors flex items-center justify-center">
              <span className="text-white text-sm">✕</span>
            </button>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-4xl font-black text-white drop-shadow-lg mb-3">{data.title}</h1>
            <p className="text-white/90 text-lg font-bold drop-shadow">{data.subtitle}</p>
          </div>

          <div className="relative w-48 h-48 mx-auto mb-8">
            <div className="absolute inset-0 bg-white/30 rounded-full backdrop-blur-sm animate-pulse" />
            <div className="absolute inset-4 bg-white/40 rounded-full backdrop-blur-md" />
            <div className="absolute inset-8 bg-gradient-to-b from-white/60 to-white/30 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-8xl drop-shadow-lg">{data.badge}</span>
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-gray-900 px-4 py-2 rounded-full font-black text-sm shadow-lg">
              {data.percentile}%
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {data.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/30 backdrop-blur-md rounded-3xl p-4 border border-white/40"
              >
                <div className="text-white/80 text-xs font-semibold mb-2">{stat.label}</div>
                <div className="text-white font-black text-2xl drop-shadow">{stat.value}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="w-24 h-24 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
              <QrCode className="w-16 h-16 text-white/60" />
            </div>
            <span className="text-white/70 font-medium">分享结果</span>
          </div>
        </div>
      </div>
    </div>
  );
}
