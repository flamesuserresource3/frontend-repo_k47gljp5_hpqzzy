import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Roles from './components/Roles';
import FeatureGrid from './components/FeatureGrid';
import DemoPanels from './components/DemoPanels';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 font-inter text-gray-100">
      <Navbar />
      <Hero />
      <Roles />
      <FeatureGrid />
      <DemoPanels />
      <footer className="border-t border-gray-800 bg-gray-950">
        <div className="mx-auto max-w-6xl px-4 py-10 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Aurum LMS — Built for administrators, instructors, and students.
        </div>
      </footer>
    </div>
  );
}
