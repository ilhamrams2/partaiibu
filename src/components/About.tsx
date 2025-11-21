import { Flag, Award, Users2 } from 'lucide-react';

export function About() {
  return (
    <section id="tentang" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-red-600 mb-4">Tentang Partai Ibu</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partai Ibu adalah partai politik yang lahir dari kepedulian mendalam terhadap nasib bangsa Indonesia, 
            dengan semangat keibuan yang penuh kasih sayang, perlindungan, dan kebijaksanaan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Flag className="text-white" size={36} />
            </div>
            <h3 className="text-gray-900 mb-3">Nasionalisme</h3>
            <p className="text-gray-600">
              Mengutamakan kepentingan bangsa dan negara Indonesia di atas segalanya
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-white" size={36} />
            </div>
            <h3 className="text-gray-900 mb-3">Integritas</h3>
            <p className="text-gray-600">
              Menjunjung tinggi kejujuran, transparansi, dan akuntabilitas dalam setiap tindakan
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users2 className="text-white" size={36} />
            </div>
            <h3 className="text-gray-900 mb-3">Keadilan Sosial</h3>
            <p className="text-gray-600">
              Memperjuangkan keadilan dan kesejahteraan bagi seluruh rakyat Indonesia
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 md:p-12 rounded-2xl text-center">
          <h3 className="text-white mb-4">"Indonesia Butuh Sentuhan Kasih Ibu"</h3>
          <p className="text-xl text-red-50 max-w-4xl mx-auto">
            Seperti seorang ibu yang selalu melindungi, mendidik, dan memperjuangkan yang terbaik untuk anak-anaknya, 
            Partai Ibu hadir untuk memperjuangkan kesejahteraan seluruh rakyat Indonesia dengan penuh kasih sayang dan dedikasi.
          </p>
        </div>
      </div>
    </section>
  );
}
