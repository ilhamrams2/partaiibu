import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Gallery } from '../components/Gallery';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Image, Calendar } from 'lucide-react';

export function GalleryPage() {
  const galleries = [
    {
      title: 'Kunjungan Lapangan',
      images: [
        'https://images.unsplash.com/photo-1608613646347-7b8fe51b675f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwbW90aGVyJTIwZmFtaWx5fGVufDF8fHx8MTc2MzcwNTI4NHww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1612017888429-0110c5f45334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwcGVvcGxlJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2MzcwNTQ4OHww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1761516126131-bca685d38df5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwY3VsdHVyZSUyMGJhdGlrfGVufDF8fHx8MTc2MzcwNTI4NHww&ixlib=rb-4.1.0&q=80&w=1080'
      ]
    },
    {
      title: 'Program Sosial',
      images: [
        'https://images.unsplash.com/photo-1663580109859-b63aafcb275e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWElMjBmbGFnJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2MzcwNTI4NHww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1616460232138-bcb320dafc6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwd29tZW4lMjBzaG9wcGluZyUyMG1hcmtldHxlbnwxfHx8fDE3NjM3MDg3OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1598923926199-b19997f586cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwd29tYW4lMjBsZWFkZXJ8ZW58MXx8fHwxNzYzNjkxNTg4fDA&ixlib=rb-4.1.0&q=80&w=1080'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-6">
            <Image className="w-4 h-4" />
            <span className="text-sm">Galeri</span>
          </div>
          <h1 className="text-5xl md:text-6xl text-gray-900 mb-6">
            Galeri <span className="text-red-600">Kegiatan</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dokumentasi kegiatan dan program Partai Ibu di seluruh Indonesia
          </p>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-20">
          {galleries.map((gallery, index) => (
            <div key={index}>
              <div className="flex items-center gap-3 mb-8">
                <Calendar className="w-6 h-6 text-red-600" />
                <h2 className="text-3xl text-gray-900">{gallery.title}</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {gallery.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="relative rounded-2xl overflow-hidden shadow-xl group">
                    <ImageWithFallback 
                      src={image}
                      alt={`${gallery.title} ${imgIndex + 1}`}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <p className="text-white">Foto kegiatan {gallery.title.toLowerCase()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Gallery />

      <Footer />
    </div>
  );
}
