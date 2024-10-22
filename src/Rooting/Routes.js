// AppRoutes.js
import Navbar from '../Components/Navbar';
import AppContent from '../Components/AppContent';
import WaveAnimation from '../Components/WaveAnimation';
import Connect from '../Components/Connection';

function AppRoutes() {
  return (
    <>
      <Navbar />
      <Connect />
      <AppContent />
      <WaveAnimation />
    </>
  );
}

export default AppRoutes;
