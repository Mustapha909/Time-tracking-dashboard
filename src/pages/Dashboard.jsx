import { useState } from 'react';
import UserProfile from '../components/UserProfile';
import ActivityGrid from '../components/ActivityGrid';
import data from '../data/data.json';

const backgrounds = [
  'src/images/icon-work.svg',
  'src/images/icon-play.svg',
  'src/images/icon-study.svg',
  'src/images/icon-exercise.svg',
  'src/images/icon-social.svg',
  'src/images/icon-self-care.svg',
];

const bgColors = [
  'bg-[#FF8B64]',
  'bg-[#55C2E6]',
  'bg-[#FF5E7D]',
  'bg-[#4BCF82]',
  'bg-[#7335D2]',
  'bg-[#F1C75B]',
];

function Dashboard() {
  const [timeframe, setTimeframe] = useState('weekly');

  return (
    <div className="min-h-screen bg-[#0d1323] flex items-center justify-center">
      <div className="w-full max-w-[1200px] mx-auto p-6 flex flex-col sm:flex-row gap-6">
        <UserProfile
          selectedTimeframe={timeframe}
          onSelectTimeframe={setTimeframe}
        />
        <ActivityGrid
          data={data}
          backgrounds={backgrounds}
          bgColors={bgColors}
          timeframe={timeframe}
        />
      </div>
    </div>
  );
}

export default Dashboard;
