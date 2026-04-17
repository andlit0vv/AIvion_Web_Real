import Header from './sections/Header';
import HeroSection from './sections/HeroSection';
import ProcessSection from './sections/ProcessSection';
import GrowthSection from './sections/GrowthSection';
import TeamSection from './sections/TeamSection';
import SolutionsSection from './sections/SolutionsSection';
import ServicesSection from './sections/ServicesSection';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <ProcessSection />
        <GrowthSection />
        <TeamSection />
        <SolutionsSection />
        <ServicesSection />
      </main>
    </div>
  );
}

export default App;
