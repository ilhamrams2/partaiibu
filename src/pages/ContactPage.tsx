import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Mail, Phone, MapPin, Send, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-6">
            <Mail className="w-4 h-4" />
            <span className="text-sm">Hubungi Kami</span>
          </div>
          <h1 className="text-5xl md:text-6xl text-gray-900 mb-6">
            Kontak <span className="text-red-600">Partai Ibu</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami siap mendengarkan aspirasi Anda untuk Indonesia yang lebih baik
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl text-gray-900 mb-6">Informasi Kontak</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Jangan ragu untuk menghubungi kami. Tim kami siap membantu dan menjawab pertanyaan Anda tentang Partai Ibu dan program-program kami.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-red-50 rounded-2xl border border-red-100">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1">Alamat Kantor Pusat</h3>
                    <p className="text-gray-600">Jl. Merdeka No. 17, Jakarta Pusat, DKI Jakarta 10110, Indonesia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-red-50 rounded-2xl border border-red-100">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1">Telepon</h3>
                    <p className="text-gray-600">+62 21 1945 1945</p>
                    <p className="text-gray-600">+62 812 3456 7890 (WhatsApp)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-red-50 rounded-2xl border border-red-100">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@partaiibu.id</p>
                    <p className="text-gray-600">humas@partaiibu.id</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-red-50 rounded-2xl border border-red-100">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1">Jam Operasional</h3>
                    <p className="text-gray-600">Senin - Jumat: 08.00 - 17.00 WIB</p>
                    <p className="text-gray-600">Sabtu: 08.00 - 12.00 WIB</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl text-gray-900 mb-4">Media Sosial</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                    <Twitter className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                    <Youtube className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-3xl border-2 border-red-100 shadow-xl">
              <h2 className="text-3xl text-gray-900 mb-6">Kirim Pesan</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-700 mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-colors"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-colors"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">Nomor Telepon</label>
                  <input 
                    type="tel" 
                    id="phone"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-colors"
                    placeholder="+62 812 3456 7890"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-gray-700 mb-2">Subjek</label>
                  <input 
                    type="text" 
                    id="subject"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-colors"
                    placeholder="Perihal pesan Anda"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-700 mb-2">Pesan</label>
                  <textarea 
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-colors resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-red-600 text-white px-8 py-4 rounded-full hover:bg-red-700 transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Kirim Pesan</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-3xl text-gray-900 mb-6 text-center">Lokasi Kantor Pusat</h2>
            <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <p className="text-gray-600">Peta lokasi kantor pusat</p>
                <p className="text-sm text-gray-500 mt-2">Jl. Merdeka No. 17, Jakarta Pusat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
