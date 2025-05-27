import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './DashboardMainContent';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
    <Header/>
    <div className="flex">
      <Sidebar />
      <DashboardMainContent />
    </div>
  </div>
  );
}

export default App;
