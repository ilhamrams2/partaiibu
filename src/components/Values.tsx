import { Heart, Home, Baby, Users, GraduationCap, HandHeart, Sparkles, Shield } from 'lucide-react';

export function Values() {
  const values = [
    {
      icon: Heart,
      title: 'Kasih Sayang',
      description: 'Kepemimpinan yang penuh cinta dan kepedulian untuk seluruh rakyat Indonesia',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Home,
      title: 'Keluarga Sejahtera',
      description: 'Memprioritaskan kesejahteraan keluarga sebagai fondasi bangsa yang kuat',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Baby,
      title: 'Perlindungan Anak',
      description: 'Menjamin masa depan anak-anak Indonesia dengan pendidikan dan kesehatan terbaik',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: Users,
      title: 'Pemberdayaan Perempuan',
      description: 'Meningkatkan peran dan partisipasi perempuan dalam pembangunan Indonesia',
      color: 'from-red-600 to-red-500'
    },
    {
      icon: GraduationCap,
      title: 'Pendidikan Berkualitas',
      description: 'Memastikan akses pendidikan yang merata dan berkualitas untuk semua',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: HandHeart,
      title: 'Gotong Royong',
      description: 'Menjaga nilai tradisional Indonesia dalam semangat kebersamaan',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Sparkles,
      title: 'Inovasi & Kreativitas',
      description: 'Mendorong solusi kreatif untuk tantangan Indonesia modern',
      color: 'from-pink-500 to-red-600'
    },
    {
      icon: Shield,
      title: 'Keadilan Sosial',
      description: 'Mewujudkan keadilan dan kesejahteraan bagi seluruh rakyat Indonesia',
      color: 'from-red-600 to-red-700'
    }
  ];

  return (
    <section id="nilai" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-red-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Nilai-Nilai Kami</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Nilai <span className="text-red-600">Ibu</span> untuk Indonesia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seperti seorang ibu yang selalu melindungi dan membesarkan anaknya, kami berkomitmen dengan nilai-nilai ini untuk Indonesia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Mother Icons Section */}
        <div className="mt-20 bg-white p-12 rounded-3xl shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl text-gray-900 mb-4">Peran Ibu dalam Membangun Bangsa</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ibu adalah pilar utama keluarga dan masyarakat. Kami percaya bahwa nilai-nilai keibuan adalah kunci untuk Indonesia yang lebih baik.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-white fill-white" />
              </div>
              <h4 className="text-xl text-gray-900 mb-2">Penuh Kasih</h4>
              <p className="text-gray-600">Kepemimpinan yang penuh empati dan kepedulian untuk semua</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl text-gray-900 mb-2">Melindungi</h4>
              <p className="text-gray-600">Menjaga dan melindungi kepentingan seluruh rakyat Indonesia</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl text-gray-900 mb-2">Menginspirasi</h4>
              <p className="text-gray-600">Memberikan teladan dan inspirasi untuk generasi masa depan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
