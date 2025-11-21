import { Baby, GraduationCap, Briefcase, Stethoscope, Utensils, HandHeart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const programs = [
  {
    icon: Baby,
    title: 'Ibu dan Anak Sehat',
    description: 'Program kesehatan gratis untuk ibu hamil dan anak balita di seluruh Indonesia',
    color: 'bg-pink-100 text-pink-600'
  },
  {
    icon: GraduationCap,
    title: 'Beasiswa Anak Bangsa',
    description: 'Beasiswa pendidikan dari SD hingga perguruan tinggi untuk keluarga kurang mampu',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Briefcase,
    title: 'UMKM Ibu Berdaya',
    description: 'Pemberdayaan ekonomi melalui modal usaha dan pelatihan untuk ibu-ibu',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Stethoscope,
    title: 'Posyandu Digital',
    description: 'Modernisasi posyandu dengan teknologi untuk pelayanan kesehatan yang lebih baik',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Utensils,
    title: 'Gizi Keluarga',
    description: 'Program bantuan pangan bergizi dan edukasi gizi untuk keluarga Indonesia',
    color: 'bg-orange-100 text-orange-600'
  },
  {
    icon: HandHeart,
    title: 'Perlindungan Sosial',
    description: 'Jaminan sosial dan perlindungan hukum untuk perempuan dan anak',
    color: 'bg-red-100 text-red-600'
  }
];

export function Programs() {
  return (
    <section id="program" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-red-600 mb-4">Program Unggulan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Program-program nyata untuk kesejahteraan rakyat Indonesia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100">
              <div className={`w-16 h-16 ${program.color} rounded-2xl flex items-center justify-center mb-4`}>
                <program.icon size={32} />
              </div>
              <h3 className="text-gray-900 mb-3">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-red-600 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-white mb-4">Bersama Membangun Indonesia</h3>
              <p className="text-red-50 mb-6">
                Bergabunglah dengan kami untuk mewujudkan Indonesia yang lebih baik. Setiap suara Anda adalah harapan untuk masa depan yang lebih cerah.
              </p>
              <button className="bg-white text-red-600 px-8 py-3 rounded-full hover:bg-red-50 transition self-start">
                Daftar Sekarang
              </button>
            </div>
            <div className="h-64 md:h-auto">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1720262410964-d2a6f67447eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBjYXJpbmclMjBjaGlsZHJlbnxlbnwxfHx8fDE3NjM2OTEzOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Ibu dan Anak"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
