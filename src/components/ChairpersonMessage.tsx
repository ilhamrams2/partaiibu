import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Quote } from 'lucide-react';

export function ChairpersonMessage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-red-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto">
        {/* Photo Section - Full Width */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 rounded-3xl transform rotate-1"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1598923926199-b19997f586cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwd29tYW4lMjBsZWFkZXJ8ZW58MXx8fHwxNzYzNjkxNTg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Ketua Umum Partai Ibu"
              className="w-full h-[400px] object-cover object-center"
            />
            {/* Overlay Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-white text-3xl mb-2">Ibu Siti Rahmawati, S.H., M.Si</h3>
                <p className="text-red-300">Ketua Umum Partai Ibu</p>
                <p className="text-white/90 text-sm mt-1">Periode 2024-2029</p>
              </div>
            </div>
          </div>

          {/* Decorative Quote Icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center">
            <Quote className="w-10 h-10 text-red-600" />
          </div>
        </div>

        {/* Message Content */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-2 border-red-100">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6 text-center italic">
              <span className="text-5xl text-red-600 leading-none">"</span>
              Assalamu'alaikum warahmatullahi wabarakatuh dan salam sejahtera untuk seluruh rakyat Indonesia.
              <span className="text-5xl text-red-600 leading-none">"</span>
            </p>
            
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                Sebagai seorang ibu, saya memahami betul bagaimana pentingnya kasih sayang, perlindungan, dan pengorbanan untuk masa depan yang lebih baik. Nilai-nilai inilah yang kami bawa ke dalam dunia politik Indonesia.
              </p>

              <p>
                <strong className="text-red-600">Partai Ibu</strong> hadir bukan hanya sebagai partai politik biasa, tetapi sebagai gerakan perubahan yang mengutamakan kesejahteraan keluarga Indonesia. Dari Sabang sampai Merauke, kami berkomitmen untuk menghadirkan kepemimpinan yang jujur, peduli, dan berintegritas.
              </p>

              <p>
                Kami percaya bahwa Indonesia yang kuat dimulai dari keluarga yang sejahtera, anak-anak yang sehat dan terdidik, serta perempuan yang diberdayakan. Inilah visi kami untuk Indonesia di masa depan.
              </p>

              <p>
                Mari bersama-sama kita wujudkan Indonesia yang lebih adil, makmur, dan penuh kasih sayang. Karena Indonesia adalah rumah kita bersama, dan setiap keluarga Indonesia berhak mendapatkan kehidupan yang layak.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t-2 border-red-100 text-center">
              <p className="text-gray-700 mb-2">Wassalamu'alaikum warahmatullahi wabarakatuh,</p>
              <p className="text-red-600 text-2xl italic mb-1">Ibu Siti Rahmawati</p>
              <p className="text-gray-600">Ketua Umum Partai Ibu</p>
            </div>
          </div>
        </div>

        {/* Quote Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-gradient-to-br from-red-600 to-red-700 p-8 rounded-2xl text-white text-center shadow-xl hover:shadow-2xl transition-shadow">
            <Heart className="w-12 h-12 mb-4 fill-white mx-auto" />
            <p className="text-sm mb-3 opacity-90 uppercase tracking-wide">Filosofi Kami</p>
            <p className="text-xl">"Indonesia adalah keluarga besar kita"</p>
          </div>
          
          <div className="bg-gradient-to-br from-red-700 to-red-800 p-8 rounded-2xl text-white text-center shadow-xl hover:shadow-2xl transition-shadow">
            <Quote className="w-12 h-12 mb-4 mx-auto" />
            <p className="text-sm mb-3 opacity-90 uppercase tracking-wide">Komitmen Kami</p>
            <p className="text-xl">"Kepedulian untuk setiap anak bangsa"</p>
          </div>
        </div>
      </div>
    </section>
  );
}