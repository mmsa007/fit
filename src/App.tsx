import { useState } from 'react';
import WellnessScore from './components/WellnessScore';
import CalendarView from './components/CalendarView';
import Dashboard from './components/Dashboard';
import Activities from './components/Activities';
import Workout from './components/Workout';
import GetStarted from './components/GetStarted';
import ShareWorkout from './components/ShareWorkout';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'share'>('home');

  return (
    <div className="min-h-screen">
      {currentView === 'home' ? (
        <div className="bg-gradient-to-br from-gray-200 to-gray-300 min-h-screen p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-4xl font-bold text-gray-900">Fitness Tracking App</h1>
              <button
                onClick={() => setCurrentView('share')}
                className="px-6 py-3 bg-sky-400 hover:bg-sky-500 text-white font-semibold rounded-full transition-colors"
              >
                查看分享页面
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <WellnessScore />
              <CalendarView />
              <GetStarted />
              <Dashboard />
              <Activities />
              <Workout />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="fixed top-8 left-8 z-50">
            <button
              onClick={() => setCurrentView('home')}
              className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-full transition-colors"
            >
              返回主页
            </button>
          </div>
          <ShareWorkout />
        </div>
      )}
    </div>
  );
}

export default App;
