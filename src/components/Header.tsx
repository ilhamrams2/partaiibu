import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">👩</span>
            </div>
            <div>
              <h1 className="text-xl text-red-600">PARTAI IBU</h1>
              <p className="text-xs text-gray-600">Untuk Indonesia yang Lebih Peduli</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8">
            <a href="#beranda" className="text-gray-700 hover:text-red-600 transition">Beranda</a>
            <a href="#tentang" className="text-gray-700 hover:text-red-600 transition">Tentang</a>
            <a href="#visi-misi" className="text-gray-700 hover:text-red-600 transition">Visi & Misi</a>
            <a href="#program" className="text-gray-700 hover:text-red-600 transition">Program</a>
            <a href="#kontak" className="text-gray-700 hover:text-red-600 transition">Kontak</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a href="#beranda" className="text-gray-700 hover:text-red-600 transition">Beranda</a>
            <a href="#tentang" className="text-gray-700 hover:text-red-600 transition">Tentang</a>
            <a href="#visi-misi" className="text-gray-700 hover:text-red-600 transition">Visi & Misi</a>
            <a href="#program" className="text-gray-700 hover:text-red-600 transition">Program</a>
            <a href="#kontak" className="text-gray-700 hover:text-red-600 transition">Kontak</a>
          </nav>
        )}
      </div>
    </header>
  );
}
