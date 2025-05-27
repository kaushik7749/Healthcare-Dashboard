import React from 'react';

const ActivityFeed = () => {
  const chartData = [
    { day: 'Mon', height: 'h-8' },
    { day: 'Tues', height: 'h-12' },
    { day: 'Wed', height: 'h-6' },
    { day: 'Thurs', height: 'h-16' },
    { day: 'Fri', height: 'h-10' },
    { day: 'Sat', height: 'h-14' },
    { day: 'Sun', height: 'h-8' }
  ];

  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Activity</h2>
        <p className="text-sm text-gray-500">3 appointments on this week</p>
      </div>
      
      <div className="flex items-end space-x-4 h-24">
        {chartData.map((bar, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div className={`w-8 ${bar.height} bg-gradient-to-t from-cyan-400 to-blue-500 rounded-t-lg`}></div>
            <span className="text-xs text-gray-500">{bar.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;