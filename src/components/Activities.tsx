import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Activities() {
  return (
    <div className="w-full max-w-md bg-gray-100 rounded-3xl p-6 h-[800px] overflow-y-auto">
      <div className="bg-white rounded-3xl p-6">
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
          <h1 className="text-3xl font-bold text-gray-900">Activities</h1>
          <button className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
            <Calendar className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="bg-sky-200 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-6">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-semibold text-gray-900">21 May</span>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">
                👟
              </div>
              <div>
                <div className="text-sm text-gray-700 mb-1">Steps</div>
                <div className="text-2xl font-bold text-gray-900">6,430</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl">
                🔥
              </div>
              <div>
                <div className="text-sm text-gray-700 mb-1">Kcal</div>
                <div className="text-2xl font-bold text-gray-900">1220</div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-end gap-1 h-32">
              {[
                { height: 40, label: '+72%' },
                { height: 60, label: '' },
                { height: 80, label: '' },
                { height: 70, label: '' },
                { height: 55, label: '' },
                { height: 75, label: '' },
                { height: 90, label: '+65%' },
              ].map((bar, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="relative w-full">
                    {bar.label && (
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold bg-gray-900 text-white px-2 py-1 rounded-full whitespace-nowrap">
                        {bar.label}
                      </div>
                    )}
                    <div
                      className="w-full bg-gray-900 rounded-t-lg"
                      style={{ height: `${bar.height}px` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
