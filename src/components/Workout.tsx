import { ArrowLeft, Heart } from 'lucide-react';

export default function Workout() {
  return (
    <div className="w-full max-w-md bg-gradient-to-br from-teal-400 to-teal-500 rounded-3xl p-6 h-[800px] flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <ArrowLeft className="w-5 h-5 text-gray-900" />
        </button>
        <div className="bg-lime-300 rounded-full px-4 py-2 flex items-center gap-2">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            ⏱️
          </div>
          <div className="font-semibold text-gray-900">
            Cardio <span className="font-normal">4:32</span>
          </div>
        </div>
      </div>

      <div className="flex-1 relative flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-80 h-80 border-4 border-yellow-300 rounded-[60px] relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-white rounded-full" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-white rounded-full" />
          </div>
        </div>

        <img
          src="https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Workout"
          className="relative z-10 w-72 h-96 object-cover rounded-3xl"
        />
      </div>

      <div className="text-center text-sm text-gray-800 mb-4">
        Press STOP to Finish Exercise
      </div>

      <div className="flex items-center justify-center gap-4">
        <div className="bg-white rounded-full w-24 h-24 flex flex-col items-center justify-center">
          <div className="text-2xl mb-1">🔥</div>
          <div className="text-xl font-bold text-gray-900">112</div>
          <div className="text-xs text-gray-600">kcal</div>
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 transition-colors rounded-full w-32 h-32 flex items-center justify-center shadow-2xl">
          <span className="text-white text-3xl font-bold">STOP</span>
        </button>

        <div className="bg-white rounded-full w-24 h-24 flex flex-col items-center justify-center">
          <Heart className="w-6 h-6 text-red-500 mb-1" />
          <div className="text-xl font-bold text-gray-900">118</div>
          <div className="text-xs text-gray-600">bpm</div>
        </div>
      </div>
    </div>
  );
}
