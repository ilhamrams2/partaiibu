import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { VisionMission } from '../components/VisionMission';

export function VisionMissionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Add padding top for fixed navbar */}
      <div className="pt-20">
        <VisionMission />
      </div>

      <Footer />
    </div>
  );
}
