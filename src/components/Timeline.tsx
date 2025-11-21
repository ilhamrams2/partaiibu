import { Calendar } from 'lucide-react';

const timelineEvents = [
  {
    year: '2020',
    title: 'Deklarasi Partai Ibu',
    description: 'Pendirian Partai Ibu dengan visi membangun Indonesia yang lebih peduli dan sejahtera'
  },
  {
    year: '2021',
    title: 'Verifikasi Partai',
    description: 'Mendapat pengesahan dari KPU sebagai partai politik nasional'
  },
  {
    year: '2022',
    title: 'Ekspansi Nasional',
    description: 'Membuka kantor DPW di 34 provinsi seluruh Indonesia'
  },
  {
    year: '2023',
    title: 'Program Sosial Masif',
    description: 'Meluncurkan 500+ program sosial untuk membantu keluarga Indonesia'
  },
  {
    year: '2024',
    title: 'Pencapaian 2,5 Juta Anggota',
    description: 'Mencapai 2,5 juta anggota aktif di seluruh Indonesia'
  },
  {
    year: '2025',
    title: 'Menuju Pemilu',
    description: 'Siap berkompetisi untuk mewujudkan Indonesia yang lebih baik'
  }
];

export function Timeline() {
  return (
    <section className="py-20 bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-red-600 mb-4">Perjalanan Partai Ibu</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dari deklarasi hingga menjadi kekuatan politik untuk rakyat Indonesia
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-200"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-red-600">
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="text-red-600" size={20} />
                      <span className="text-red-600">{event.year}</span>
                    </div>
                    <h3 className="text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Empty Space for alternate layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
