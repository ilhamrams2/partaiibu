import { useState, useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { VisionMissionPage } from './pages/VisionMissionPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Handle hash-based routing
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentPage(hash);
    };

    // Set initial page
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Render different pages based on current page
  switch (currentPage) {
    case 'tentang':
      return <AboutPage />;
    case 'visi-misi':
      return <VisionMissionPage />;
    case 'program':
      return <ProgramsPage />;
    case 'galeri':
      return <GalleryPage />;
    case 'kontak':
      return <ContactPage />;
    default:
      return <HomePage />;
  }
}
