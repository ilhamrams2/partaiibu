import { ImageWithFallback } from './figma/ImageWithFallback';
import { Quote } from 'lucide-react';

export function ChairmanMessage() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1761516659539-20ec6f407ca4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRpayUyMHBhdHRlcm4lMjBpbmRvbmVzaWF8ZW58MXx8fHwxNzYzNjMxNTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Batik Pattern"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-red-600 mb-4">Sambutan Ketua Umum</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-center">
          {/* Photo */}
          <div className="md:col-span-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-red-400 rounded-2xl opacity-20 blur-xl"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1598923926199-b19997f586cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwd29tYW4lMjBsZWFkZXJ8ZW58MXx8fHwxNzYzNjkxNTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Ketua Umum Partai Ibu"
                  className="rounded-xl w-full"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                  <h3 className="text-gray-900 mb-1">Ibu Siti Nurhaliza, S.H., M.H.</h3>
                  <p className="text-sm text-red-600">Ketua Umum Partai Ibu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="md:col-span-3">
            <div className="bg-gradient-to-br from-red-50 to-white p-8 md:p-10 rounded-2xl shadow-lg border-l-4 border-red-600">
              <Quote className="text-red-600 mb-4" size={40} />
              
              <p className="text-lg text-gray-700 mb-4 italic">
                "Assalamualaikum warahmatullahi wabarakatuh, dan salam sejahtera untuk kita semua,"
              </p>

              <p className="text-gray-700 mb-4">
                Sebagai seorang ibu, perempuan, dan warga negara Indonesia, saya memahami betul tantangan yang dihadapi oleh keluarga-keluarga Indonesia. Dari kesulitan ekonomi, akses pendidikan yang terbatas, hingga layanan kesehatan yang masih perlu ditingkatkan.
              </p>

              <p className="text-gray-700 mb-4">
                Partai Ibu hadir bukan hanya sebagai partai politik biasa, tetapi sebagai gerakan perubahan yang membawa semangat keibuan—penuh kasih sayang, perlindungan, dan kebijaksanaan. Kami percaya bahwa Indonesia membutuhkan sentuhan kasih ibu dalam setiap kebijakan yang dibuat.
              </p>

              <p className="text-gray-700 mb-6">
                Mari bersama-sama kita bangun Indonesia yang lebih adil, sejahtera, dan penuh kasih. Indonesia yang kita cintai, Indonesia yang kita wariskan untuk anak cucu kita.
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-red-200">
                <div className="flex-1">
                  <p className="text-gray-900">Salam hormat,</p>
                  <p className="text-red-600">Ibu Siti Nurhaliza</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Jakarta, November 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
