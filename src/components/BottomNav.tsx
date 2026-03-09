import { Home, Grid3x3, Bookmark, Bell, Settings } from 'lucide-react';

interface BottomNavProps {
  activeTab?: string;
}

export default function BottomNav({ activeTab = 'home' }: BottomNavProps) {
  const tabs = [
    { id: 'home', icon: Home },
    { id: 'grid', icon: Grid3x3 },
    { id: 'bookmark', icon: Bookmark },
    { id: 'bell', icon: Bell },
    { id: 'settings', icon: Settings },
  ];

  return (
    <div className="bg-gray-900 rounded-full px-6 py-4 flex items-center justify-between gap-8">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            className={`p-3 rounded-full transition-colors ${
              isActive ? 'bg-sky-300' : 'hover:bg-gray-800'
            }`}
          >
            <Icon className={`w-5 h-5 ${isActive ? 'text-gray-900' : 'text-white'}`} />
          </button>
        );
      })}
    </div>
  );
}
