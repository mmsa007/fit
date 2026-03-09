import { Share2, QrCode, ArrowRight } from 'lucide-react';

interface WorkoutCard {
  id: string;
  type: string;
  title: string;
  gradient: string;
  icon: string;
  score: number;
  duration: number;
  calories: number;
  difficulty: number;
}

const workoutCards: WorkoutCard[] = [
  {
    id: 'chest',
    type: '练胸',
    title: '胸部训练',
    gradient: 'from-orange-400 to-orange-600',
    icon: '💪',
    score: 9.2,
    duration: 42,
    calories: 280,
    difficulty: 8,
  },
  {
    id: 'legs',
    type: '练腿',
    title: '腿部训练',
    gradient: 'from-green-400 to-green-600',
    icon: '🦵',
    score: 8.8,
    duration: 55,
    calories: 350,
    difficulty: 9,
  },
  {
    id: 'shoulders',
    type: '练肩',
    title: '肩部训练',
    gradient: 'from-blue-400 to-blue-600',
    icon: '🎯',
    score: 8.5,
    duration: 38,
    calories: 240,
    difficulty: 7,
  },
  {
    id: 'back',
    type: '练背',
    title: '背部训练',
    gradient: 'from-purple-500 to-purple-700',
    icon: '⬅️',
    score: 9.0,
    duration: 48,
    calories: 320,
    difficulty: 8,
  },
  {
    id: 'yoga',
    type: '瑜伽',
    title: '瑜伽练习',
    gradient: 'from-pink-400 to-rose-600',
    icon: '🧘',
    score: 7.8,
    duration: 60,
    calories: 150,
    difficulty: 5,
  },
  {
    id: 'hiit',
    type: 'HIIT',
    title: '高强度间歇',
    gradient: 'from-cyan-400 to-blue-600',
    icon: '⚡',
    score: 9.5,
    duration: 30,
    calories: 400,
    difficulty: 10,
  },
];

export default function ShareWorkout() {
  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">我的训练成果</h2>
          <p className="text-gray-600">分享你的健身数据和成就</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workoutCards.map((card) => (
            <ShareCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ShareCard({ card }: { card: WorkoutCard }) {
  return (
    <div className="relative group">
      <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`} />

      <div className={`relative bg-gradient-to-br ${card.gradient} rounded-3xl p-6 min-h-[500px] flex flex-col text-white overflow-hidden`}>
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16" />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="text-sm font-semibold opacity-90 mb-1">{card.type}</div>
              <div className="text-2xl font-bold">{card.title}</div>
            </div>
            <button className="w-10 h-10 bg-white/30 hover:bg-white/50 rounded-full flex items-center justify-center transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          <div className="mb-8">
            <div className="text-6xl mb-4">{card.icon}</div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-sm opacity-90 mb-1">评分</div>
              <div className="text-3xl font-bold">{card.score}</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-sm opacity-90 mb-1">时长</div>
              <div className="text-3xl font-bold">{card.duration}</div>
              <div className="text-xs opacity-75">分钟</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-sm opacity-90 mb-1">卡路里</div>
              <div className="text-3xl font-bold">{card.calories}</div>
              <div className="text-xs opacity-75">kcal</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-sm opacity-90 mb-1">难度</div>
              <div className="text-3xl font-bold">{card.difficulty}</div>
              <div className="text-xs opacity-75">/10</div>
            </div>
          </div>

          <div className="flex-1 flex items-end">
            <div className="w-full space-y-3">
              <button className="w-full bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-2xl py-3 font-semibold transition-colors flex items-center justify-center gap-2">
                <QrCode className="w-5 h-5" />
                分享二维码
              </button>
              <button className="w-full bg-white text-gray-900 hover:bg-gray-50 rounded-2xl py-3 font-semibold transition-colors flex items-center justify-center gap-2">
                <Share2 className="w-5 h-5" />
                分享到社交媒体
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
