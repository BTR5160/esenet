import { Navigation } from '@/components/sections/Navigation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Program } from '@/components/sections/Program';
import { Panels } from '@/components/sections/Panels';
import { Exhibitors } from '@/components/sections/Exhibitors';
import { Sponsors } from '@/components/sections/Sponsors';
import { Gallery } from '@/components/sections/Gallery';
import { Registration } from '@/components/sections/Registration';
import { Footer } from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Program />
      <Panels />
      <Exhibitors />
      <Sponsors />
      <Gallery />
      <Registration />
      <Footer />
    </div>
  );
};

export default Index;
