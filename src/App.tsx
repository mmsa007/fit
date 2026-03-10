import { useState } from 'react';
import ModernDashboard from './components/ModernDashboard';
import ModernWellnessScore from './components/ModernWellnessScore';
import ModernTrainingCalendar from './components/ModernTrainingCalendar';
import ModernARExercise from './components/ModernARExercise';
import ShareWorkout from './components/ShareWorkout';
import GamifiedAchievement from './components/GamifiedAchievement';
import WellnessScore from './components/WellnessScore';
import CalendarView from './components/CalendarView';
import Dashboard from './components/Dashboard';
import Activities from './components/Activities';
import Workout from './components/Workout';
import GetStarted from './components/GetStarted';

type ViewType = 'modern' | 'modern-wellness' | 'modern-calendar' | 'modern-ar' | 'share' | 'gamified' | 'original';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('modern');

  return (
    <div className="min-h-screen">
      {currentView === 'modern' && <ModernDashboard />}
      {currentView === 'modern-wellness' && <ModernWellnessScore />}
      {currentView === 'modern-calendar' && <ModernTrainingCalendar />}
      {currentView === 'modern-ar' && <ModernARExercise />}
      {currentView === 'share' && <ShareWorkout />}
      {currentView === 'gamified' && <GamifiedAchievement />}
      {currentView === 'original' && (
        <div className="bg-gradient-to-br from-gray-200 to-gray-300 min-h-screen p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-4xl font-bold text-gray-900">Fitness Tracking App</h1>
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
      )}

      {currentView !== 'original' && (
        <div className="fixed bottom-8 left-8 z-50 flex gap-2 flex-wrap max-w-xs">
          <button
            onClick={() => setCurrentView('modern')}
            className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors ${
              currentView === 'modern'
                ? 'bg-gradient-to-r from-teal-400 to-blue-500 text-white'
                : 'bg-white text-gray-900 hover:bg-gray-100 shadow-lg'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setCurrentView('modern-wellness')}
            className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors ${
              currentView === 'modern-wellness'
                ? 'bg-gradient-to-r from-teal-400 to-blue-500 text-white'
                : 'bg-white text-gray-900 hover:bg-gray-100 shadow-lg'
            }`}
          >
            Wellness
          </button>
          <button
            onClick={() => setCurrentView('modern-calendar')}
            className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors ${
              currentView === 'modern-calendar'
                ? 'bg-gradient-to-r from-teal-400 to-blue-500 text-white'
                : 'bg-white text-gray-900 hover:bg-gray-100 shadow-lg'
            }`}
          >
            Calendar
          </button>
          <button
            onClick={() => setCurrentView('modern-ar')}
            className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors ${
              currentView === 'modern-ar'
                ? 'bg-gradient-to-r from-teal-400 to-blue-500 text-white'
                : 'bg-white text-gray-900 hover:bg-gray-100 shadow-lg'
            }`}
          >
            Exercise
          </button>
          <button
            onClick={() => setCurrentView('share')}
            className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors ${
              currentView === 'share'
                ? 'bg-gradient-to-r from-teal-400 to-blue-500 text-white'
                : 'bg-white text-gray-900 hover:bg-gray-100 shadow-lg'
            }`}
          >
            Share
          </button>
          <button
            onClick={() => setCurrentView('gamified')}
            className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors ${
              currentView === 'gamified'
                ? 'bg-gradient-to-r from-teal-400 to-blue-500 text-white'
                : 'bg-white text-gray-900 hover:bg-gray-100 shadow-lg'
            }`}
          >
            Gamified
          </button>
          <button
            onClick={() => setCurrentView('original')}
            className="px-4 py-2 rounded-full font-semibold text-sm bg-white text-gray-900 hover:bg-gray-100 shadow-lg transition-colors"
          >
            Original
          </button>
        </div>
      )}

      {currentView === 'original' && (
        <div className="fixed bottom-8 left-8 z-50">
          <button
            onClick={() => setCurrentView('modern')}
            className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white font-semibold rounded-full transition-colors shadow-lg"
          >
            View Modern Design
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
