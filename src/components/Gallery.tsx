import { ImageWithFallback } from './figma/ImageWithFallback';
import { Flag, Heart } from 'lucide-react';

export function Gallery() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-4">
            <Flag className="w-4 h-4" />
            <span className="text-sm">Indonesia Kita</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Bersama Membangun <span className="text-red-600">Indonesia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dari Sabang sampai Merauke, kami hadir untuk seluruh keluarga Indonesia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=80"
              alt="Indonesian Family"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-2xl mb-1">Keluarga Indonesia</h3>
                <p className="text-sm opacity-90">Fondasi bangsa yang kuat</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1604999333679-b86d54738315?w=800&auto=format&fit=crop&q=80"
              alt="Indonesian Culture"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-2xl mb-1">Budaya Nusantara</h3>
                <p className="text-sm opacity-90">Kekayaan Indonesia yang luar biasa</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&auto=format&fit=crop&q=80"
              alt="Indonesia Flag"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-2xl mb-1">Merah Putih</h3>
                <p className="text-sm opacity-90">Semangat Indonesia Merdeka</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-3xl p-12 md:p-16 text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 fill-white" />
            </div>
            
            <h3 className="text-3xl md:text-4xl mb-6">
              Bergabunglah dengan <span className="font-bold">Partai Ibu</span>
            </h3>
            <p className="text-xl opacity-90 mb-8">
              Mari bersama-sama membangun Indonesia yang lebih baik untuk anak cucu kita. Setiap suara Anda adalah suara untuk perubahan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Daftar Sebagai Anggota
              </button>
              <button className="bg-red-500 text-white px-8 py-4 rounded-full border-2 border-white hover:bg-red-400 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Hubungi Kami
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl mb-1">🇮🇩</div>
                <div className="text-sm opacity-90">Indonesia Merdeka</div>
              </div>
              <div>
                <div className="text-3xl mb-1">❤️</div>
                <div className="text-sm opacity-90">Kasih Sayang Ibu</div>
              </div>
              <div>
                <div className="text-3xl mb-1">🌟</div>
                <div className="text-sm opacity-90">Masa Depan Cerah</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
