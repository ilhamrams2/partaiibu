import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { ChairpersonMessage } from '../components/ChairpersonMessage';
import { Values } from '../components/Values';
import { Programs } from '../components/Programs';
import { IndonesiaCoverage } from '../components/IndonesiaCoverage';
import { News } from '../components/News';
import { Gallery } from '../components/Gallery';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <ChairpersonMessage />
      <Values />
      <Programs />
      <IndonesiaCoverage />
      <News />
      <Gallery />
      <Footer />
    </div>
  );
}
