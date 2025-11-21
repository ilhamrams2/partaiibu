import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Values } from './components/Values';
import { About } from './components/About';
import { ChairmanMessage } from './components/ChairmanMessage';
import { Statistics } from './components/Statistics';
import { VisiMisi } from './components/VisiMisi';
import { Programs } from './components/Programs';
import { Timeline } from './components/Timeline';
import { Gallery } from './components/Gallery';
import { JoinUs } from './components/JoinUs';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ChairmanMessage />
      <Values />
      <Statistics />
      <About />
      <VisiMisi />
      <Programs />
      <Timeline />
      <Gallery />
      <JoinUs />
      <Footer />
    </div>
  );
}