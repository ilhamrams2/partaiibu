import { Flag, Users, Award } from 'lucide-react';

export function About() {
  return (
    <section id="tentang" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-4">
            <Flag className="w-4 h-4" />
            <span className="text-sm">Tentang Kami</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Partai Ibu untuk <span className="text-red-600">Indonesia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami percaya bahwa kekuatan kasih sayang seorang ibu dapat mengubah Indonesia menjadi negara yang lebih adil, sejahtera, dan penuh kepedulian.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border border-red-100">
            <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
              <Flag className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl text-gray-900 mb-3">Visi Indonesia</h3>
            <p className="text-gray-600">
              Mewujudkan Indonesia yang maju, adil, dan sejahtera dengan semangat gotong royong dan kepedulian untuk seluruh rakyat dari Sabang sampai Merauke.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border border-red-100">
            <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl text-gray-900 mb-3">Kepemimpinan Ibu</h3>
            <p className="text-gray-600">
              Menghadirkan kepemimpinan yang penuh kasih sayang, tegas namun bijaksana, dan selalu mengutamakan kepentingan keluarga Indonesia.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border border-red-100">
            <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl text-gray-900 mb-3">Integritas Tinggi</h3>
            <p className="text-gray-600">
              Berkomitmen untuk menjaga kejujuran, transparansi, dan akuntabilitas dalam setiap langkah untuk membangun kepercayaan rakyat Indonesia.
            </p>
          </div>
        </div>

        {/* Indonesia Colors */}
        <div className="relative py-16 px-8 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h3 className="text-3xl mb-4">Merah Putih Indonesia</h3>
            <p className="text-xl opacity-90 mb-8">
              Kami bangga menjadi bagian dari Indonesia. Dengan semangat merah putih, kami berkomitmen untuk mengabdi kepada negara dan seluruh rakyat Indonesia dengan sepenuh hati.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-20 h-12 bg-red-600 border-4 border-white rounded"></div>
              <div className="w-20 h-12 bg-white rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
