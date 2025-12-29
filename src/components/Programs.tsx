import { Baby, Heart, GraduationCap, Briefcase, Home, Apple, Stethoscope, Sparkles } from 'lucide-react';

export function Programs() {
  const programs = [
    {
      icon: Baby,
      title: 'Program Ibu & Anak Sehat',
      description: 'Akses kesehatan gratis untuk ibu hamil dan anak hingga usia 5 tahun di seluruh Indonesia',
      stats: '1 Juta+ Keluarga Terbantu',
      image: 'https://images.unsplash.com/photo-1608613646347-7b8fe51b675f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwbW90aGVyJTIwZmFtaWx5fGVufDF8fHx8MTc2MzcwNTI4NHww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: GraduationCap,
      title: 'Beasiswa Anak Indonesia',
      description: 'Beasiswa penuh untuk anak-anak berprestasi dari keluarga kurang mampu',
      stats: '50,000 Penerima/Tahun',
      image: 'https://images.unsplash.com/photo-1761516126131-bca685d38df5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwY3VsdHVyZSUyMGJhdGlrfGVufDF8fHx8MTc2MzcwNTI4NHww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Briefcase,
      title: 'Pemberdayaan UMKM Ibu',
      description: 'Modal usaha tanpa bunga dan pelatihan bisnis untuk ibu-ibu pengusaha',
      stats: 'Rp 500M Dana Bergulir',
      image: 'https://images.unsplash.com/photo-1663580109859-b63aafcb275e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWElMjBmbGFnJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2MzcwNTI4NHww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Home,
      title: 'Rumah Layak untuk Keluarga',
      description: 'Program renovasi dan pembangunan rumah layak huni untuk keluarga Indonesia',
      stats: '10,000 Unit/Tahun',
      image: 'https://images.unsplash.com/photo-1761516126131-bca685d38df5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwY3VsdHVyZSUyMGJhdGlrfGVufDF8fHx8MTc2MzcwNTI4NHww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-red-600 to-red-700'
    }
  ];

  return (
    <section id="program" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Program Unggulan</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Program untuk <span className="text-red-600">Keluarga Indonesia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Program nyata yang sudah dan akan terus kami jalankan untuk kesejahteraan seluruh rakyat Indonesia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-100 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                  
                  <div className="flex items-center gap-2 text-red-600 mb-4">
                    <Heart className="w-4 h-4 fill-red-600" />
                    <span className="text-sm">{program.stats}</span>
                  </div>

                  <button className="text-red-600 hover:text-red-700 transition-colors flex items-center gap-2 group/btn">
                    <span>Pelajari Lebih Lanjut</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Programs */}
        <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-12 text-white">
          <h3 className="text-3xl text-center mb-12">Program Lainnya</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <Stethoscope className="w-10 h-10 mb-4" />
              <h4 className="text-xl mb-2">Posyandu Digital</h4>
              <p className="text-sm opacity-90">Layanan kesehatan modern di setiap desa</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <Apple className="w-10 h-10 mb-4" />
              <h4 className="text-xl mb-2">Gizi Seimbang</h4>
              <p className="text-sm opacity-90">Program pangan bergizi untuk anak Indonesia</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <Heart className="w-10 h-10 mb-4 fill-white" />
              <h4 className="text-xl mb-2">Keluarga Bahagia</h4>
              <p className="text-sm opacity-90">Konseling gratis untuk keluarga Indonesia</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <Sparkles className="w-10 h-10 mb-4" />
              <h4 className="text-xl mb-2">Kreativitas Anak</h4>
              <p className="text-sm opacity-90">Wadah bakat dan kreativitas anak bangsa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
