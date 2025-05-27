import React from 'react';
import { Stethoscope } from 'lucide-react';

const calendarData = {
  month: 'October 2021',
  days: [
    { date: 25, day: 'Mon', appointments: ['10:00', '11:00', '12:00'] },
    { date: 26, day: 'Tues', appointments: ['08:00', '09:00', '10:00'] },
    { date: 27, day: 'Wed', appointments: ['12:00', '13:00'] },
    { date: 28, day: 'Thurs', appointments: ['10:00', '11:00'] },
    { date: 29, day: 'Fri', appointments: ['14:00', '16:00'] },
    { date: 30, day: 'Sat', appointments: ['12:00', '14:00', '15:00'], highlight: true },
    { date: 31, day: 'Sun', appointments: ['09:00', '10:00', '11:00'] }
  ]
};

const appointmentDetails = [
  {
    id: 1,
    title: 'Dentist',
    time: '09:00-11:00',
    doctor: 'Dr. Cameron Williamson',
    type: 'dentist',
    color: 'bg-blue-600'
  },
  {
    id: 2,
    title: 'Physiotherapy Appointment',
    time: '11:00-12:00',
    doctor: 'Dr. Kevin Djanes',
    type: 'physiotherapy',
    color: 'bg-gray-400'
  }
];

const CalendarView = () => {
  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">{calendarData.month}</h2>
        <div className="flex space-x-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-2 mb-4">
        {calendarData.days.map((day) => (
          <div key={day.date} className={`text-center ${day.highlight ? 'bg-purple-100 rounded-lg' : ''}`}>
            <div className="text-xs text-gray-500 mb-1">{day.day}</div>
            <div className={`text-lg font-semibold mb-2 ${day.highlight ? 'text-purple-600' : 'text-gray-800'}`}>
              {day.date}
            </div>
            <div className="space-y-1">
              {day.appointments.map((time, index) => (
                <div key={index} className={`text-xs px-2 py-1 rounded ${
                  day.highlight ? 'bg-purple-200 text-purple-700' : 'bg-gray-100 text-gray-600'
                }`}>
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-6">
        {appointmentDetails.map((appointment) => (
          <div key={appointment.id} className={`${appointment.color} text-white rounded-lg p-4`}>
            <div className="flex items-center space-x-2 mb-2">
              {appointment.type === 'dentist' ? <span className="text-lg">🦷</span> : <Stethoscope className="w-5 h-5" />}
              <h3 className="font-semibold">{appointment.title}</h3>
            </div>
            <p className="text-sm opacity-90">{appointment.time}</p>
            <p className="text-sm opacity-75">{appointment.doctor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;