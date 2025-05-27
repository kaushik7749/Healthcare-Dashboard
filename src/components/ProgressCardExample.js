import React from 'react';

const ProgressCard = ({ 
  title, 
  date, 
  progress = 0, 
  status = 'good', 
  icon = '🩺',
  showPercentage = true,
  size = 'medium'
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'good': return 'bg-green-500';
      case 'warning': return 'bg-orange-500';
      case 'danger': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const sizeClasses = {
    small: 'p-3',
    medium: 'p-4',
    large: 'p-6'
  };

  const textSizes = {
    small: { title: 'text-sm', subtitle: 'text-xs', icon: 'text-lg' },
    medium: { title: 'text-base', subtitle: 'text-sm', icon: 'text-2xl' },
    large: { title: 'text-lg', subtitle: 'text-base', icon: 'text-3xl' }
  };

  return (
    <div className={`bg-white rounded-xl border border-gray-100 ${sizeClasses[size]} transition-shadow hover:shadow-md`}>
      <div className="flex items-center space-x-3 mb-3">
        <span className={textSizes[size].icon}>{icon}</span>
        <div className="flex-1">
          <h3 className={`font-semibold text-gray-800 ${textSizes[size].title}`}>{title}</h3>
          <p className={`text-gray-500 ${textSizes[size].subtitle}`}>Date: {date}</p>
        </div>
        {showPercentage && (
          <div className={`text-right ${textSizes[size].subtitle}`}>
            <span className="font-medium text-gray-700">{progress}%</span>
          </div>
        )}
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`h-2 rounded-full transition-all duration-300 ${getStatusColor(status)}`}
          style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
        />
      </div>
      
      <div className="mt-2 flex justify-between items-center">
        <span className={`capitalize text-gray-600 ${textSizes[size].subtitle}`}>{status}</span>
        <div className={`w-2 h-2 rounded-full ${getStatusColor(status)}`} />
      </div>
    </div>
  );
};

// Example usage component
const ProgressCardExample = () => {
  const healthData = [
    { title: 'Lungs', date: '26 Oct 2021', progress: 85, status: 'good', icon: '🫁' },
    { title: 'Heart', date: '25 Oct 2021', progress: 92, status: 'good', icon: '❤️' },
    { title: 'Teeth', date: '26 Oct 2021', progress: 75, status: 'good', icon: '🦷' },
    { title: 'Bone', date: '26 Oct 2021', progress: 60, status: 'warning', icon: '🦴' },
    { title: 'Blood Pressure', date: '24 Oct 2021', progress: 45, status: 'danger', icon: '🩸' },
    { title: 'Weight', date: '27 Oct 2021', progress: 80, status: 'good', icon: '⚖️' }
  ];

  return (
    <div className="p-6 space-y-6 bg-gray-50">
      <h2 className="text-xl font-bold mb-4">Progress Card Examples</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {healthData.map((item, index) => (
          <ProgressCard
            key={index}
            title={item.title}
            date={item.date}
            progress={item.progress}
            status={item.status}
            icon={item.icon}
          />
        ))}
      </div>
      
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Different Sizes</h3>
        <div className="space-y-4">
          <ProgressCard
            title="Small Progress Card"
            date="27 Oct 2021"
            progress={70}
            status="good"
            icon="🩺"
            size="small"
          />
          
          <ProgressCard
            title="Large Progress Card"
            date="27 Oct 2021"
            progress={85}
            status="good"
            icon="🫁"
            size="large"
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressCardExample;