import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                <Heart className="w-7 h-7 fill-white" />
              </div>
              <div>
                <h3 className="text-xl">Partai Ibu</h3>
                <p className="text-xs text-gray-400">Untuk Indonesia</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Membangun Indonesia yang lebih baik dengan kasih sayang dan kepedulian untuk seluruh rakyat.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Navigasi</h4>
            <ul className="space-y-3">
              <li><a href="#tentang" className="text-gray-400 hover:text-red-500 transition-colors text-sm">Tentang Kami</a></li>
              <li><a href="#nilai" className="text-gray-400 hover:text-red-500 transition-colors text-sm">Nilai-Nilai</a></li>
              <li><a href="#program" className="text-gray-400 hover:text-red-500 transition-colors text-sm">Program</a></li>
              <li><a href="#berita" className="text-gray-400 hover:text-red-500 transition-colors text-sm">Berita</a></li>
              <li><a href="#bergabung" className="text-gray-400 hover:text-red-500 transition-colors text-sm">Bergabung</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg mb-4">Program Unggulan</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm">Ibu & Anak Sehat</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm">Beasiswa Anak Indonesia</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm">UMKM Ibu</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm">Rumah Layak</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm">Posyandu Digital</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg mb-4">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Jl. Merdeka No. 17, Jakarta Pusat, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+62 21 1945 1945</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@partaiibu.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Partai Ibu. Semua hak cipta dilindungi.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-10 h-6 bg-red-600 rounded"></div>
              <div className="w-10 h-6 bg-white rounded"></div>
              <span className="text-gray-400 text-sm ml-2">Indonesia Merdeka</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
