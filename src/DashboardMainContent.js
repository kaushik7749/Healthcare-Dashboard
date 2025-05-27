import React from "react";
import AnatomySection from "./components/AnatomySection";
import HealthStatusCards from "./components/HealthStatusCards";
import CalendarView from "./components/CalenderView";
import UpcomingSchedule from "./components/UpcomingSchedule";
import ActivityFeed from "./components/ActivityFeed";



const DashboardMainContent = () => {
    return (
      <main className="flex-1 bg-gray-50 p-6">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <div className="text-sm text-gray-500">This Week</div>
          </div>
        </div>
        
        <div className="grid grid-cols-12 gap-6">
          {/* Left Section - Anatomy and Health Status */}
          <div className="col-span-4 space-y-6">
            <AnatomySection />
          </div>
          
          <div className="col-span-2">
            <HealthStatusCards />
          </div>
          
          {/* Center Section - Calendar */}
          <div className="col-span-6">
            <CalendarView />
          </div>
          
          {/* Right Section - Upcoming Schedule and Activity */}
          <div className="col-span-12 mt-6 grid grid-cols-2 gap-6">
            <UpcomingSchedule />
            <ActivityFeed />
          </div>
        </div>
      </main>
    );
  };

  export default DashboardMainContent;