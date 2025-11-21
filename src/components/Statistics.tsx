import { Users, MapPin, Award, Heart } from 'lucide-react';
import { IndonesiaMap } from './IndonesiaMap';

const stats = [
  {
    icon: Users,
    value: '2.5 Juta+',
    label: 'Anggota Aktif',
    color: 'text-red-600'
  },
  {
    icon: MapPin,
    value: '34 Provinsi',
    label: 'Jangkauan Nasional',
    color: 'text-red-600'
  },
  {
    icon: Award,
    value: '500+',
    label: 'Program Sosial',
    color: 'text-red-600'
  },
  {
    icon: Heart,
    value: '10 Juta+',
    label: 'Keluarga Terbantu',
    color: 'text-red-600'
  }
];

export function Statistics() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-red-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-red-600 mb-4">Partai Ibu di Seluruh Indonesia</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kehadiran kami tersebar di 34 provinsi, dari Sabang sampai Merauke
          </p>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 border-4 border-red-100">
          <div className="max-w-4xl mx-auto">
            <IndonesiaMap />
            <p className="text-center text-gray-600 mt-6">
              Dari Aceh hingga Papua, Partai Ibu hadir untuk seluruh rakyat Indonesia
            </p>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center border-t-4 border-red-600">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className={stat.color} size={32} />
              </div>
              <h3 className="text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full shadow-lg">
            <p className="text-xl">🇮🇩 Bersatu untuk Indonesia yang Lebih Baik 🇮🇩</p>
          </div>
        </div>
      </div>
    </section>
  );
}
