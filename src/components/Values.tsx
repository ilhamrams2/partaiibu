import { Heart, Users, Shield, Sparkles, Home, BookOpen } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Kasih Sayang',
    description: 'Memimpin dengan hati yang penuh kasih dan empati untuk seluruh rakyat Indonesia',
    color: 'bg-red-50 text-red-600'
  },
  {
    icon: Users,
    title: 'Kebersamaan',
    description: 'Membangun Indonesia melalui gotong royong dan kebersamaan',
    color: 'bg-red-50 text-red-600'
  },
  {
    icon: Shield,
    title: 'Perlindungan',
    description: 'Melindungi hak-hak perempuan, anak, dan keluarga Indonesia',
    color: 'bg-red-50 text-red-600'
  },
  {
    icon: Sparkles,
    title: 'Pemberdayaan',
    description: 'Memberdayakan ibu dan perempuan sebagai pilar bangsa',
    color: 'bg-red-50 text-red-600'
  },
  {
    icon: Home,
    title: 'Keluarga Sejahtera',
    description: 'Mewujudkan kesejahteraan keluarga Indonesia yang merata',
    color: 'bg-red-50 text-red-600'
  },
  {
    icon: BookOpen,
    title: 'Pendidikan',
    description: 'Mendorong pendidikan berkualitas untuk generasi emas Indonesia',
    color: 'bg-red-50 text-red-600'
  }
];

export function Values() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-red-600 mb-4">Nilai-Nilai Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partai Ibu berdiri dengan nilai-nilai keibuan yang menjadi fondasi untuk membangun Indonesia yang lebih baik
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="p-6 rounded-xl border-2 border-gray-100 hover:border-red-200 hover:shadow-lg transition-all">
              <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mb-4`}>
                <value.icon size={32} />
              </div>
              <h3 className="text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
