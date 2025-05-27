import React from 'react';

const AppointmentCard = ({ 
  title, 
  time, 
  doctor, 
  type = 'general', 
  icon = '🩺', 
  color = 'bg-blue-600',
  size = 'medium' 
}) => {
  const sizeClasses = {
    small: 'p-3',
    medium: 'p-4',
    large: 'p-6'
  };

  const textSizes = {
    small: { title: 'text-sm', subtitle: 'text-xs' },
    medium: { title: 'text-base', subtitle: 'text-sm' },
    large: { title: 'text-lg', subtitle: 'text-base' }
  };

  return (
    <div className={`${color} text-white rounded-lg ${sizeClasses[size]}`}>
      <div className="flex items-center space-x-2 mb-2">
        <span className="text-lg">{icon}</span>
        <h3 className={`font-semibold ${textSizes[size].title}`}>{title}</h3>
      </div>
      <p className={`opacity-90 ${textSizes[size].subtitle}`}>{time}</p>
      {doctor && (
        <p className={`opacity-75 ${textSizes[size].subtitle}`}>{doctor}</p>
      )}
    </div>
  );
};

// Example usage component
const AppointmentCardExample = () => {
  return (
    <div className="p-6 space-y-4 bg-gray-50">
      <h2 className="text-xl font-bold mb-4">Appointment Card Examples</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AppointmentCard
          title="Dentist"
          time="09:00-11:00"
          doctor="Dr. Cameron Williamson"
          icon="🦷"
          color="bg-blue-600"
        />
        
        <AppointmentCard
          title="Cardiologist"
          time="12:00-13:00"
          doctor="Dr. Sarah Johnson"
          icon="❤️"
          color="bg-red-500"
        />
        
        <AppointmentCard
          title="Physiotherapy"
          time="14:00-15:00"
          doctor="Dr. Kevin Djanes"
          icon="🩺"
          color="bg-gray-500"
        />
        
        <AppointmentCard
          title="Ophthalmologist"
          time="10:00-11:00"
          doctor="Dr. Emily Chen"
          icon="👁️"
          color="bg-purple-600"
          size="large"
        />
        
        <AppointmentCard
          title="Quick Checkup"
          time="16:00"
          icon="🩺"
          color="bg-green-500"
          size="small"
        />
      </div>
    </div>
  );
};

export default AppointmentCardExample;