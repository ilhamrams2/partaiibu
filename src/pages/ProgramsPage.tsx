import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Programs } from '../components/Programs';
import { Sparkles } from 'lucide-react';

export function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Program Unggulan</span>
          </div>
          <h1 className="text-5xl md:text-6xl text-gray-900 mb-6">
            Program <span className="text-red-600">Partai Ibu</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Program nyata untuk kesejahteraan seluruh keluarga Indonesia dari Sabang sampai Merauke
          </p>
        </div>
      </section>

      <Programs />

      <Footer />
    </div>
  );
}
