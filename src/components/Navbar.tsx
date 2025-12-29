import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
              <Heart className="w-7 h-7 text-white fill-white" />
            </div>
            <div>
              <h1 className="text-red-600">Partai Ibu</h1>
              <p className="text-xs text-gray-600">Untuk Indonesia yang Peduli</p>
            </div>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors">Beranda</a>
            <a href="#tentang" className="text-gray-700 hover:text-red-600 transition-colors">Tentang</a>
            <a href="#visi-misi" className="text-gray-700 hover:text-red-600 transition-colors">Visi & Misi</a>
            <a href="#program" className="text-gray-700 hover:text-red-600 transition-colors">Program</a>
            <a href="#galeri" className="text-gray-700 hover:text-red-600 transition-colors">Galeri</a>
            <a href="#kontak" className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors">Kontak</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <a href="/" className="block text-gray-700 hover:text-red-600 transition-colors py-2">Beranda</a>
            <a href="/tentang" className="block text-gray-700 hover:text-red-600 transition-colors py-2">Tentang</a>
            <a href="/visi-misi" className="block text-gray-700 hover:text-red-600 transition-colors py-2">Visi & Misi</a>
            <a href="/program" className="block text-gray-700 hover:text-red-600 transition-colors py-2">Program</a>
            <a href="/galeri" className="block text-gray-700 hover:text-red-600 transition-colors py-2">Galeri</a>
            <a href="/kontak" className="block bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors text-center">Kontak</a>
          </div>
        </div>
      )}
    </nav>
  );
}