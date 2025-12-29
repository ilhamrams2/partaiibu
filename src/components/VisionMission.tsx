import { Target, Compass, Heart, Users, GraduationCap, Briefcase, Shield, TrendingUp, Home, HandHeart, Star, Flag } from 'lucide-react';

export function VisionMission() {
  const missions = [
    {
      icon: Heart,
      title: 'Kesejahteraan Keluarga',
      description: 'Meningkatkan kesejahteraan seluruh keluarga Indonesia melalui program-program yang berpihak pada rakyat kecil.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: GraduationCap,
      title: 'Pendidikan Berkualitas',
      description: 'Menjamin akses pendidikan yang merata dan berkualitas untuk semua anak Indonesia tanpa terkecuali.',
      color: 'from-red-600 to-red-500'
    },
    {
      icon: Shield,
      title: 'Kesehatan Universal',
      description: 'Mewujudkan layanan kesehatan yang terjangkau dan berkualitas untuk seluruh rakyat Indonesia.',
      color: 'from-red-700 to-red-600'
    },
    {
      icon: Users,
      title: 'Pemberdayaan Perempuan',
      description: 'Meningkatkan peran dan partisipasi perempuan dalam semua aspek pembangunan nasional.',
      color: 'from-pink-500 to-red-600'
    },
    {
      icon: Briefcase,
      title: 'Ekonomi Kerakyatan',
      description: 'Mengembangkan ekonomi berbasis kerakyatan yang adil dan berkelanjutan untuk kemakmuran bersama.',
      color: 'from-red-600 to-red-700'
    },
    {
      icon: HandHeart,
      title: 'Perlindungan Sosial',
      description: 'Membangun sistem perlindungan sosial yang kuat untuk melindungi masyarakat dari kemiskinan.',
      color: 'from-red-500 to-red-700'
    },
    {
      icon: TrendingUp,
      title: 'Pertumbuhan Berkelanjutan',
      description: 'Mendorong pertumbuhan ekonomi yang berkelanjutan dengan tetap menjaga kelestarian lingkungan.',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Home,
      title: 'Perumahan Layak',
      description: 'Menyediakan akses perumahan yang layak dan terjangkau bagi seluruh keluarga Indonesia.',
      color: 'from-red-600 to-red-800'
    }
  ];

  const values = [
    { icon: Heart, text: 'Kasih Sayang', color: 'bg-red-500' },
    { icon: Shield, text: 'Integritas', color: 'bg-red-600' },
    { icon: HandHeart, text: 'Kepedulian', color: 'bg-red-700' },
    { icon: Star, text: 'Keadilan', color: 'bg-red-500' },
    { icon: Users, text: 'Kebersamaan', color: 'bg-red-600' },
    { icon: Flag, text: 'Nasionalisme', color: 'bg-red-700' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-red-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-4">
            <Compass className="w-4 h-4" />
            <span className="text-sm">Arah & Tujuan</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Visi & Misi <span className="text-red-600">Partai Ibu</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Membangun Indonesia yang adil, sejahtera, dan penuh kasih sayang untuk semua
          </p>
        </div>

        {/* VISI Section */}
        <div className="mb-20">
          <div className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-3xl p-12 md:p-16 text-white overflow-hidden shadow-2xl">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-white/5 rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Target className="w-10 h-10" />
                </div>
                <h3 className="text-4xl md:text-5xl">VISI</h3>
              </div>

              <div className="max-w-4xl mx-auto">
                <p className="text-2xl md:text-3xl text-center leading-relaxed mb-8">
                  "Mewujudkan Indonesia yang <span className="font-bold underline decoration-white/50">Maju, Adil, dan Sejahtera</span> melalui kepemimpinan yang penuh <span className="font-bold">Kasih Sayang</span> dan <span className="font-bold">Kepedulian</span> seperti seorang Ibu untuk seluruh rakyat Indonesia dari Sabang sampai Merauke"
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                    <div className="text-5xl mb-3">🇮🇩</div>
                    <h4 className="text-xl mb-2">Indonesia Maju</h4>
                    <p className="text-sm opacity-90">Kemajuan di segala bidang untuk kesejahteraan rakyat</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                    <div className="text-5xl mb-3">⚖️</div>
                    <h4 className="text-xl mb-2">Indonesia Adil</h4>
                    <p className="text-sm opacity-90">Keadilan sosial bagi seluruh rakyat Indonesia</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                    <div className="text-5xl mb-3">❤️</div>
                    <h4 className="text-xl mb-2">Indonesia Sejahtera</h4>
                    <p className="text-sm opacity-90">Kemakmuran dan kesejahteraan untuk semua keluarga</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MISI Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 bg-white p-4 rounded-2xl shadow-lg border-2 border-red-200">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center">
                <Compass className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl text-gray-900">MISI KAMI</h3>
            </div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              8 Langkah Strategis untuk mewujudkan visi Indonesia yang lebih baik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missions.map((mission, index) => {
              const Icon = mission.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${mission.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600">{index + 1}</span>
                    </div>
                  </div>
                  <h4 className="text-xl text-gray-900 mb-3">{mission.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{mission.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Nilai-nilai Dasar */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border-2 border-red-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl text-gray-900 mb-4">Nilai-Nilai Dasar</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fondasi kuat yang menjadi pedoman setiap langkah kami
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="flex flex-col items-center text-center group"
                >
                  <div className={`w-20 h-20 ${value.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-gray-900">{value.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-600 max-w-3xl mx-auto">
            <h4 className="text-2xl text-gray-900 mb-4">Komitmen Kami untuk Indonesia</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Visi dan misi ini bukan sekedar janji politik, tetapi komitmen nyata yang akan kami wujudkan bersama rakyat Indonesia. Setiap program yang kami jalankan selalu berpedoman pada visi dan misi ini untuk memastikan Indonesia yang lebih baik untuk anak cucu kita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors shadow-lg">
                Lihat Program Kami
              </button>
              <button className="bg-white text-red-600 px-8 py-3 rounded-full border-2 border-red-600 hover:bg-red-50 transition-colors">
                Bergabung dengan Kami
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
