import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="beranda" className="relative bg-gradient-to-r from-red-600 to-red-700 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1683884344837-056f4a040299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWElMjBmbGFnJTIwcmVkJTIwd2hpdGV8ZW58MXx8fHwxNzYzNjkxMzkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Indonesia"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-white mb-6">
              PARTAI IBU<br />
              <span className="text-red-200">Suara Kasih untuk Indonesia</span>
            </h1>
            <p className="text-xl mb-8 text-red-50">
              Membangun Indonesia yang lebih adil, peduli, dan sejahtera melalui kepemimpinan yang penuh kasih dan kebijaksanaan
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#program" className="bg-white text-red-600 px-8 py-3 rounded-full hover:bg-red-50 transition">
                Lihat Program
              </a>
              <a href="#tentang" className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-red-600 transition">
                Tentang Kami
              </a>
            </div>
          </div>
          <div className="relative">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1752760023440-6e912553de03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwd29tYW4lMjBjb21tdW5pdHl8ZW58MXx8fHwxNzYzNjkxMzkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Komunitas Ibu Indonesia"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
