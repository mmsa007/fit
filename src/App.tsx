import WellnessScore from './components/WellnessScore';
import CalendarView from './components/CalendarView';
import Dashboard from './components/Dashboard';
import Activities from './components/Activities';
import Workout from './components/Workout';
import GetStarted from './components/GetStarted';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-300 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Fitness Tracking App
        </h1>

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
  );
}

export default App;
