import { UserPlus, FileText, MessageSquare, Send } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function JoinUs() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1683884344837-056f4a040299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWElMjBmbGFnJTIwcmVkJTIwd2hpdGV8ZW58MXx8fHwxNzYzNjkxMzkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Indonesia"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-red-600 mb-4">Bergabung dengan Partai Ibu</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mari bersama-sama membangun Indonesia yang lebih baik untuk generasi mendatang
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-red-100">
            <h3 className="text-gray-900 mb-6">Formulir Pendaftaran</h3>
            
            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 mb-2">Nama Lengkap</label>
                <input 
                  type="text" 
                  placeholder="Masukkan nama lengkap"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="email@example.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Nomor Telepon</label>
                <input 
                  type="tel" 
                  placeholder="08123456789"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Provinsi</label>
                <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition">
                  <option>Pilih Provinsi</option>
                  <option>DKI Jakarta</option>
                  <option>Jawa Barat</option>
                  <option>Jawa Tengah</option>
                  <option>Jawa Timur</option>
                  <option>Bali</option>
                  <option>Sumatera Utara</option>
                  <option>Lainnya...</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Pesan (Opsional)</label>
                <textarea 
                  rows={4}
                  placeholder="Ceritakan motivasi Anda bergabung..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-red-600 text-white py-4 rounded-lg hover:bg-red-700 transition flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Daftar Sekarang
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-white mb-4">Mengapa Bergabung dengan Partai Ibu?</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>Berkontribusi untuk perubahan sosial yang nyata</span>
                </li>
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>Akses pelatihan kepemimpinan dan pemberdayaan</span>
                </li>
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>Networking dengan komunitas peduli Indonesia</span>
                </li>
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>Kesempatan menjadi bagian dari gerakan nasional</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-md text-center border-2 border-red-100">
                <UserPlus className="text-red-600 mx-auto mb-3" size={32} />
                <h3 className="text-gray-900 mb-1">Mudah</h3>
                <p className="text-sm text-gray-600">Proses pendaftaran cepat</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center border-2 border-red-100">
                <FileText className="text-red-600 mx-auto mb-3" size={32} />
                <h3 className="text-gray-900 mb-1">Gratis</h3>
                <p className="text-sm text-gray-600">Tidak ada biaya pendaftaran</p>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-600">
              <MessageSquare className="text-red-600 mb-3" size={28} />
              <p className="text-gray-700">
                <strong>Butuh bantuan?</strong><br />
                Hubungi kami di <span className="text-red-600">+62 21 1234 5678</span> atau email ke <span className="text-red-600">info@partaiibu.id</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
