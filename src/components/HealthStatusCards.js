import React from 'react';

const healthStatusData = [
  {
    id: 'lungs',
    title: 'Lungs',
    date: '26 Oct 2021',
    status: 'good',
    progress: 85,
    icon: '🫁'
  },
  {
    id: 'teeth',
    title: 'Teeth',
    date: '26 Oct 2021',
    status: 'good',
    progress: 75,
    icon: '🦷'
  },
  {
    id: 'bone',
    title: 'Bone',
    date: '26 Oct 2021',
    status: 'warning',
    progress: 60,
    icon: '🦴'
  }
];

const HealthStatusCards = () => {
  return (
    <div className="space-y-4">
      {healthStatusData.map((item) => (
        <div key={item.id} className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center space-x-3 mb-3">
            <span className="text-2xl">{item.icon}</span>
            <div>
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500">Date: {item.date}</p>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${
                item.status === 'good' ? 'bg-green-500' : 
                item.status === 'warning' ? 'bg-orange-500' : 'bg-red-500'
              }`}
              style={{ width: `${item.progress}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;