import { Calendar, Heart, ArrowRight, Clock } from 'lucide-react';
import BottomNav from './BottomNav';

export default function Dashboard() {
  return (
    <div className="w-full max-w-md bg-gray-100 rounded-3xl p-6 flex flex-col h-[800px]">
      <div className="bg-white rounded-3xl p-6 flex-1 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white border-2 border-gray-900 rounded-full flex items-center justify-center text-2xl">
              🌍
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900">Hello, Fred</span>
              <span>👋</span>
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <button className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
            <Calendar className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl p-4 text-white">
            <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center mb-2">
              🔥
            </div>
            <div className="text-sm mb-1">1d</div>
            <div className="font-semibold mb-1">Calories</div>
            <div className="text-xs text-white/80 mb-3">Great physical activity</div>
            <div className="text-3xl font-bold">1290</div>
            <div className="text-sm">/2340kcal</div>
          </div>

          <div className="bg-gradient-to-br from-lime-300 to-lime-400 rounded-3xl p-4 text-gray-900">
            <div className="w-10 h-10 bg-white/50 rounded-full flex items-center justify-center mb-2 text-xl">
              ⚖️
            </div>
            <div className="text-sm mb-1">6'0"</div>
            <div className="font-semibold mb-1">Weight</div>
            <div className="text-xs text-gray-700 mb-3">Healthy weight is 72-82kg</div>
            <div className="text-3xl font-bold">198</div>
            <div className="text-sm">lbs</div>
          </div>
        </div>

        <div className="bg-sky-100 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-300 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-gray-900" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Heart rate</div>
                <div className="text-sm text-gray-600">⚡ Normal</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              24h
            </div>
          </div>

          <div className="relative h-40 mb-4">
            <svg width="100%" height="100%" viewBox="0 0 300 160" className="absolute inset-0">
              <path
                d="M 20 120 Q 50 120 70 80 Q 80 60 90 80 Q 100 100 120 80 Q 140 60 150 80 Q 160 100 180 80 Q 200 60 210 80 Q 220 100 240 80 Q 260 60 280 120"
                fill="none"
                stroke="#93c5fd"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M 110 90 L 120 70 L 130 85 L 140 60 L 150 80"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <img
                src="https://images.pexels.com/photos/2766408/pexels-photo-2766408.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="Heart"
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>

          <div className="flex items-end justify-between">
            <div>
              <div className="text-red-500 text-sm mb-1">↗ 0.6%</div>
              <div className="text-4xl font-bold text-gray-900">88<span className="text-lg">bpm</span></div>
            </div>
            <button className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <BottomNav activeTab="home" />
      </div>
    </div>
  );
}
