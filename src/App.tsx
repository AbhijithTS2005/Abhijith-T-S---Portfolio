import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import HowIThinkSection from './sections/HowIThinkSection';
import SmarTravelSection from './sections/SmarTravelSection';
import NextWaveSection from './sections/NextWaveSection';
import CertificatesSection from './sections/CertificatesSection';
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

      {/* 2. About Me */}
      <AboutSection />

      {/* 3. “How I Think” */}
      <HowIThinkSection />

      {/* 3. Featured Project — SMARTRAVEL */}
      <SmarTravelSection />

      {/* 4. Josephites NextWave Foundation */}
      <NextWaveSection />

      {/* 5. Experience & Certifications */}
      <CertificatesSection />

      {/* 6. Skills — Interactive Technology Constellation */}
      <SkillConstellationSection />

      {/* 7. Research Lab */}
      <ResearchLabSection />

      {/* 8. Achievements & Leadership */}
      <AchievementsSection />

      {/* 9. Digital DNA */}
      <DigitalDNASection />

      {/* 10. Future */}
      <FutureSection />

      {/* 11. Final Section & Footer */}
      <ContactFooterSection />
    </div>
  );
}

export default App;
