import { Target, CheckCircle } from 'lucide-react';

const misiList = [
  'Meningkatkan kesejahteraan keluarga Indonesia melalui program ekonomi kerakyatan',
  'Melindungi hak-hak perempuan dan anak di seluruh Indonesia',
  'Memberdayakan ibu dan perempuan sebagai agen perubahan sosial',
  'Mewujudkan layanan kesehatan dan pendidikan yang berkualitas dan terjangkau',
  'Membangun sistem perlindungan sosial yang kuat untuk keluarga Indonesia'
];

export function VisiMisi() {
  return (
    <section id="visi-misi" className="py-20 bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Visi */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-600">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <Target className="text-white" size={24} />
              </div>
              <h2 className="text-red-600">Visi</h2>
            </div>
            <p className="text-xl text-gray-700">
              "Mewujudkan Indonesia yang adil, sejahtera, dan berdaulat dengan kepemimpinan yang penuh kasih, kebijaksanaan, dan keberpihakan kepada rakyat"
            </p>
          </div>

          {/* Misi */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-600">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h2 className="text-red-600">Misi</h2>
            </div>
            <ul className="space-y-4">
              {misiList.map((misi, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle className="text-red-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{misi}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
