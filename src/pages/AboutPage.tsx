import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ChairpersonMessage } from '../components/ChairpersonMessage';
import { Flag, Users, Award, Heart, Target, History } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  const history = [
    { year: '2023', event: 'Pendirian Partai Ibu', description: 'Partai resmi didirikan dengan visi untuk Indonesia yang lebih baik' },
    { year: '2024', event: 'Peluncuran Program Nasional', description: 'Meluncurkan 10 program unggulan untuk kesejahteraan rakyat' },
    { year: '2024', event: 'Ekspansi ke 34 Provinsi', description: 'Membuka kantor cabang di seluruh Indonesia' },
    { year: '2025', event: 'Capaian 2.5 Juta Anggota', description: 'Partai berkembang pesat dengan dukungan masyarakat luas' }
  ];

  const team = [
    {
      name: 'Ibu Siti Rahmawati, S.H., M.Si',
      position: 'Ketua Umum',
      image: 'https://images.unsplash.com/photo-1598923926199-b19997f586cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwd29tYW4lMjBsZWFkZXJ8ZW58MXx8fHwxNzYzNjkxNTg4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Ibu Rina Wulandari, M.M.',
      position: 'Sekretaris Jenderal',
      image: 'https://images.unsplash.com/photo-1608613646347-7b8fe51b675f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwbW90aGVyJTIwZmFtaWx5fGVufDF8fHx8MTc2MzcwNTI4NHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Ibu Maya Kusuma, S.E., M.Ak',
      position: 'Bendahara Umum',
      image: 'https://images.unsplash.com/photo-1612017888429-0110c5f45334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwcGVvcGxlJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2MzcwNTQ4OHww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-6">
            <Flag className="w-4 h-4" />
            <span className="text-sm">Tentang Kami</span>
          </div>
          <h1 className="text-5xl md:text-6xl text-gray-900 mb-6">
            Mengenal <span className="text-red-600">Partai Ibu</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partai politik yang menghadirkan kepemimpinan penuh kasih sayang untuk Indonesia yang lebih baik
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border border-red-100">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                <Flag className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-3">Visi Indonesia</h3>
              <p className="text-gray-600">
                Mewujudkan Indonesia yang maju, adil, dan sejahtera dengan semangat gotong royong dan kepedulian.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border border-red-100">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-3">Kepemimpinan Ibu</h3>
              <p className="text-gray-600">
                Menghadirkan kepemimpinan yang penuh kasih sayang, tegas namun bijaksana untuk Indonesia.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border border-red-100">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-3">Integritas Tinggi</h3>
              <p className="text-gray-600">
                Berkomitmen menjaga kejujuran, transparansi, dan akuntabilitas dalam setiap langkah.
              </p>
            </div>
          </div>

          {/* History Timeline */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-4">
                <History className="w-4 h-4" />
                <span className="text-sm">Perjalanan Kami</span>
              </div>
              <h2 className="text-4xl text-gray-900 mb-4">Sejarah Partai Ibu</h2>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-red-200 -translate-x-1/2 hidden md:block"></div>
              
              <div className="space-y-12">
                {history.map((item, index) => (
                  <div key={index} className={`relative grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}`}>
                      <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-red-600">
                        <div className="text-3xl text-red-600 mb-2">{item.year}</div>
                        <h3 className="text-xl text-gray-900 mb-2">{item.event}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-red-600 rounded-full items-center justify-center border-4 border-white shadow-lg">
                      <Heart className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chairperson Message */}
      <ChairpersonMessage />

      {/* Leadership Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-4">
              <Users className="w-4 h-4" />
              <span className="text-sm">Kepemimpinan</span>
            </div>
            <h2 className="text-4xl text-gray-900 mb-4">Pengurus Partai</h2>
            <p className="text-xl text-gray-600">Tim kepemimpinan yang berdedikasi untuk Indonesia</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-xl border border-red-100 group hover:shadow-2xl transition-shadow">
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl mb-1">{member.name}</h3>
                    <p className="text-red-300">{member.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
