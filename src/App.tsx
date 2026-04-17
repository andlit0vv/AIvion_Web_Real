import Header from './sections/Header';
import IntroSection from './sections/IntroSection';
import HeroSection from './sections/HeroSection';
import TeamSection from './sections/TeamSection';
import SolutionsSection from './sections/SolutionsSection';
import ServicesSection from './sections/ServicesSection';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <IntroSection />
        <HeroSection />
        <TeamSection />
        <SolutionsSection />
        <ServicesSection />
      </main>
    </div>
  );
}

export default App;
