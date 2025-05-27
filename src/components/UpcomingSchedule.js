import React from 'react';

const upcomingSchedule = [
  {
    day: 'On Thursday',
    appointments: [
      { title: 'Health checkup complete', time: '11:00 AM', icon: '🩺', color: 'bg-purple-100' },
      { title: 'Ophthalmologist', time: '14:00 PM', icon: '👁️', color: 'bg-purple-100' }
    ]
  },
  {
    day: 'On Saturday',
    appointments: [
      { title: 'Cardiologist', time: '12:00 AM', icon: '❤️', color: 'bg-purple-100' },
      { title: 'Neurologist', time: '16:00 PM', icon: '🧠', color: 'bg-purple-100' }
    ]
  }
];

const SimpleAppointmentCard = ({ appointment }) => {
  return (
    <div className={`${appointment.color} rounded-lg p-4 border border-purple-200`}>
      <div className="flex items-center space-x-3">
        <span className="text-lg">{appointment.icon}</span>
        <div>
          <h4 className="font-medium text-gray-800">{appointment.title}</h4>
          <p className="text-sm text-gray-600">{appointment.time}</p>
        </div>
      </div>
    </div>
  );
};

const UpcomingSchedule = () => {
  return (
    <div className="bg-white rounded-xl p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">The Upcoming Schedule</h2>
      
      {upcomingSchedule.map((schedule, scheduleIndex) => (
        <div key={scheduleIndex} className="mb-6">
          <h3 className="text-gray-600 font-medium mb-3">{schedule.day}</h3>
          <div className="grid grid-cols-2 gap-4">
            {schedule.appointments.map((appointment, index) => (
              <SimpleAppointmentCard key={index} appointment={appointment} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;