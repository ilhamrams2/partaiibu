import { IndonesiaMap } from './IndonesiaMap';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Users, Building, Flag } from 'lucide-react';

export function IndonesiaCoverage() {
  const stats = [
    {
      icon: Flag,
      number: '34',
      label: 'Provinsi',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Building,
      number: '514',
      label: 'Kabupaten/Kota',
      color: 'from-red-600 to-red-700'
    },
    {
      icon: Users,
      number: '2.5 Juta+',
      label: 'Anggota Aktif',
      color: 'from-red-700 to-red-800'
    },
    {
      icon: MapPin,
      number: '7,500+',
      label: 'Kantor Cabang',
      color: 'from-red-500 to-red-700'
    }
  ];

  const regions = [
    { name: 'Sumatra', offices: 1245, members: '425K' },
    { name: 'Jawa', offices: 3280, members: '1.2M' },
    { name: 'Kalimantan', offices: 850, members: '280K' },
    { name: 'Sulawesi', offices: 920, members: '310K' },
    { name: 'Bali & Nusa Tenggara', offices: 540, members: '180K' },
    { name: 'Maluku & Papua', offices: 665, members: '205K' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Jangkauan Nasional</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Hadir di Seluruh <span className="text-red-600">Nusantara</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dari Sabang sampai Merauke, dari Miangas sampai Pulau Rote, Partai Ibu hadir untuk seluruh rakyat Indonesia
          </p>
        </div>

        {/* Statistics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-red-100 hover:shadow-xl transition-shadow"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 border-4 border-red-100">
          <div className="mb-8">
            <h3 className="text-3xl text-center text-gray-900 mb-2">
              Peta <span className="text-red-600">Indonesia</span>
            </h3>
            <p className="text-center text-gray-600">
              Jangkauan Partai Ibu di seluruh kepulauan Indonesia
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
            <IndonesiaMap />
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-600 rounded-full"></div>
              <span className="text-sm text-gray-700">Kantor Pusat</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-300 rounded-full"></div>
              <span className="text-sm text-gray-700">Kantor Regional</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-red-600 to-red-900 rounded"></div>
              <span className="text-sm text-gray-700">Wilayah Indonesia</span>
            </div>
          </div>
        </div>

        {/* Regional Data */}
        <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-3xl text-center mb-8">Data per Wilayah Indonesia</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl">{region.name}</h4>
                  <MapPin className="w-5 h-5 opacity-80" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="opacity-90">Kantor Cabang:</span>
                    <span className="font-semibold">{region.offices.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="opacity-90">Anggota:</span>
                    <span className="font-semibold">{region.members}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <div className="text-xs opacity-75">Status: Aktif & Berkembang</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg opacity-90 mb-6">
              🇮🇩 Bersatu dalam Kebhinekaan, Maju bersama Partai Ibu 🇮🇩
            </p>
            <button className="bg-white text-red-600 px-8 py-4 rounded-full hover:bg-red-50 transition-colors shadow-lg">
              Lihat Kantor Terdekat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}