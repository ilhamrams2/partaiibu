import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';

export function News() {
  const news = [
    {
      title: 'Partai Ibu Luncurkan Program Beasiswa untuk 50,000 Anak Indonesia',
      excerpt: 'Program beasiswa pendidikan gratis diluncurkan untuk membantu anak-anak Indonesia dari keluarga kurang mampu...',
      date: '18 November 2025',
      category: 'Program',
      image: 'https://images.unsplash.com/photo-1761516126131-bca685d38df5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwY3VsdHVyZSUyMGJhdGlrfGVufDF8fHx8MTc2MzcwNTI4NHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Kunjungan ke 10 Provinsi: Mendengar Aspirasi Ibu-Ibu Indonesia',
      excerpt: 'Ketua Umum Partai Ibu melakukan kunjungan kerja ke berbagai provinsi untuk mendengar langsung aspirasi masyarakat...',
      date: '15 November 2025',
      category: 'Kegiatan',
      image: 'https://images.unsplash.com/photo-1608613646347-7b8fe51b675f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwbW90aGVyJTIwZmFtaWx5fGVufDF8fHx8MTc2MzcwNTI4NHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'UMKM Binaan Partai Ibu Raih Omzet Miliaran Rupiah',
      excerpt: 'Ratusan UMKM yang dibina Partai Ibu berhasil meningkatkan omzet hingga ratusan persen dalam 6 bulan terakhir...',
      date: '12 November 2025',
      category: 'Prestasi',
      image: 'https://images.unsplash.com/photo-1612017888429-0110c5f45334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwcGVvcGxlJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2MzcwNTQ4OHww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-4">
            <Newspaper className="w-4 h-4" />
            <span className="text-sm">Berita Terkini</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Berita & <span className="text-red-600">Kegiatan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Update terbaru tentang program dan kegiatan Partai Ibu untuk Indonesia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {news.map((item, index) => (
            <article 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                
                <h3 className="text-xl text-gray-900 mb-3 leading-tight group-hover:text-red-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                
                <button className="flex items-center gap-2 text-red-600 hover:gap-3 transition-all group/btn">
                  <span className="text-sm">Baca Selengkapnya</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* All News Button */}
        <div className="text-center">
          <button className="bg-red-600 text-white px-8 py-4 rounded-full hover:bg-red-700 transition-colors shadow-lg inline-flex items-center gap-2">
            <span>Lihat Semua Berita</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
