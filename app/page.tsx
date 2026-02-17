import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Industries from '@/components/sections/Industries';
import WhyUs from '@/components/sections/WhyUs';
import Process from '@/components/sections/Process';
import Portfolio from '@/components/sections/Portfolio';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <WhyUs />
        <Process />
        <Portfolio />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
