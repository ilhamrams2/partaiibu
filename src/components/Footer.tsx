import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="kontak" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">👩</span>
              </div>
              <div>
                <h3 className="text-white">PARTAI IBU</h3>
                <p className="text-sm text-gray-400">Suara Kasih untuk Indonesia</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Membangun Indonesia yang lebih adil, peduli, dan sejahtera melalui kepemimpinan yang penuh kasih dan kebijaksanaan.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><a href="#beranda" className="text-gray-400 hover:text-red-400 transition">Beranda</a></li>
              <li><a href="#tentang" className="text-gray-400 hover:text-red-400 transition">Tentang Kami</a></li>
              <li><a href="#visi-misi" className="text-gray-400 hover:text-red-400 transition">Visi & Misi</a></li>
              <li><a href="#program" className="text-gray-400 hover:text-red-400 transition">Program</a></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-white mb-4">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-gray-400">
                <MapPin size={20} className="flex-shrink-0 text-red-400" />
                <span>Jl. Merdeka No. 45, Jakarta Pusat, Indonesia</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Phone size={20} className="flex-shrink-0 text-red-400" />
                <span>+62 21 1234 5678</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Mail size={20} className="flex-shrink-0 text-red-400" />
                <span>info@partaiibu.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Partai Ibu. Seluruh hak cipta dilindungi. Dibuat dengan ❤️ untuk Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
