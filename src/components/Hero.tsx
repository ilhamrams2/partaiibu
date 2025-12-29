import { Heart, Menu } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                <Heart className="w-7 h-7 text-white fill-white" />
              </div>
              <div>
                <h1 className="text-red-600">Partai Ibu</h1>
                <p className="text-xs text-gray-600">Untuk Indonesia yang Peduli</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors">Beranda</a>
              <a href="#tentang" className="text-gray-700 hover:text-red-600 transition-colors">Tentang</a>
              <a href="#visi-misi" className="text-gray-700 hover:text-red-600 transition-colors">Visi & Misi</a>
              <a href="#program" className="text-gray-700 hover:text-red-600 transition-colors">Program</a>
              <a href="#galeri" className="text-gray-700 hover:text-red-600 transition-colors">Galeri</a>
              <a href="#kontak" className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors">Kontak</a>
            </div>
            <button className="md:hidden">
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full">
                <Heart className="w-4 h-4 fill-red-600" />
                <span className="text-sm">Partai Politik Baru Indonesia</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl text-gray-900 leading-tight">
                Bersama <span className="text-red-600">Ibu</span>, Bangun <span className="text-red-600">Indonesia</span> yang Lebih Baik
              </h2>
              
              <p className="text-xl text-gray-600">
                Menghadirkan kepemimpinan yang penuh kasih sayang, adil, dan berintegritas untuk kesejahteraan seluruh rakyat Indonesia.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-red-600 text-white px-8 py-4 rounded-full hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
                  Daftar Sekarang
                </button>
                <button className="bg-white text-red-600 px-8 py-4 rounded-full border-2 border-red-600 hover:bg-red-50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Pelajari Lebih Lanjut
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-3xl text-red-600">50K+</div>
                  <div className="text-sm text-gray-600">Anggota Aktif</div>
                </div>
                <div>
                  <div className="text-3xl text-red-600">34</div>
                  <div className="text-sm text-gray-600">Provinsi</div>
                </div>
                <div>
                  <div className="text-3xl text-red-600">100+</div>
                  <div className="text-sm text-gray-600">Program</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600 rounded-3xl transform rotate-3"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1616460232138-bcb320dafc6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwd29tZW4lMjBzaG9wcGluZyUyMG1hcmtldHxlbnwxfHx8fDE3NjM3MDg3OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Ibu-ibu Indonesia Berbelanja"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                <Heart className="w-12 h-12 text-red-600 fill-red-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Batik Pattern Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}