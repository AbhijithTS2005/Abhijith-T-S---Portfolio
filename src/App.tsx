import HeroSection from './sections/HeroSection';
import HowIThinkSection from './sections/HowIThinkSection';
import SmarTravelSection from './sections/SmarTravelSection';
import NextWaveSection from './sections/NextWaveSection';
import SkillConstellationSection from './sections/SkillConstellationSection';
import ResearchLabSection from './sections/ResearchLabSection';
import AchievementsSection from './sections/AchievementsSection';
import DigitalDNASection from './sections/DigitalDNASection';
import FutureSection from './sections/FutureSection';
import ContactFooterSection from './sections/ContactFooterSection';

function App() {
  return (
    <div className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA] selection:bg-purple-500 selection:text-white" style={{ overflowX: 'clip' }}>
      {/* 1. Hero — Identity */}
      <HeroSection />

      {/* 2. “How I Think” */}
      <HowIThinkSection />

      {/* 3. Featured Project — SMARTRAVEL */}
      <SmarTravelSection />

      {/* 4. Josephites NextWave Foundation */}
      <NextWaveSection />

      {/* 5. Skills — Interactive Technology Constellation */}
      <SkillConstellationSection />

      {/* 6. Research Lab */}
      <ResearchLabSection />

      {/* 7. Achievements & Leadership */}
      <AchievementsSection />

      {/* 8. Digital DNA */}
      <DigitalDNASection />

      {/* 9. Future */}
      <FutureSection />

      {/* 10. Final Section & Footer */}
      <ContactFooterSection />
    </div>
  );
}

export default App;
