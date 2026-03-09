import { PieChart, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import BottomNav from './BottomNav';

export default function WellnessScore() {
  return (
    <div className="w-full max-w-md bg-gray-100 rounded-3xl p-6 flex flex-col h-[800px]">
      <div className="bg-white rounded-3xl p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-sky-200 rounded-full flex items-center justify-center">
              <PieChart className="w-6 h-6 text-gray-700" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Wellness Score</div>
              <div className="text-green-500 text-sm font-semibold flex items-center gap-1">
                <span>↗</span> +8%
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center mb-6">
          <div className="relative">
            <svg width="280" height="280" viewBox="0 0 280 280">
              <circle
                cx="140"
                cy="140"
                r="120"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="20"
              />
              <circle
                cx="140"
                cy="140"
                r="120"
                fill="none"
                stroke="#7dd3fc"
                strokeWidth="20"
                strokeDasharray="753"
                strokeDashoffset="188"
                strokeLinecap="round"
                transform="rotate(-90 140 140)"
              />
              <circle cx="140" cy="140" r="100" fill="white" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-5xl font-bold text-gray-900">6.1/10</div>
              <div className="text-gray-500 mt-1">Good!</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-4 mb-6">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="font-semibold text-gray-900">Fred Nicklson</div>
            <div className="text-sm text-gray-600">
              You are healthier than <span className="font-semibold">75%</span> people
            </div>
          </div>
          <button className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <BottomNav activeTab="grid" />
      </div>
    </div>
  );
}
